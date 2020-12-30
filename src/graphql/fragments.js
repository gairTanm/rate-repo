import { gql } from '@apollo/client';

export const REVIEW_INFO = gql`
  fragment ReviewInfo on Review {
    id
    rating
    createdAt
    text
  }
`;
