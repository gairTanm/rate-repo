import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <KeyboardAvoidingView>
        <View style={styles.form}>
          <TextInput
            label="Username"
            mode="outlined"
            style={styles.input}
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <TextInput
            label="Password"
            mode="outlined"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={styles.input}
            selectionColor="orange"
          />
          <Button
            mode="contained"
            style={{ backgroundColor: '#90BEDE', margin: 10 }}
            onPress={username => {
              console.log(username);
            }}
          >
            Sign In
          </Button>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%',
    elevation: 10,
    backgroundColor: '#F1E9DB',
  },
  input: {
    backgroundColor: '#F1E9DB',

    margin: 10,
  },
});

export default SignIn;
