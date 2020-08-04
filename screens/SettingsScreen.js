import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, Avatar, Title, Divider, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';

export default function SettingsScreen({ navigation }) {

    // const loadMore = () => {
    //     return fetchMore({
    //       query: GET_PERSONS,
    //       notifyOnNetworkStatusChange: true,
    //       variables: {
    //         cursor: data.persons.pageInfo.endCursor,
    //       },
    //       updateQuery: (previousResult, {fetchMoreResult}) => {
    //         const newEdges = fetchMoreResult.persons.edges;
    //         const pageInfo = fetchMoreResult.persons.pageInfo;
    //         return newEdges.length
    //           ? {
    //               persons: {
    //                 __typename: previousResult.persons.__typename,
    //                 edges: [...previousResult.persons.edges, ...newEdges],
    //                 pageInfo,
    //               },
    //             }
    //           : previousResult;
    //       },
    //     });
    //   };
    //   return {
    //     persons: data.persons.edges.map(({node}) => node),
    //     hasNextPage: data.persons.pageInfo.hasNextPage,
    //     loading,
    //     loadMore,
    //   };
    // }

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
  