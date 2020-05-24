import React, {Component, useEffect} from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
//import VariantSelector from './VariantSelector';
import { Avatar, Title, Button, Caption, Paragraph, TouchableRipple, Switch, Card } from 'react-native-paper';
import Layout from '../constants/Layout'
import Colors  from '../constants/Colors';

export default function Product(props) {
    console.log(props.item)
    return (
        <Card style={styles.block}>
            <Card.Cover source={{ uri: props.image }} style={styles.productImage} />
            <Card.Content>
                <Title style={styles.title} numberOfLines={1}>{props.title}</Title>
            </Card.Content>
            <Card.Actions>
            <Button>${props.price}</Button>
            <TouchableOpacity>
                <Button mode="contained" onClick={() => {}} color={Colors.productMore}>More</Button>
            </TouchableOpacity>
            </Card.Actions>
        </Card>
      );
}

const styles = StyleSheet.create({
    title: {
      fontFamily: 'maven-pro-bold',
      fontSize: Layout.window.width / 26,
      color: '#252525'
    },
    subtitle: {
      fontFamily: 'maven-pro-bold',
      fontSize: Layout.window.width / 48,
      color: '#bf200b'
    },
    block: {
      flex: 1,
      height: Layout.window.height / 4,
      margin: Layout.window.width / 40
    },
    productImage: {
      maxWidth: '90%',
      maxHeight: Layout.window.height / 8,
      backgroundColor: '#ffffff'
    },
  });
  
