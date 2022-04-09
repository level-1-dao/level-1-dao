import fetch from "isomorphic-unfetch";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { expireToken } from "./tokenExpired";

let accessToken = null;

const requestAccessToken = async () => {
  if (accessToken) return;
  const res = await fetch(`${process.env.AUTH0_BASE_URL}/api/auth/token`);
  if (res.ok) {
    const json = await res.json();
    accessToken = json.idToken;
  } else {
    accessToken = "public";
  }
};

// remove cached token on 401 from the server
const resetTokenLink = onError(({ networkError }) => {
  if (networkError) {
    accessToken = null;
  }
});

const createHttpLink = (headers) => {
  const httpLink = new HttpLink({
    uri: `https://${process.env.HASURA_GRAPHQL_URL}`,
    credentials: "include",
    headers, // auth token is fetched on the server side
    fetch,
  });
  return httpLink;
};

const createWSLink = () => {
  const url = `wss://${process.env.HASURA_GRAPHQL_URL}`;
  return new WebSocketLink(
    new SubscriptionClient(url, {
      lazy: true,
      reconnect: true,
      connectionParams: async () => {
        await requestAccessToken(); // happens on the client
        if (accessToken === null || accessToken === "public") return {};
        if (accessToken) {
          return {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          };
        }
        return {};
      },
      connectionCallback: (err) => {
        if (err && (err.includes("JWTExpired") || err.includes("JWSError"))) {
          expireToken();
        }
      },
    })
  );
};

export default function createApolloClient(initialState, headers) {
  const ssrMode = typeof window === "undefined";
  let link;
  if (ssrMode) {
    link = createHttpLink(headers);
  } else {
    link = createWSLink();
  }
  return new ApolloClient({
    ssrMode,
    link,
    cache: new InMemoryCache().restore(initialState),
  });
}
