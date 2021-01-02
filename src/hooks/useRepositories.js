import { useQuery } from '@apollo/client';
import { FETCH_REPOS } from '../graphql/queries';

const useRepositories = ({ searchKeyword }) => {
  const { data, loading } = useQuery(FETCH_REPOS, {
    fetchPolicy: 'cache-and-network',
    variables: { searchKeyword },
  });
  const repositories = data?.repositories;
  return { repositories, loading };
};

export default useRepositories;
