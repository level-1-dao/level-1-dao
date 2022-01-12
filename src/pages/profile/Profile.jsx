import React from 'react';
import Image from 'next/image';
import { useQuery, gql } from "@apollo/client";
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

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
          {user && (
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-2xl text-primary font-extrabold tracking-tight">
                Profile
              </h2>
              <Image
                className="object-cover shadow-lg rounded-lg w-100 h-100"
                src={user.avatar}
                alt=""
                width={120}
                height={120}
              />
              <div className="sm:col-span-2">
                <div className="space-y-4">
                  <div className="text-lg text-accent leading-6 font-medium space-y-1">
                    <h3>Name: {user.username}</h3>
                  </div>
                  <div className="text-lg">
                    <p className="text-base-content">Email: {user.email}</p>
                    <p className="text-base-content">Date Joined : {new Date(user.dateJoined).toLocaleString()}</p>
                    <p className="text-base-content">Country : {user.country}</p>
                    <p className="text-base-content">Timezone : {user.timezone}</p>
                  </div>
                  <h2 className="text-2xl text-primary font-extrabold tracking-tight">
                    User Learning
                  </h2>
                  <div className="text-lg">
                    {user.learningJourneys?.map((item) => (
                      <div key={item.id} className={`flex space-x-4 items-center`}>
                        <span className="text-lg font-bold">
                          {item.title}
                        </span>
                        <p>Date :{new Date(item.created_at).toLocaleString()}</p>
                      </div>
                    ))}
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
