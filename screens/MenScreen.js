import React, { useState, useEffect, Fragment } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, ActivityIndicator, Searchbar, HelperText } from 'react-native-paper';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import { useQuery } from '@apollo/react-hooks';
import { SHOP, PRODUCTS } from '../src/graphql/Queries'
import Product from '../components/Product';

export default function MenScreen({ navigation }) {
    const productSize = 24
    const [cursor, setCursor] = React.useState('')

    const { loading, error, data, fetchMore, refetch } = useQuery(PRODUCTS, {
        variables: { productSize },
        notifyOnNetworkStatusChange: true,
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
    const listEmptyComponent = () => {
        return (
            <View>
                <HelperText type="error" style={styles.listing}>There is no Products Available in the store Right now.</HelperText>
            </View>
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
             {
                loading || !data.products ? <ActivityIndicator animating={true} color={Colors.tintColor} style={styles.listing} /> : 
            <FlatList
             data={data.products.edges || []}
             style={styles.listing}
             //onRefresh={() => refetch()}
             ListEmptyComponent={listEmptyComponent}
             renderItem={({ item }) => 
                <Product 
                    key={item.node.id}
                    title={item.node.title} 
                    image={item.node.variants.edges[0].node.image.transformedSrc} //{item.node.variants.edges[0].node.image.transformedSrc} {item.node.images.edges[0].node.transformedSrc}
                    price={item.node.variants.edges[0].node.priceV2.amount}/> }
             keyExtractor={item => item.node.id}
             numColumns={2}
             onEndReachedThreshold={1}
             onEndReached={() => {
                fetchMore({
                    query: PRODUCTS,
                    notifyOnNetworkStatusChange: true,
                    variables: {
                    productSize,
                    cursor: data.products.edges[data.products.edges.length - 1].cursor
                    },
                    updateQuery: (previousResult, { fetchMoreResult }) => {
                        console.log(previousResult.products.edges[23])
                        //console.log(fetchMoreResult.products.edges[1])
                        const newEdges = fetchMoreResult.products.edges;
                        const pageInfo = fetchMoreResult.products.pageInfo;
            
                        return newEdges.length
                        ? {
                        //const newProducts = fetchMoreResult.products.edges.filter(item => item.node.variants.edges[0].node.image.transformedSrc)
                        products: {
                        __typename: previousResult.products.__typename,
                        edges: [...previousResult.products.edges, ...newEdges],
                        pageInfo,
                        }
                        }
                        : previousResult;
                }
                })
               }
              }
            /> }
        </View>
        </SafeAreaView> 
    )
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
    },
    searchFeild: {
      flex: 1,
      marginTop: 3,
      marginBottom: 2,
      maxWidth: '70%',
      maxHeight: '70%',
      backgroundColor: '#FFF'
    },
    listing: {
        marginTop: 60,
        marginVertical: 20
    },
    activityLoading: {
        flex: 1,
        marginVertical: 20,
        justifyContent: "center", 
        alignItems: "center"
    }
});
  