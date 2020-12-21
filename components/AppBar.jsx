import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Constants from 'expo-constants';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ef8354',
    paddingTop: Constants.statusBarHeight + 8,
    width: '100%',
    height: 100,
  },
});

const AppBar = () => {
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
            <Text
              style={{
                fontSize: 20,
                marginLeft: '2%',
                opacity: 0.6,
              }}
            >
              Repositories
            </Text>
          </Link>
        </View>
        <View style={{ width: 90 }}>
          <Link
            to="/signin"
            style={{
              marginLeft: '2%',
            }}
            component={TouchableOpacity}
            activeOpacity={0.7}
          >
            <Text
              style={{
                fontSize: 20,

                marginLeft: '2%',
                opacity: 0.6,
              }}
            >
              SignIn
            </Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;
