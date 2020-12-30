import { gql } from 'apollo-boost';
import { REVIEW_INFO } from './fragments';

export const CREATE_USER = gql`
  type User {
    username: String!
    password: String!
  }

  mutation createUser($user: User!) {
    createUser(user: $user) {
      id
      username
    }
  }
`;

export const SIGN_IN = gql`
  mutation authorize($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      user {
        username
      }
      repositoryId
      ...ReviewInfo
    }
  }
  ${REVIEW_INFO}
`;
