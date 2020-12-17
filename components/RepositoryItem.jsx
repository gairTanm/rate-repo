import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';

const RepositoryItem = ({ item }) => {
  return (
    <TouchableHighlight key={item.id}>
      <View>
        <Text>Full Name:{item.fullName}</Text>
        <Text>Description:{item.description}</Text>
        <Text>Language:{item.language}</Text>
        <Text>Stars:{item.stargazersCount}</Text>
        <Text>Forks:{item.forksCount}</Text>
        <Text>Reviews:{item.reviewCount}</Text>
        <Text>Rating:{item.ratingAverage}</Text>
      </View>
    </TouchableHighlight>
  );
};
export default RepositoryItem;
