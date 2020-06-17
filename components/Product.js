import React from 'react';
import { StyleSheet } from 'react-native';
import { Title, Button, Card, Text } from 'react-native-paper';

import Layout from '../constants/Layout'

export default function Product(props) {
  //console.log(props.item)
  return (
    <Card style={styles.block}>
      <Card.Cover source={{ uri: props.image }}  />
      <Card.Content>
        <Title style={styles.title} numberOfLines={1}>{props.title}</Title>
      </Card.Content>
      <Card.Actions>
        <Text style={styles.cancel}>${Number(props.price) + 5}</Text>
        <Button>${props.price}</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
    title: {
      fontFamily: 'maven-pro-bold',
      fontSize: 12, //Layout.window.width / 26,
      color: '#252525'
    },
    subtitle: {
      fontFamily: 'maven-pro-bold',
      fontSize: 16,
      color: '#bf200b'
    },
    block: {
      flex: 1,
      height: Layout.window.height / 2,
    },
    cancel: {
      textDecorationLine: "line-through"
    }
  });
  
