import React, { useState, useEffect, Fragment } from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, FontAwesome, Feather, Ionicons } from '@expo/vector-icons'; 
import { Appbar, Avatar, Title, Paragraph, ActivityIndicator,
    Text, TouchableRipple, Switch, Searchbar, Card, Button } from 'react-native-paper';

import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import SideDrawerIcon from '../components/SideDrawerIcon';
import Products from '../components/Products';
import { useQuery } from '@apollo/react-hooks';
import { client } from '../src/graphql/Client'
import { SHOP, PRODUCTS } from '../src/graphql/Queries'
import {gql} from 'babel-plugin-graphql-js-client-transform';
// import * as GetProductListTypes from './__generated__/GetProductList';
// interface productsProps extends RouteComponentProps {}

export default function HomeScreen({ navigation }) {
    //const { loading, error, data } = useQuery(PRODUCTS);
    const [ShopInfo, setShopInfo] = useState('')
    const [productListing, setProductListing] = useState('')
    // GetProductListTypes.GetProductList, 
    // GetProductListTypes.GetProductListVariables
    
    
    useEffect(() => {
        requestShopInfo()
    },[productListing]) 

    async function requestShopInfo() {
    //     client.send(gql(client)`
    //   query {
    //     shop {
    //       name
    //       description
    //       products(first:20) {
    //         pageInfo {
    //           hasNextPage
    //           hasPreviousPage
    //         }
    //         edges {
    //           node {
    //             id
    //             title
    //             options {
    //               name
    //               values
    //             }
    //             variants(first: 250) {
    //               pageInfo {
    //                 hasNextPage
    //                 hasPreviousPage
    //               }
    //               edges {
    //                 node {
    //                   title
    //                   selectedOptions {
    //                     name
    //                     value
    //                   }
    //                   image {
    //                     src
    //                   }
    //                   price
    //                 }
    //               }
    //             }
    //             images(first: 250) {
    //               pageInfo {
    //                 hasNextPage
    //                 hasPreviousPage
    //               }
    //               edges {
    //                 node {
    //                   src
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // `).then((res) => {
    //     console.log(res.model.shop)
    //     setShopInfo(res.model.shop)
    //     setProductListing(res.model.shop.products)

        // this.setState({
        //   shop: res.model.shop,
        //   products: res.model.shop.products,
        // });
    //   }).catch((error) => { 
    //     console.log(error + 'Some error has occured'); 
    //   });

        client.query({
            query: PRODUCTS
        })
        .then(response => {
            console.log('RESPONSE ==>', response.data.shop.products.edges)
            setProductListing(response.data.shop.products.edges)
        })
        .catch(error => {
        console.log('ERROR ==>', error)
        })
    }
    let productDisplay = null
    if (!productListing) productDisplay = <ActivityIndicator 
        animating={true} 
        size="large" 
        color={Colors.tintColor} 
        style={styles.container} />;
    //if (error) productDisplay = <Text>Error :(</Text>;
    
    if (productListing) {
        productDisplay = 
        (productListing.map((product) => {
        <Card>
            <Card.Title title={product.node.title} subtitle={product.node.title} />
            <Card.Content>
            <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
            <Button>$5</Button>
            <Button onClick={() => {}}>Add to Cart</Button>
            </Card.Actions>
        </Card>
        }))
    }
    return (
        <SafeAreaView>
        <View>
        <Appbar style={styles.bottom}>
            <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
            <Searchbar style={styles.searchFeild} placeholder="Search"  />
            <Appbar.Action  icon="cart" onPress={() => console.log('Pressed delete')} />
        </Appbar>
        </View>
        <View style={styles.container}>
            {productDisplay}
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        color: '#3e4095'
    },
    container: {
      marginTop: Layout.window.height * 0.09,
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchFeild: {
      flex: 1,
      marginTop: 3,
      marginBottom: 2,
      maxWidth: '70%',
      maxHeight: '70%',
      backgroundColor: '#FFF'
    },
    
});
  