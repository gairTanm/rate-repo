import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343a40',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
      <StatusBar style="auto" />
    </View>
  );
};

export default Main;
