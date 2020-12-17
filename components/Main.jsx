import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Main = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <RepositoryList />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
};

export default Main;
