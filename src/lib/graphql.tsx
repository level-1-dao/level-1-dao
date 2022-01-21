import { gql } from "@apollo/client";

export const GET_USERS = gql`
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
      newsletter
      journeyUpdates
      learningJourneys {
        id
        title
        created_at
        updated_at
      }
    }
  }
`;

export const UPDATE_SETTINGS = gql`
  mutation updateNotificationSettings(
    $id: String!
    $newsletter: Boolean
    $journeyUpdates: Boolean
    $connectedWalletAddress: String
    $username: String
    $country: String
  ) {
    update_users(
      where: { id: { _eq: $id } }
      _set: { 
        newsletter: $newsletter,
        journeyUpdates: $journeyUpdates,
        connectedWalletAddress: $connectedWalletAddress,
      }
    ) {
      affected_rows
    }
  }
`;

export const UPDATE_LINKED_WALLET_ADDRESS = gql`
  mutation updateNotificationSettings(
    $id: String!
    $wallet: String
  ) {
    update_users(
      where: { id: { _eq: $id } }
      _set: { connectedWalletAddress: $wallet }
    ) {
      affected_rows
    }
  }
`;

export const ADD_USER_LEARNING_JOURNEY = gql`
  mutation addUserLearningJourney($id: String!, $journeyId: String!) {
    insert_learningJourneys(
      objects: { user_id: $id, journey_id: $journeyId }
      onConflct: ignore
    ) {
      affected_rows
    }
  }
`;

