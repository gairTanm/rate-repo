import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = variables => {
  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables,
  });
  const repository = data?.repository;
  return { repository, loading };
};

export default useRepository;
