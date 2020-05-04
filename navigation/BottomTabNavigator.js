import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons, FontAwesome, Feather, Ionicons } from '@expo/vector-icons'; 

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MenScreen from '../screens/MenScreen';
import WomenScreen from '../screens/WomenScreen';
import ElectronicsScreen from '../screens/ElectronicsScreen';


const HomeStack = createStackNavigator()
//const SettingsStack = createStackNavigator()

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator(props) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  // props.navigation.setOptions({ headerTitle: getHeaderTitle(props.route) });
   //navigation.setOptions({headerMode: null}) //will remove the title Bar.

  props.navigation.setOptions({ headerTitle: getHeaderTitle(props.route) });

  return (
    <BottomTab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
    //home,orders,cart,account 
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Hot Products',
          tabBarIcon: ({ focused }) => <TabBarIcon Icon={MaterialCommunityIcons} focused={focused} name="fire" />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Orders',
          tabBarIcon: ({ focused }) => <TabBarIcon Icon={MaterialCommunityIcons} focused={focused} name="border-none" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => <TabBarIcon Icon={MaterialCommunityIcons} focused={focused} name="cart-outline" />,
        }}
      />
      <BottomTab.Screen
        name="Men"
        component={MenScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({ focused }) => <TabBarIcon Icon={Feather} focused={focused} name="user" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Profile':
      return 'Profile';
    case 'Settings':
      return 'Settings';
  }
}

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
        }}
    >
        <HomeStack.Screen name="Home" component={HomeScreen}
        options={{
            
        }} />
    </HomeStack.Navigator>
)

const SettingsStackScreen = ({navigation}) => (
    <SettingsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <SettingsStack.Screen name="Settings" component={SettingsScreen}
        options={{

        }} />
    </SettingsStack.Navigator>
)