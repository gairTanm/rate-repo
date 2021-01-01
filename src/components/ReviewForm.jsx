import React, { useState } from 'react';
import { Formik, useField } from 'formik';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import * as yup from 'yup';
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper';
import useReview from '../hooks/useReview';
import { useHistory } from 'react-router-native';

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Username is required').min(3).max(30),
  repositoryName: yup.string().required('Password is required').min(5).max(50),
  review: yup.string().required(),
  rating: yup.number().required(),
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  review: '',
};

const SignUpForm = ({ onSubmit, errors }) => {
  const [ownerNameField, ownerNameMeta, ownerNameHelpers] = useField(
    'ownerName'
  );
  const [
    repositoryNameField,
    repositoryNameMeta,
    repositoryNameHelpers,
  ] = useField('repositoryName');
  const [ratingField, ratingMeta, ratingHelpers] = useField('rating');
  const [reviewField, reviewMeta, reviewHelpers] = useField('review');
  const showOwnerNameError = ownerNameMeta.touched && ownerNameMeta.error;
  const showRepositoryNameError =
    repositoryNameMeta.touched && repositoryNameMeta.error;
  const showRatingError = ratingMeta.touched && ratingMeta.error;
  const showReviewError = reviewMeta.touched && reviewMeta.error;
  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Owner Name"
        value={ownerNameField.value}
        style={showOwnerNameError ? styles.error : styles.input}
        onChangeText={text => ownerNameHelpers.setValue(text)}
      />
      {showOwnerNameError ? (
        <Text style={styles.errorText}>Owner name is required</Text>
      ) : null}
      <TextInput
        placeholder="Repository Name"
        value={repositoryNameField.value}
        style={showRepositoryNameError ? styles.error : styles.input}
        onChangeText={text => repositoryNameHelpers.setValue(text)}
      />
      {showRepositoryNameError ? (
        <Text style={styles.errorText}>Repository name is required</Text>
      ) : null}
      <TextInput
        placeholder="Rating"
        value={ratingField.value}
        style={showRatingError ? styles.error : styles.input}
        onChangeText={text => ratingHelpers.setValue(text)}
      />
      {showRatingError ? (
        <Text style={styles.errorText}>
          Umm... we do require a rating tbh :/
        </Text>
      ) : null}

      <TextInput
        multiline
        value={reviewField.value}
        placeholder="Review"
        onChangeText={text => reviewHelpers.setValue(text)}
        style={showReviewError ? styles.error : styles.input}
      />
      {showReviewError ? (
        <Text style={styles.errorText}>What's the point if this is empty!</Text>
      ) : null}
      <Button
        mode="contained"
        testID="button"
        style={{ backgroundColor: '#90BEDE', margin: 10 }}
        onPress={onSubmit}
      >
        Submit (Hope they'll like it)
      </Button>
    </View>
  );
};

const ReviewForm = () => {
  const [review] = useReview();
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const onSubmit = async values => {
    try {
      await review({
        ...values,
        text: values.review,
        rating: parseInt(values.rating),
      });
      history.push('/');
    } catch (e) {
      setVisible(true);
    }
  };

  return (
    <View style={{ flex: 1, width: '100%', padding: 5 }}>
      <Portal>
        <Dialog visible={visible}>
          <Dialog.Title>Oh hey...a wild error just appeared!</Dialog.Title>
          <Dialog.Content>
            <Text>
              Sorry...either that repository does not exist or you have already
              reviewed it. Please recheck the name just in case...
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
    borderColor: '#90BEDE',
    opacity: 0.7,
    minHeight: 40,
    maxHeight: 100,
  },
  error: {
    backgroundColor: '#F1E9DB',
    margin: 10,
    opacity: 0.7,
    borderBottomWidth: 3,
    borderRadius: 10,
    borderColor: '#E3747F',
    minHeight: 40,
    maxHeight: 100,
  },
  errorText: {
    color: '#E3747F',
  },
});

export default ReviewForm;
