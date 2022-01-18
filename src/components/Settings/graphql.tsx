import { gql } from "@apollo/client";

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
