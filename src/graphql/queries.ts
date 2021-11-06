import { gql } from 'graphql-request';

export const HOME_QUERY = gql`
  query HomePage {
    profile {
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
        url
        alt
      }
      description
      github
    }
    allArticles {
      id
      title
      description
      link
      category {
        name
      }
      picture {
        url
        alt
      }
    }
  }
`;
