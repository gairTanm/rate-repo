import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const review = async ({ repositoryName, ownerName, rating, text }) => {
    console.log({ text, rating });
    const { data } = await mutate({
      variables: { review: { repositoryName, ownerName, rating, text } },
    });
    return data;
  };

  return [review, result];
};

export default useReview;
