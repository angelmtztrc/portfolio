import { gql } from 'graphql-request';

export const GET_USER = gql`
  query GetUser {
    user {
      id
      name
      role
      location
      biography
      abilities
      picture {
        url
      }
    }
  }
`;
