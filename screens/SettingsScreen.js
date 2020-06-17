import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, Avatar, Title, Divider, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';

export default function SettingsScreen({ navigation }) {

    return (
        <SafeAreaView>
            <View>
            <Appbar title="Settings" style={styles.bottom}>
                <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
                <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
                <Appbar.Action  icon="cart" onPress={() => console.log('Pressed delete')} />
            </Appbar>
        </View>
        </SafeAreaView>
        // <Container>
        //     <Header>
        //         <Left>
        //             <Button transparent>
        //                 <Icon name='menu' onPress={() => 
        //                     navigation.openDrawer()}/>
        //             </Button>
        //         </Left>
        //         <Body>
        //             <Title>Settings</Title>
        //         </Body>
        //         <Right>
                    
        //         </Right>
        //     </Header>
        //     <Content contentContainerStyle={{
        //         flex:1,
        //         alignItems: 'center',
        //         justifyContent: 'center'
        //     }}>
        //         <Text>Settings Screen</Text>
        //         <Button primary onPress={() => navigation.navigate('Home')}>
        //             <Text> Home </Text>
        //         </Button>
        //     </Content>
        // </Container>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    toggler: {
      flex: 1,
      //marginTop: '10px',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    }
});
  