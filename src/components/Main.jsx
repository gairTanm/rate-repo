import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';
import ViewRepository from './ViewRepository';
import ReviewForm from './ReviewForm';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE2EC',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    justifyContent: 'center',
  },
});

const Main = () => {
  //eslint-disable-next-line
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="#ED723D" />
        <AppBar />
        <Switch>
          <Route path="/" exact>
            <RepositoryList />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/review">
            <ReviewForm />
          </Route>
          <Route path="/repo/:id">
            <ViewRepository />
          </Route>
          <Redirect to="/" />
        </Switch>
      </View>
    </View>
  );
};

export default Main;
