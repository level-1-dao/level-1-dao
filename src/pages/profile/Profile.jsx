import React from "react";
import {useUser, withPageAuthRequired} from "@auth0/nextjs-auth0";
import ProfileForm from "./ProfileForm";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

function Profile() {
  const {user, isLoading} = useUser();

  return (
    <div className="relative sm:py-4">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-1 lg:gap-24 lg:items-start card card-bordered shadow-2xl p-12">
        <div className="relative mx-auto max-w-md sm:max-w-3xl">
          {isLoading && <Loading />}
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

/*
{
  "nickname": "faisalraza32",
  "name": "faisalraza32@hotmail.com",
  "picture": "https://s.gravatar.com/avatar/6a4c07666d469915263f357daf1d2ac0?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Ffa.png",
  "updated_at": "2022-01-06T04:36:15.774Z",
  "email": "faisalraza32@hotmail.com",
  "email_verified": false,
  "sub": "auth0|61d667a578b4bd006ac836cf"
}

name: "ML Team"
nickname: "ml.mobile.integration"
picture: "https://lh3.googleusercontent.com/a/AATXAJz7jjrAWkVlvjc_3nkpUk_EOhFZHhLH_r-9q8cM=s96-c"
updated_at: "2022-01-06T13:37:50.218Z"
email: "ml.mobile.integration@gmail.com"
email_verified: true
sub: "google-oauth2|108197103696306810393"
family_name: "Team"
given_name: "ML"
locale: "en"
*/
