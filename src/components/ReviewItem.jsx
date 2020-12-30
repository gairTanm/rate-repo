import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

const ReviewItem = ({ item }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.ratingContainer}>
            <Paragraph style={styles.rating}>{item.rating}</Paragraph>
          </View>
          <View>
            <Paragraph style={styles.username}>{item.user.username}</Paragraph>
            <Paragraph style={styles.date}>
              {item.createdAt.slice(0, 10)}
            </Paragraph>
          </View>
        </View>
        <Paragraph style={{ justifyContent: 'center', fontSize: 15 }}>
          {item.text}
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

const width = 50;

const styles = StyleSheet.create({
  ratingContainer: {
    borderWidth: 3,
    height: 50,
    width: 50,
    borderColor: '#90BEDE',
    borderRadius: width / 2,
  },
  card: {
    elevation: 6,
    margin: 6,
    fontWeight: 'bold',
    backgroundColor: '#F9F5EF',
  },
  date: {
    marginLeft: 10,
    opacity: 0.5,
  },
  rating: {
    color: '#90BEDE',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 15,
  },
  username: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default ReviewItem;
