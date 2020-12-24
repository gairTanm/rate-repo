import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  return (
    <View style={{ flex: 1 }}>
      {!loading ? (
        <View style={{ flex: 1 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            contentContainerStyle={{ justifyContent: 'space-around' }}
            renderItem={({ item }) => <RepositoryItem item={item} />}
          />
        </View>
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
