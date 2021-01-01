import React, { useState } from 'react';
import { Formik, useField } from 'formik';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import * as yup from 'yup';
import { setLocale } from 'yup';
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required').min(3).max(30),
  password: yup.string().required('Password is required').min(5).max(50),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required('Password confirm is required'),
});

const initialValues = {
  username: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = ({ onSubmit, errors }) => {
  const [usernameField, usernameMeta, usernameHelpers] = useField('username');
  const [passwordField, passwordMeta, passwordHelpers] = useField('password');
  const [
    confirmPasswordField,
    confirmPasswordMeta,
    confirmPasswordHelpers,
  ] = useField('confirmPassword');
  const showUsernameError = usernameMeta.touched && usernameMeta.error;
  const showPasswordError = passwordMeta.touched && passwordMeta.error;
  const showConfirmPasswordError =
    confirmPasswordMeta.touched && confirmPasswordMeta.error;
  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Username"
        value={usernameField.value}
        style={showUsernameError ? styles.error : styles.input}
        onChangeText={text => usernameHelpers.setValue(text)}
      />
      {showUsernameError ? (
        <Text style={styles.errorText}>
          Username length should be atleast 3 and less than 30!{' '}
        </Text>
      ) : null}
      <TextInput
        placeholder="Password"
        value={passwordField.value}
        style={showPasswordError ? styles.error : styles.input}
        onChangeText={text => passwordHelpers.setValue(text)}
      />
      {showPasswordError ? (
        <Text style={styles.errorText}>
          Password length should be atleast 5 and less than 50!
        </Text>
      ) : null}
      <TextInput
        placeholder="Confirm Password"
        value={confirmPasswordField.value}
        style={showConfirmPasswordError ? styles.error : styles.input}
        onChangeText={text => confirmPasswordHelpers.setValue(text)}
      />
      {showConfirmPasswordError ? (
        <Text style={styles.errorText}>
          Umm... this should be the same as the password :)
        </Text>
      ) : null}

      <Button
        mode="contained"
        testID="button"
        style={{ backgroundColor: '#90BEDE', margin: 10 }}
        onPress={onSubmit}
      >
        Sign Up
      </Button>
    </View>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const onSubmit = async values => {
    const { username, password } = values;
    console.log({ username, password });
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      setVisible(true);
    }
  };

  return (
    <View style={{ flex: 1, width: '100%', padding: 5 }}>
      <Portal>
        <Dialog visible={visible}>
          <Dialog.Title>Username Already Taken!</Dialog.Title>
          <Dialog.Content>
            <Text>
              Umm... the username's already taken, try using another one.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              contained
              style={styles.button}
              onPress={() => setVisible(false)}
            >
              Umm...Okay
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, errors }) => (
          <SignUpForm onSubmit={handleSubmit} errors={errors} />
        )}
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
    opacity: 0.7,
  },
  error: {
    backgroundColor: '#F1E9DB',
    margin: 10,
    opacity: 0.7,
    borderBottomWidth: 3,
    borderRadius: 10,
    height: 50,
    borderColor: '#E3747F',
  },
  errorText: {
    color: '#E3747F',
  },
});

export default SignUp;
