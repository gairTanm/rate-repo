import { gql } from 'apollo-boost';

export const FETCH_REPOS = gql`
  query {
    repositories {
      edges {
        node {
          ownerName
          fullName
          id
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          ownerAvatarUrl
          language
          description
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query repository($id: String!) {
    repository(id: $id) {
      ownerName
      fullName
      id
      ratingAverage
      reviewCount
      stargazersCount
      forksCount
      ownerAvatarUrl
      language
      description
    }
  }
`;
