import { useQuery } from '@apollo/client';
import React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Card, Paragraph, Title, TouchableRipple } from 'react-native-paper';
import { useParams } from 'react-router-native';
import useRepository from '../hooks/useRepository';
import * as Linking from 'expo-linking';
import ReviewList from './ReviewList';

const ViewRepository = () => {
  let { id } = useParams();
  const { repository, loading } = useRepository({ id });
  const handleSiteOpen = () => {
    Linking.openURL(repository.url);
  };
  return (
    <View style={{ flex: 1 }}>
      {!loading ? <ReviewList id={id} /> : <Text>Loading...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('screen').width - 20,
    margin: 20,
    padding: 10,
    borderWidth: 5,
    borderColor: '#90BEDE',
    backgroundColor: '#F1E9DB',
    elevation: 10,
  },
  title: {
    alignSelf: 'center',
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    height: '100%',
    margin: 10,
  },
  paragraph: {
    alignSelf: 'center',
    fontSize: 20,
    opacity: 0.7,
    marginTop: 20,
  },
  language: {
    backgroundColor: '#90BEDE',
    width: 100,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 5,
    opacity: 0.9,
    height: 25,
  },
  stats: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 30,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ViewRepository;
