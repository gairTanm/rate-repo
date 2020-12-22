import { gql } from 'apollo-boost';

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
  type AuthorizeInput {
    username: String!
    password: String!
  }

  mutation authorize($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;
