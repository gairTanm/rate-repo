import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import SearchRepositories from './SearchRepositories';
import { useDebounce } from 'use-debounce';

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

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={{ justifyContent: 'space-around' }}
        renderItem={({ item }) => <RepositoryItem item={item} />}
      />
    </View>
  );
};

const RepositoryList = () => {
  const [variables, setVariables] = React.useState();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const onChangeQuery = query => setSearchQuery(query);

  const { repositories, loading } = useRepositories({ ...variables });

  useEffect(() => {
    setVariables({ searchKeyword: debouncedSearchQuery });
  }, [debouncedSearchQuery]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchContainer}>
        <SearchRepositories
          onChangeQuery={onChangeQuery}
          searchQuery={searchQuery}
        />
      </View>
      {!loading ? (
        <>
          <RepositoryListContainer repositories={repositories} />
        </>
      ) : (
        <View>
          <Text
            style={{
              fontSize: 20,
              paddingTop: '70%',
              justifyContent: 'space-around',
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
