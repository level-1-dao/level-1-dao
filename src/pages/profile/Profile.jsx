import React from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

function Profile() {
  const { user, isLoading } = useUser();

  return (
    <div className="relative sm:py-4">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-1 lg:gap-24 lg:items-start">
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {isLoading && <Loading />}
          {user && (
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-2xl text-primary font-extrabold tracking-tight">
                Profile
              </h2>
              <img
                className="object-cover shadow-lg rounded-lg w-100 h-100"
                src={user.picture}
                alt=""                
                width={120}
              />
              <div className="sm:col-span-2">
                <div className="space-y-4">
                  <div className="text-lg text-accent leading-6 font-medium space-y-1">
                    <h3>Name: {user.name}</h3>
                  </div>
                  <div className="text-lg">
                    <p className="text-base-content">Email: {user.email}</p>
                    <p className="text-base-content">Verified : {user.email_verified ? "Yes" : "No"}</p>
                    <p className="text-base-content">JSON: {JSON.stringify(user,null, 2)}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
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