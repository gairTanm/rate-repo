import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import SearchRepositories from './SearchRepositories';
import { useDebounce } from 'use-debounce';
import Dropdown from './Dropdown';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  searchContainer: {
    padding: 10,
    width: '100%',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, onEndReached }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      contentContainerStyle={{ justifyContent: 'space-around' }}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      onEndReached={onEndReached}
      onEndReachedThreshold={1}
    />
  );
};

const RepositoryList = () => {
  const [variables, setVariables] = React.useState();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sort, setSort] = React.useState();
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const onChangeQuery = query => setSearchQuery(query);
  const loading = false;
  const { repositories, fetchMore } = useRepositories({
    ...variables,
    first: 3,
  });

  const onEndReached = () => {
    fetchMore();
  };

  useEffect(() => {
    setVariables({ searchKeyword: debouncedSearchQuery });
  }, [debouncedSearchQuery]);

  const onPress = (sortBy, variables) => {
    setSort(sortBy);
    setVariables(variables);
  };

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <View style={styles.searchContainer}>
        <SearchRepositories
          onChangeQuery={onChangeQuery}
          searchQuery={searchQuery}
        />
        <Dropdown sort={sort} onPress={onPress} />
      </View>
      {!loading ? (
        <RepositoryListContainer
          repositories={repositories}
          onEndReached={onEndReached}
        />
      ) : (
        <View>
          <Text
            style={{
              fontSize: 20,
              opacity: 0.6,
              justifyContent: 'space-around',
              alignSelf: 'center',
              flexDirection: 'column',
            }}
          >
            Loading...
          </Text>
        </View>
      )}
    </View>
  );
};

export default RepositoryList;
