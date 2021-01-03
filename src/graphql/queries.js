import { gql } from 'apollo-boost';

export const FETCH_REPOS = gql`
  query($searchKeyword: String, $first: Int!, $after: String) {
    repositories(searchKeyword: $searchKeyword, first: $first, after: $after) {
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
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
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
  query($id: ID!) {
    repository(id: $id) {
      id
      ownerName
      name
      fullName
      ratingAverage
      reviewCount
      stargazersCount
      watchersCount
      forksCount
      openIssuesCount
      url
      ownerAvatarUrl
      description
      language
      authorizedUserHasReviewed
    }
  }
`;

export const GET_REVIEWS = gql`
  query($id: ID!) {
    repository(id: $id) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
