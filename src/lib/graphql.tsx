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
      learningMoments {
        id
        learningBitId
        type
        moment
        created_at
      }
    }
  }
`;

export const SUBSCRIBE_USER_LEARNING_MOMENTS = gql`
  subscription subscribeUserLearningMoments {
    learningMoments {
      id
      learningBitId
      type
      moment
      created_at
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
    insert_learningMoments(
      objects: {
        type: $type
        moment: $moment
        userId: $userId
        learningBitId: $learningBitId
      }
    ) {
      affected_rows
    }
  }
`;

export const GET_LEARNING_MOMENTS = gql`
  query getLearningMoments($learningBitId: uuid!) {
    learningMoments(where: { learningBitId: { _eq: $learningBitId } }) {
      id
      type
      moment
      userId
      created_at
    }
  }
`;

export const GET_USER_LEARNING_MOMENT = gql`
  query getUserLearningMoment($userId: String!, $learningBitId: uuid!) {
    learningMoments(
      where: {
        userId: { _eq: $userId }
        learningBitId: { _eq: $learningBitId }
      }
    ) {
      id
      type
      moment
      userId
      created_at
    }
  }
`;

export const GET_LEARNING_JOURNEY = gql`
  query getLearningJourney($learningJourneyId: uuid!) {
    learningJourney(where: { id: { _eq: $learningJourneyId } }) {
      title
      fullDescription
      learningOutcomes
      created_at
      updated_at
      tokensAvailable
      learningBits {
        id
        title
        time
        contentType
        tokens
      }
    }
  }
`;

export const GET_LEARNING_BIT = gql`
  query getLearningBits($learningBitId: uuid!) {
    learningBits(where: { id: { _eq: $learningBitId } }) {
      id
      title
      description
      tokens
      contentType
      content
      time
      guideNotes {
        note
        userId
        role
        user {
          avatar
          username
        }
      }
    }
  }
`;
