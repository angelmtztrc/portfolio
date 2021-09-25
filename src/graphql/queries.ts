import { gql } from 'graphql-request';

export const HOME_QUERY = gql`
  query HomePage {
    me {
      name
      username
      biography
      email
      github
      twitter
      linkedin
      cover {
        url
      }
      picture {
        url
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
