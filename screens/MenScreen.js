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
    const productSize = 8
    const [cursor, setCursor] = React.useState('')
    //const [loading, setLoading] = useState(true)

    const { loading, error, data, fetchMore } = useQuery(PRODUCTS, {
        variables: { productSize },
    });
    //console.log(data)
    if (error) {
        console.log('Response error-----', error)
        return  (
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
                loading ? <ActivityIndicator animating={true} color={Colors.tintColor} style={styles.listing} /> : 
            <FlatList
             data={data.products.edges || []}
             style={styles.listing}
             //onRefresh={() => refetch()}
             ListEmptyComponent={listEmptyComponent}
             renderItem={({ item }) => 
                <Product 
                    key={item.node.id}
                    title={item.node.title} 
                    image={item.node.variants.edges[0].node.image.transformedSrc} 
                    price={item.node.variants.edges[0].node.priceV2.amount}/> }
             keyExtractor={item => item.node.id}
             numColumns={2}
             onEndReachedThreshold={1}
             onEndReached={() => {
                let mycursor = data.products.edges[data.products.edges.length - 1].cursor
                let myPageInfo = data.products.pageInfo
                setCursor(mycursor)
                console.log('MenScreen onReach End',mycursor)
                fetchMore({
                    variables: {
                    productSize,
                    cursor: mycursor
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                        //console.log('More result ',fetchMoreResult)
                        //console.log('Previous result ',prev)
                    if (!fetchMoreResult) return prev;
                    //return Object.assign(prev, fetchMoreResult)
                    //return Object.assign({}, prev, {
                    //});
                    // fetchMore({
                    //     variables: { cursor: data.publications.pageInfo.endCursor },
                    //     // query: QUERY,
                    //     updateQuery: (previousResult, { fetchMoreResult }) => {
                        //const result = words.filter(word => word.length > 6);
                        const newProducts = fetchMoreResult.products.edges
                        //const newProducts = fetchMoreResult.products.edges.filter(item => item.node.variants.edges[0].node.image.transformedSrc != null)
                       return {
                        products: {
                        __typename: prev.products.__typename,
                        edges: [...prev.products.edges, ...newProducts],
                        pageInfo: myPageInfo,
                        },
                       
                    }
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
    list: {
        marginTop: Layout.window.height * 0.04,
    }
});
  