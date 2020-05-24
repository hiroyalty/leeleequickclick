import React, { useState, useEffect, Fragment } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
//import { MaterialCommunityIcons, FontAwesome, Feather, Ionicons } from '@expo/vector-icons'; 
import { Appbar, ActivityIndicator, Searchbar } from 'react-native-paper';

import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import SideDrawerIcon from '../components/SideDrawerIcon';
import Product from '../components/Product';
import { useQuery } from '@apollo/react-hooks';
import { client } from '../src/graphql/Client'
import { SHOP, PRODUCTS } from '../src/graphql/Queries'

export default function HomeScreen({ navigation }) {
    //const { loading, error, data } = useQuery(PRODUCTS); data.shop.products.edges
    const [ShopInfo, setShopInfo] = useState('')
    const [productListing, setProductListing] = useState('')
    const [load, setLoad] = useState(true)
    const [myError, setMyError] = useState(false)
    useEffect(() => {
        requestShopInfo()
    },[]) 

    async function requestShopInfo() {
        setLoad(true)
        client.query({
            query: PRODUCTS
        })
        .then(response => {
            setLoad(false)
            //console.log('RESPONSE ==>', response.data.shop.products.edges)
            setProductListing(response.data.shop.products.edges)
        })
        .catch(error => {
        setMyError(true)
        setLoad(false)
        console.log('ERROR ==>', error)
        })
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
            { load ?    
                <ActivityIndicator animating={true} color={Colors.tintColor} />
             : <FlatList
             style={styles.list}
             data={productListing}
             renderItem={({ item }) => <Product 
                 title={item.node.title} 
                 image={item.node.variants.edges[0].node.image.src} 
                 price={item.node.variants.edges[0].node.price } 
                 productDetails={item.node} />}
             numColumns={2}
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
        marginTop: Layout.window.height * 0.09,
      },
    
});
  