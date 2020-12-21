import { gql } from 'apollo-boost';

export const FETCH_REPOS = gql`
  query {
    repositories {
      edges {
        node {
          ownerName
          fullName
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
