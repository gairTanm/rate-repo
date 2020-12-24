import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';
import AuthStorageContext from '../contexts/AuthStorageContext';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ef8354',
    paddingTop: Constants.statusBarHeight + 8,
    borderBottomWidth: 5,
    borderBottomColor: '#90BEDE',
    elevation: 20,
    width: '100%',
    height: 100,
  },
  text: {
    fontSize: 20,
    marginLeft: '2%',
    opacity: 0.6,
  },
});

const AppBar = () => {
  const data = useQuery(AUTHORIZED_USER);
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 7 }}
      >
        <View style={{ width: 150 }}>
          <Link
            to="/"
            style={{
              marginLeft: '2%',
            }}
            component={TouchableOpacity}
            activeOpacity={0.7}
          >
            <Text style={styles.text}>Repositories</Text>
          </Link>
        </View>
        <View style={{ width: 90 }}>
          {!data.authorizedUser ? (
            <Link
              to="/signin"
              style={{
                marginLeft: '2%',
              }}
              component={TouchableOpacity}
              activeOpacity={0.7}
            >
              <Text style={styles.text}>SignIn</Text>
            </Link>
          ) : (
            <Text style={styles.text} onPress={signOut}>
              SignOut
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;
