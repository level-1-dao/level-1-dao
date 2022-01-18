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
  mutation updateSettings(
    $id: String
    $newsletter: Boolean!
    $journeyUpdates: Boolean!
  ) {
    update_users(
      where: { id: { _eq: $id } }
      _set: { newsletter: $newsletter, journeyUpdates: $journeyUpdates }
    ) {
      affected_rows
    }
  }
`;
