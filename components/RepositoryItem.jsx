import React from 'react';
import { TouchableHighlight, View, StyleSheet, Image } from 'react-native';
import { Dimensions } from 'react-native';
import Text from './Text';

const RepositoryItem = ({ item }) => {
  return (
    <TouchableHighlight key={item.id} style={styles.primary}>
      <View style={styles.touchable}>
        <View style={styles.imageText}>
          <Image
            source={{ uri: `${item.ownerAvatarUrl}` }}
            style={styles.image}
          />
          <View style={{ flexWrap: 'wrap', margin: 10 }}>
            <Text style={{ fontSize: 20, margin: 2 }} color="textPrimary">
              {item.fullName}
            </Text>
            <Text
              style={{
                marginTop: 10,
                width: Dimensions.get('screen').width - 160,
              }}
              color="textSecondary"
            >
              {item.description}
            </Text>
            <View style={styles.language}>
              <Text style={{ alignSelf: 'center', color: '#F1E9DB' }}>
                {item.language}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.stats}>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>
              {item.stargazersCount > 1000
                ? `${Math.round((item.stargazersCount / 1000) * 10) / 10}k`
                : item.stargazersCount}
            </Text>
            <Text style={{ fontSize: 20, opacity: 0.5 }}>Stars</Text>
          </View>
          <View style={styles.stats}>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>
              {item.forksCount > 1000
                ? `${Math.round((item.forksCount / 1000) * 10) / 10}k`
                : item.forksCount}
            </Text>
            <Text style={{ fontSize: 20, opacity: 0.5 }}>Forks</Text>
          </View>

          <View style={styles.stats}>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>
              {item.reviewCount}
            </Text>
            <Text style={{ fontSize: 20, opacity: 0.5 }}>Reviews</Text>
          </View>

          <View style={styles.stats}>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>
              {item.ratingAverage}
            </Text>
            <Text style={{ fontSize: 20, opacity: 0.5 }}>Rating</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: '#F1E9DB',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    elevation: 10,
    padding: 5,
  },
  primary: {
    height: 250,
    width: Dimensions.get('screen').width,
    padding: 5,
  },
  image: {
    margin: 15,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  language: {
    backgroundColor: '#90BEDE',
    width: 100,
    marginTop: 10,
    borderRadius: 5,
    opacity: 0.9,
    height: 25,
    marginLeft: 1,
  },
  imageText: {
    flexDirection: 'row',
  },
  stats: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    paddingLeft: 20,
  },
});

export default RepositoryItem;
