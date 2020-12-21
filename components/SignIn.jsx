import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { Formik, useField } from 'formik';
import { Button } from 'react-native-paper';

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  const [usernameField, usernameMeta, usernameHelpers] = useField('username');
  const [passwordField, passwordMeta, passwordHelpers] = useField('password');
  return (
    <View style={styles.form}>
      <TextInput
        label="Username"
        mode="outlined"
        style={styles.input}
        value={usernameField.value}
        onChangeText={text => usernameHelpers.setValue(text)}
        placeholder="Username"
      />
      <TextInput
        label="Password"
        mode="outlined"
        placeholder="Password"
        value={passwordField.value}
        onChangeText={text => passwordHelpers.setValue(text)}
        style={styles.input}
      />
      <Button
        mode="contained"
        style={{ backgroundColor: '#90BEDE', margin: 10 }}
        onPress={onSubmit}
      >
        Sign In
      </Button>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = values => {
    console.log(values);
  };
  return (
    <View style={{ width: '100%', backgroundColor: '', flex: 1, padding: 5 }}>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit }) => {
          return <SignInForm onSubmit={handleSubmit} />;
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: '100%',
    padding: 10,
    elevation: 10,
    backgroundColor: '#F3ECE0',
    borderRadius: 10,
  },
  input: {
    backgroundColor: '#F1E9DB',
    margin: 10,
    borderRadius: 10,
    height: 50,
  },
});

export default SignIn;
