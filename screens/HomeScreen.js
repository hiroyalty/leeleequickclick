import React, { useState, useEffect, Fragment } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
//import { MaterialCommunityIcons, FontAwesome, Feather, Ionicons } from '@expo/vector-icons'; 
import { Appbar, ActivityIndicator, Searchbar } from 'react-native-paper';

import Colors from '../constants/Colors';
import Product from '../components/Product';
import { useQuery } from '@apollo/react-hooks';
import { client } from '../src/graphql/Client'
import { SHOP, PRODUCTS } from '../src/graphql/Queries'

export default function HomeScreen({ navigation }) {
    //const { loading, error, data } = useQuery(PRODUCTS); //data.shop.products.edges
    const productSize = 20;
    const { data, loading, error, fetchMore } = useQuery(PRODUCTS, {
        variables: { productSize }
    });

    if (error) {
        console.log('Response error-----', error)
        {errorComponent}
    }
    const errorComponent = () => {
        return (
            <SafeAreaView style={styles.container}>
        <View>
        <Appbar style={styles.top}>
            <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
            <Searchbar style={styles.searchFeild} placeholder="Search"  />
            <Appbar.Action  icon="cart" onPress={() => console.log('Pressed delete')} />
        </Appbar>
        </View>
         <View>
            <HelperText type="error" style={styles.listing}>There is an error</HelperText>
         </View>
         </SafeAreaView>
        )
    }
    function renderRow({item}) {
        return(
            <Product 
                    title={item.node.title} 
                    image={item.node.variants.edges[0].node.image.transformedSrc} 
                    price={item.node.variants.edges[0].node.priceV2.amount} 
            />
        )
    }
        return (
            <SafeAreaView style={styles.container}>
        <View>
        <Appbar style={styles.top}>
            <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
            <Searchbar style={styles.searchFeild} placeholder="Search"  />
            <Appbar.Action  icon="cart" onPress={() => console.log('Pressed delete')} />
        </Appbar>
        </View>
        <View>
        {/* { loading ? <ActivityIndicator animating={true} color={Colors.tintColor} style={styles.list} />  : 
        <FlatList
             data={data.products.edges || []}
             style={styles.list}
             numColumns={2}
             renderItem={renderRow}
             keyExtractor={item => item.cursor}
             onEndReachedThreshold={1}
             onEndReached={() => {
                 if(data.products.pageInfo.hasNextPage) {
             fetchMore({
             // note this is a different query than the one used in the
             // Query component
             query: PRODUCTS,
             variables: { productSize, cursor: data.products.edges[data.products.edges.length - 1].cursor },
             updateQuery: (previousResult, { fetchMoreResult }) => {
                 console.log('previous result ', previousResult)
                 console.log('More result ', fetchMoreResult)
               const previousEntry = previousResult.products.edges;         //fetchMoreResult.products.edges
               const newEdges = fetchMoreResult.products.edges;
               const newPageInfo  = fetchMoreResult.products.pageInfo;
   
               return {
                 // By returning `cursor` here, we update the `fetchMore` function
                 // to the new cursor.
                 //cursor: newCursor,
                 products: {
                   // Put the new comments in the front of the list
                   __typename: previousResult.products.__typename,
                   pageInfo: newPageInfo,
                   edges: [...newEdges, ...previousEntry]
                 },
                 //__typename: previousEntry.__typename
               };
             }
           }) }
         }
         }
         />
        } */}
        </View>
        </SafeAreaView>
          
        );
      
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.myWhite
    },
    top: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        color: '#3e4095'
    },
    searchFeild: {
      flex: 1,
      marginTop: 3,
      marginBottom: 2,
      maxWidth: '70%',
      maxHeight: '70%',
      backgroundColor: '#FFF'
    },
    list: {
        marginTop: 60,
        marginVertical: 20
    },
});
  