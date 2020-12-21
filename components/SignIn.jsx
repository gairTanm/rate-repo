import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import { Formik, useField } from 'formik';
import { Button } from 'react-native-paper';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit, errors }) => {
  const [usernameField, usernameMeta, usernameHelpers] = useField('username');
  const [passwordField, passwordMeta, passwordHelpers] = useField('password');
  return (
    <View style={styles.form}>
      <TextInput
        label="Username"
        mode="outlined"
        style={errors.username ? styles.error : styles.input}
        value={usernameField.value}
        onChangeText={text => usernameHelpers.setValue(text)}
        placeholder="Username"
      />
      {errors.username ? (
        <Text style={styles.errorText}>{errors.username}</Text>
      ) : null}
      <TextInput
        label="Password"
        mode="outlined"
        placeholder="Password"
        value={passwordField.value}
        onChangeText={text => passwordHelpers.setValue(text)}
        style={errors.password ? styles.error : styles.input}
      />
      {errors.password ? (
        <Text style={styles.errorText}>{errors.password}</Text>
      ) : null}
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
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, errors }) => {
          return <SignInForm onSubmit={handleSubmit} errors={errors} />;
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
  inputContainer: {},
  input: {
    backgroundColor: '#F1E9DB',
    margin: 10,
    borderBottomWidth: 3,
    borderRadius: 10,
    height: 50,
    borderColor: '#90BEDE',
  },
  error: {
    backgroundColor: '#F1E9DB',
    margin: 10,
    borderBottomWidth: 3,
    borderRadius: 10,
    height: 50,
    borderColor: '#E3747F',
  },
  errorText: {
    color: '#E3747F',
  },
});

export default SignIn;
