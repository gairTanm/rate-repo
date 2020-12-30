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

const ViewRepository = () => {
  let { id } = useParams();
  const { repository, loading } = useRepository({ id });
  const handleSiteOpen = () => {
    Linking.openURL(repository.url);
  };
  return (
    <View style={{ flex: 1 }}>
      {!loading ? (
        <Card style={styles.card}>
          <Card.Cover
            source={{ uri: repository.ownerAvatarUrl }}
            resizeMode="stretch"
            style={{
              height: 300,
              margin: 10,
              borderRadius: 30,
              borderTopEndRadius: 30,
              borderTopLeftRadius: 30,
            }}
          />
          <Card.Content
            style={{
              alignSelf: 'center',
              width: Dimensions.get('screen').width - 20,
            }}
          >
            <View style={styles.title}>
              <Text
                style={{
                  fontSize: 25,
                  opacity: 0.7,
                }}
              >
                {repository.fullName}
              </Text>
            </View>
            <Paragraph style={styles.paragraph}>
              {repository.description}
            </Paragraph>
            <View style={styles.language}>
              <Text style={{ alignSelf: 'center', color: '#F1E9DB' }}>
                {repository.language}
              </Text>
            </View>
            <View style={styles.info}>
              <View style={styles.stats}>
                <Text style={{ alignSelf: 'center', fontSize: 20 }}>
                  {repository.stargazersCount > 1000
                    ? `${
                        Math.round((repository.stargazersCount / 1000) * 10) /
                        10
                      }k`
                    : repository.stargazersCount}
                </Text>
                <Text style={{ fontSize: 20, opacity: 0.5 }}>Stars</Text>
              </View>
              <View style={styles.stats}>
                <Text style={{ alignSelf: 'center', fontSize: 20 }}>
                  {repository.forksCount > 1000
                    ? `${Math.round((repository.forksCount / 1000) * 10) / 10}k`
                    : repository.forksCount}
                </Text>
                <Text style={{ fontSize: 20, opacity: 0.5 }}>Forks</Text>
              </View>

              <View style={styles.stats}>
                <Text style={{ alignSelf: 'center', fontSize: 20 }}>
                  {repository.reviewCount}
                </Text>
                <Text style={{ fontSize: 20, opacity: 0.5 }}>Reviews</Text>
              </View>

              <View style={styles.stats}>
                <Text style={{ alignSelf: 'center', fontSize: 20 }}>
                  {repository.ratingAverage}
                </Text>
                <Text style={{ fontSize: 20, opacity: 0.5 }}>Rating</Text>
              </View>
            </View>
          </Card.Content>
          <Card.Actions>
            <TouchableOpacity style={styles.button}>
              <Button title="Open in GitHub" onPress={handleSiteOpen} />
            </TouchableOpacity>
          </Card.Actions>
        </Card>
      ) : (
        <Text>Loading...</Text>
      )}
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
