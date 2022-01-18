import React from "react";
import Image from "next/image";
import { useQuery, gql } from "@apollo/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { ProfileForm } from "../../components/Settings";

const GET_MY_LEARNINGS = gql`
  query getUser {
    users {
      id
      email
      username
      firstName
      lastName
      dateJoined
      lastOnline
      online
      created_at
      updated_at
      avatar
      connectedWalletAddress
      country
      timezone
      learningJourneys {
        id
        title
        created_at
        updated_at
      }
    }
  }
`;

function Profile() {
  const { loading, error, data } = useQuery(GET_MY_LEARNINGS);
  const user = data?.users[0];

  return (
    <div className="relative sm:py-4">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-1 lg:gap-24 lg:items-start">
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {loading && <Loading />}
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
          {user && <ProfileForm user={user} />}
        </div>
      </div>
    </div>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />,
  onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
});
