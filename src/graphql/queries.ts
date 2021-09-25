import { gql } from 'graphql-request';

export const HOME_QUERY = gql`
  query HomePage {
    me {
      name
      biography
      email
      github
      twitter
      linkedin
      picture {
        responsiveImage {
          src
        }
      }
      experience {
        id
        title
      }
    }
    allRepositories {
      id
      title
      category {
        name
      }
      picture {
        responsiveImage {
          src
        }
      }
      description
      github
    }
  }
`;
