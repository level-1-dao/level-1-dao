import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUserProfile {
    user_private {
      userId
      email
      updated_at
      newsletter
      user_details {
        username
        firstName
        lastName
        online
        avatar
        country
        connectedWalletAddress
      }
      user_learning_moments {
        id
        learningBitId
        type
        moment
        created_at
        promptId
      }
      user_learning_journeys {
        id
        learningJourneyId
        mintedNft
        receivedTokens
        completed
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
    $title: String!
  ) {
    insert_mintedLearningJourneys(
      objects: {
        userId: $userId
        learningJourneyId: $learningJourneyId
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
    $updatedAt: timestamptz!
    $receivedTokens: Int
    $mintedNft: String
  ) {
    update_mintedLearningJourneys(
      where: { id: { _eq: $id } }
      _set: {
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
    $promptId: uuid
  ) {
    insert_learningMoments(
      objects: {
        type: $type
        moment: $moment
        userId: $userId
        learningBitId: $learningBitId
        promptId: $promptId
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
      promptId
      user_info {
        username
        avatar
      }
    }
  }
`;

export const SUBSCRIBE_LEARNING_MOMENTS = gql`
  subscription subscribeLearningMoments($learningBitId: uuid!) {
    learningMoments(where: { learningBitId: { _eq: $learningBitId } }) {
      id
      learningBitId
      type
      moment
      created_at
      promptId
      user_info {
        username
        avatar
      }
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

export const SUBSCRIBE_USER_LEARNING_MOMENTS = gql`
  subscription subscribeUserLearningMoments($userId: String!) {
    learningMoments(where: { userId: { _eq: $userId } }) {
      id
      learningBitId
      type
      moment
      created_at
      promptId
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
      nft
      metaData
      learningBits(order_by: { position: asc }) {
        id
        title
        time
        contentType
        tokens
        position
        guideNotes {
          role
          userId
          guide_info {
            username
            avatar
          }
        }
      }
    }
  }
`;

export const GET_LEARNING_BIT = gql`
  query getLearningBits($learningBitId: uuid!) {
    learningBits(
      where: { id: { _eq: $learningBitId } }
      order_by: { position: asc }
    ) {
      id
      title
      description
      tokens
      contentType
      content
      time
      prompt
      guideNotes {
        note
        userId
        role
        guide_info {
          avatar
          username
        }
      }
      learningPrompts {
        prompt
        type
        id
      }
    }
  }
`;

export const GET_ALL_LEARNING_BITS = gql`
  query getAllLearningBits {
    learningBits(order_by: { position: asc }) {
      id
      title
      description
      tokens
      contentType
      content
      time
      prompt
      learningJourney {
        id
        title
      }
      guideNotes {
        note
        userId
        role
        guide_info {
          avatar
          username
        }
      }
    }
  }
`;

export const GET_LEARNING_BITS_BY_USER = gql`
  query getLearningBitsByUser($userId: String!) {
    learningBits(where: { userId: { _eq: $userId } }) {
      id
      title
      description
      tokens
      contentType
      content
      time
      prompt
      learningJourney {
        id
        title
      }
      guideNotes {
        note
        userId
        role
        guide_info {
          avatar
          username
        }
      }
    }
  }
`;
