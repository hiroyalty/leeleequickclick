import * as React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, Avatar, Title, Divider, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';

import TabBarIcon from '../components/TabBarIcon';
import Layout from '../constants/Layout';

const Social = ({ name }) => (
  <TabBarIcon
    Icon={FontAwesome}
    name={name}
    containerStyle={styles.iconContainer}
    size={32}
    style={styles.socialIcons}
    focused
  />
)

export default function ProfileScreen({ navigation }) {
    return (
      <SafeAreaView>
        <View>
        <Appbar title="Profile" style={styles.bottom}>
            <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
            <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
            <Appbar.Action  icon="cart" onPress={() => console.log('Pressed delete')} />
        </Appbar>
        </View>
      </SafeAreaView>
    //     <Container>
    //         <Header>
    //             <Left>
    //                 <Button transparent>
    //                     <Icon name='menu' onPress={() => 
    //                         navigation.openDrawer()}/>
    //                 </Button>
    //             </Left>
    //             <Body>
    //                 <Title>Profile</Title>
    //             </Body>
    //             <Right>
                    
    //             </Right>
    //         </Header>

    //   <View style={styles.container}>
    //   <View style={styles.imageContainer}>
    //     <Image 
    //         source={require('../assets/images/JasonMomoa.jpg')}
    //         style={styles.image} />
    //   </View>
    //   <Text h4 style={styles.name}>
    //     Jason Momoa
    //   </Text>
    //   <Text style={styles.desc}>Fashion Designer at Amelia & Co.</Text>
    //   <Divider style={styles.divider} />
    //   <Text style={styles.desc}>
    //     I love to travel. I have a cat named pickles. If he likes you, I
    //     probably will too.
    //   </Text>
    //   <Divider style={styles.divider} />
    //   <Text style={styles.desc}>Find me on Social here</Text>
    //   <View style={styles.socialLinks}>
    //     <Social name="snapchat" />
    //     <Social name="instagram" />
    //     <Social name="facebook-square" />
    //   </View>
    // </View>

    // </Container>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    margin: 20,
  },
  image: {
    width: Layout.window.width - 60, // device width - some margin
    height: Layout.window.height / 2 - 60, // device height / 2 - some margin
    borderRadius: 20,
  },
  name: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  desc: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginHorizontal: 30,
    fontSize: 14,
  },
  divider: {
    backgroundColor: '#C0C0C0',
    width: Layout.window.width - 60,
    margin: 20,
  },
  socialLinks: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: Layout.window.width,
    marginLeft: 40,
  },
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
  socialIcons: {
    marginBottom: -3,
    marginLeft: 5 
  }
})