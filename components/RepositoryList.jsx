import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = ({ data }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data.repositories.edges}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={{ justifyContent: 'space-around' }}
        renderItem={({ item }) => <RepositoryItem item={item.node} />}
      />
    </View>
  );
};

export default RepositoryList;
