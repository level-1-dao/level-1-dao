import React from "react";
import { useQuery } from "@apollo/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { ProfileForm } from "../../components/Settings";
import { GET_USERS } from "../../lib/graphql";

function Profile() {
  const { loading, error, data } = useQuery(GET_USERS);
  const user = data?.users[0];
  console.log("user", user);
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
