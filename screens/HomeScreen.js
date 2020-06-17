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
    const productSize = 8;
    const [ShopInfo, setShopInfo] = useState('')
    const [productListing, setProductListing] = useState([])
    const [load, setLoad] = useState(true)
    const [myError, setMyError] = useState(false)
    const [cursor, setCursor] = useState('')
    const [nextPage, setNextPage] = useState(true)
    const [page, setPage] = useState(1)
    // useEffect(() => {
    //     requestShopInfo()
    // },[]) 

    async function requestShopInfo() {
        //setLoad(true)
        if(nextPage) {
        console.log('Is there next page ' + nextPage)
        if(cursor) {
            console.log('cursor is ' + cursor)
            client.query({
                query: PRODUCTS,
                variables: {
                    productSize,
                    cursor
                }
            })
            .then(response => {
                setLoad(false)
                setNextPage(response.data.products.pageInfo.hasNextPage)
                //console.log('RESPONSE ==>', response.data.shop.products.edges)
                //feed: previousResult.feed.concat(fetchMoreResult.feed),
                //setProductListing( ...prevProductListingState => prevProductListingState.concat(response.data.shop.products.edges))
                setProductListing( productListing.concat(response.data.products.edges))
                //setProductListing(productListing => [...productListing, response.data.shop.products.edges])
            })
            .catch(error => {
            setMyError(true)
            setLoad(false)
            console.log('ERROR ==>', error)
            })
        } else {
            client.query({
                query: PRODUCTS,
                variables: {
                    productSize
                }
            })
            .then(response => {
                setLoad(false)
                //console.log('RESPONSE ==>', response.data.shop.products.edges)
                setProductListing(response.data.products.edges)
            })
            .catch(error => {
            setMyError(true)
            setLoad(false)
            console.log('ERROR ==>', error)
            })
        }
    } 
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
    function handleMore() {
        console.warn('you trying to load more ' + cursor)
        requestShopInfo()
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
            { load ? <ActivityIndicator animating={true} color={Colors.tintColor} style={styles.list} />  : <FlatList
             data={productListing}
             style={styles.list}
             numColumns={2}
             renderItem={renderRow}
             keyExtractor={item => item.cursor}
             onEndReachedThreshold={1}
            //  onEndReached={() => {
            //     setCursor(productListing[productListing.length - 1].cursor)
            //     console.log('onReach End '+ cursor)
            //     //handleMore()
            //     requestShopInfo()
            //  }}
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
  