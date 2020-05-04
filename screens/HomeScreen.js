import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, FontAwesome, Feather, Ionicons } from '@expo/vector-icons'; 
import { Appbar, Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch, Searchbar } from 'react-native-paper';

import SideDrawerIcon from '../components/SideDrawerIcon';

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView>
        <View>
        <Appbar style={styles.bottom}>
            <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
            <Searchbar style={styles.searchFeild} placeholder="Search"  />
            <Appbar.Action  icon="cart" onPress={() => console.log('Pressed delete')} />
        </Appbar>
        </View>
        </SafeAreaView>
        // <Container>
        //     <Header>
        //         <Left>
        //             <Button transparent>
        //                 <Icon name='menu' onPress={() => navigation.openDrawer()}/>
        //             </Button>
        //         </Left>
        //         <View style={styles.searchFeild}>
        //             <Item regular>
        //                 <Input placeholder='Search' />
        //                 <Icon active name='search' />
        //             </Item>
        //         </View>
        //         <Right>
        //             <SideDrawerIcon Icon={MaterialCommunityIcons} name="cart" color="#fff" onPress={() => {}}/>
        //         </Right>
        //     </Header>
        //     <Content contentContainerStyle={{
        //         flex:1,
        //         alignItems: 'center',
        //         justifyContent: 'center'
        //     }}>
        //         <Text>Home Screen</Text>
        //         <Button primary onPress={() => navigation.navigate('Settings')}>
        //             <Text> Settings </Text>
        //         </Button>
        //     </Content>
        // </Container>
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
      flex: 1,
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
  