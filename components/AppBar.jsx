import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ef8354',
    width: '100%',
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    height: '7%',
  },
});

const AppBar = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            marginTop: '3%',
            marginLeft: '2%',
            opacity: 0.6,
          }}
        >
          Repositories
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;
