import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_REPOS } from '../graphql/queries';

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
  const { data, error, loading } = useQuery(FETCH_REPOS, {
    fetchPolicy: 'cache-and-network',
  });

  return (
    <View style={{ flex: 1 }}>
      {!loading ? (
        <View style={styles.container}>
          <StatusBar translucent backgroundColor="#ED723D" />
          <AppBar />
          <Switch>
            <Route path="/" exact>
              <RepositoryList data={data} />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Redirect to="/" />
          </Switch>
        </View>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
};

export default Main;
