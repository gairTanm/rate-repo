import React from 'react';
import { Dimensions, View } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

const ReviewItem = item => {
  console.log(JSON.stringify(item));
  return (
    <Card style={{ width: Dimensions.get('screen').width, margin: 20 }}>
      <Card.Content>
        <Paragraph style={{ justifyContent: 'center', fontSize: 20 }}>
          {item.text}
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default ReviewItem;
