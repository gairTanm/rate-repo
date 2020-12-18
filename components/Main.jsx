import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE2EC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
