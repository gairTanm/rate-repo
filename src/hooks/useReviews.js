import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = variables => {
  const { data, loading } = useQuery(GET_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables,
  });
  const reviews = data?.repository.reviews;
  return { reviews, loading };
};

export default useReviews;
