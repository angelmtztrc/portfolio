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
      preview
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
    allExperiences {
      id
      title
      description
      from
      to
      company {
        name
      }
    }
    allCertificates {
      id
      url
      title
      credentialId
      issued
      picture {
        url
        alt
      }
      company {
        name
      }
    }
  }
`;
