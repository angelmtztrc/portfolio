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

export const GET_PROJECTS = gql`
  query GetProject {
    allProjects {
      id
      name
      description
      url
      picture {
        url
      }
    }
  }
`;
