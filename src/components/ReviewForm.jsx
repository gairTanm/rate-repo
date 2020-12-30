import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useMutation } from '@apollo/react-hooks';
import { Formik, useField } from 'formik';
import { useHistory } from 'react-router-native';
import * as yup from 'yup';
import { CREATE_REVIEW } from '../graphql/mutations';
import { Button, TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
  textInputContainer: {
    marginTop: 15,
  },
  btnContainer: {
    marginTop: 15,
  },
  formContainer: {
    padding: 15,
  },
  graphqlError: {
    marginTop: 10,
  },
  errorText: {
    marginTop: 5,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

const CreateReviewForm = ({ createReview }) => (
  <View>
    <FormikTextInput name="ownerName" placeholder="Repository owner name" />
    <View style={styles.textInputContainer}>
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
    </View>
    <View style={styles.textInputContainer}>
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
    </View>
    <View style={styles.textInputContainer}>
      <FormikTextInput name="text" placeholder="Review" multiline />
    </View>
    <View style={styles.btnContainer}>
      <Button onPress={createReview}>Create a Review</Button>
    </View>
  </View>
);

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number('Rating should be a number between 0 and 100')
    .required('Rating is required')
    .min(0)
    .max(100),
  text: yup.string(),
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const ReviewForm = () => {
  const [mutate, { error }] = useMutation(CREATE_REVIEW);
  const history = useHistory();

  const createReview = async values => {
    const { ownerName, repositoryName, rating, text } = values;
    const parsedRating = +rating;

    try {
      const { data } = await mutate({
        variables: {
          review: {
            ownerName,
            repositoryName,
            rating: parsedRating,
            text,
          },
        },
      });

      if (data?.createReview) {
        history.push(`/repository/${data?.createReview?.repositoryId}`);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={createReview}
      >
        {({ handleSubmit }) => <CreateReviewForm createReview={handleSubmit} />}
      </Formik>
      {error && (
        <BodyText style={styles.graphqlError} color="error">
          {error.message}
        </BodyText>
      )}
    </View>
  );
};

export default ReviewForm;
