import { useQuery } from '@apollo/client';
import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';

const ViewRepository = () => {
  let { id } = useParams();
  console.log(id);
  const { repository, loading } = useRepository({ id });
  return (
    <View style={{ flex: 1 }}>
      {!loading ? (
        <View style={styles.container}>
          <Text>{repository.fullName}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    flex: 1,
    margin: 20,
    backgroundColor: 'orange',
  },
});

export default ViewRepository;
