import { useQuery } from '@apollo/client';
import { FETCH_REPOS } from '../graphql/queries';

const useRepositories = variables => {
  const { data, loading, fetchMore, ...result } = useQuery(FETCH_REPOS, {
    fetchPolicy: 'cache-and-network',
    variables: { ...variables },
  });
  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }
    fetchMore({
      query: FETCH_REPOS,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...previousResult.repositories.edges,
              ...fetchMoreResult.repositories.edges,
            ],
          },
        };

        return nextResult;
      },
    });
  };
  const repositories = data?.repositories;
  return { repositories, loading, fetchMore: handleFetchMore, ...result };
};

export default useRepositories;
