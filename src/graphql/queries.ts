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
      picture {
        responsiveImage(
          imgixParams: { fit: crop, w: 500, h: 500, auto: format }
        ) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
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
