import { gql } from 'graphql-request';

/**
 * USERS
 */

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

/**
 * PROJECTS
 */

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

/**
 * EXPERIENCES
 */

export const GET_EXPERIENCES = gql`
  query GetExperiences {
    allExperiences(orderBy: from_DESC) {
      id
      title
      description
      company
      from
      to
    }
  }
`;

/**
 * ARTICLES
 */

export const GET_ARTICLES = gql`
  query GetArticles {
    allArticles(orderBy: createdAt_DESC) {
      slug
      title
      description
      picture {
        url
      }
    }
  }
`;

export const GET_ARTICLES_SLUGS = gql`
  query GetArticlesSlugs {
    allArticles(orderBy: createdAt_DESC) {
      slug
    }
  }
`;

export const GET_ARTICLE_BY_SLUG = gql`
  query GetArticle($slug: String!) {
    article(filter: { slug: { eq: $slug } }) {
      slug
      title
      tags
      description
      content
      picture {
        url
      }
      createdAt
    }
  }
`;
