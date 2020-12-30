import { useQuery } from '@apollo/client';
import React from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import useReviews from '../hooks/useReviews';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewList = ({ id }) => {
  const { reviews, loading } = useReviews({ id });
  const reviewsNodes = reviews ? reviews.edges.map(edge => edge.node) : [];
  console.log(reviewsNodes);
  return (
    <View style={{ flex: 1, width: Dimensions.get('screen').width }}>
      {!loading ? (
        <FlatList
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          data={reviewsNodes}
          contentContainerStyle={{ justifyContent: 'space-around' }}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => <ReviewItem item={item} />}
        />
      ) : (
        <Text>Loading Reviews...</Text>
      )}
    </View>
  );
};

export default ReviewList;
