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
        learningJourneyId
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
        username: $username,
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

export const ADD_USER_LEARNING_JOURNEYS = gql`
  mutation addUserLearningJourney(
    $id: String!,
    $learningJourneyId: uuid!,
    $progress: Int!,
    $title: String!,
  ) {
    insert_learningJourneys(
      objects: { 
        userId: $id,
        learningJourneyId: $learningJourneyId 
        progress: $progress,
        title: $title
      }
    ) {
      affected_rows
    }
  }
`;

export const UPDATE_USER_LEARNING_JOURNEY = gql`
  mutation updateUserLearningJourney(
    $id: uuid!,
    $progress: Int!,
    $updated_at: timestamptz!,
    $mintedNft: String!,
    $receivedTokens: String!,
  ) {
    update_learningJourneys(
      where: { id: { _eq: $id } }
      _set: {
        progress: $progress,
        updated_at: $updated_at,
        mintedNft: $mintedNft,
        receivedTokens: $receivedTokens,
      }
    ) {
      affected_rows
    }
  }
`;




