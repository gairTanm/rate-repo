import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = variables => {
  console.log(variables);
  const { data, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables,
  });
  const repository = data?.repository;
  console.log(repository);
  return { repository, loading };
};

export default useRepository;
