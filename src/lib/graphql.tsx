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
        progress
        receivedTokens
        mintedNft
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
        newsletter: $newsletter
        journeyUpdates: $journeyUpdates
        connectedWalletAddress: $connectedWalletAddress
        username: $username
      }
    ) {
      affected_rows
    }
  }
`;

export const UPDATE_LINKED_WALLET_ADDRESS = gql`
  mutation updateNotificationSettings($id: String!, $wallet: String) {
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
    $userId: String!
    $learningJourneyId: uuid!
    $progress: Int!
    $title: String!
  ) {
    insert_learningJourneys(
      objects: {
        userId: $userId
        learningJourneyId: $learningJourneyId
        progress: $progress
        title: $title
      }
    ) {
      affected_rows
    }
  }
`;

export const UPDATE_USER_LEARNING_JOURNEY_PROGRESS = gql`
  mutation updateUserLearningJourney(
    $id: uuid!
    $progress: Int
    $updatedAt: timestamptz!
    $receivedTokens: Int
    $mintedNft: String
  ) {
    update_learningJourneys(
      where: { id: { _eq: $id } }
      _set: {
        progress: $progress
        updated_at: $updatedAt
        receivedTokens: $receivedTokens
        mintedNft: $mintedNft
      }
    ) {
      affected_rows
    }
  }
`;

export const ADD_LEARNING_MOMENT = gql`
  mutation addLearningMoment(
    $userId: String!
    $type: String!
    $moment: String!
    $learningBitId: uuid!
  ) {
    update_learningMoments(
      where: {
        userId: { _eq: $userId }
        learningBitId: { _eq: $learningBitId }
      }
      _set: { type: $type, moment: $moment }
    ) {
      affected_rows
    }
  }
`;
