import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../components/DrawerContent'
import BottomTabNavigator from './BottomTabNavigator'
import TopTabNavigation from './TopTabNavigation'

const Drawer = createDrawerNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function SideDrawerNavigation(props) {

    //props.navigation.setOptions({ headerTitle: getHeaderTitle(props.route) });

    return (
    <Drawer.Navigator 
        initialRouteName={INITIAL_ROUTE_NAME}
        drawerContent={ (props) => <DrawerContent {...props} /> }
    >
        <Drawer.Screen 
          name="DrawerHome" 
          component={BottomTabNavigator} 
        />
        
        {/* <Drawer.Screen 
            name="Profile" 
            component={BottomTabNavigator} 
            options={{
                drawerIcon: ({focused}) => (
                    <TabBarIcon Icon={Feather} focused={focused} name="user" />
                ),
            }}  />
        <Drawer.Screen 
            name="Settings" 
            component={BottomTabNavigator} 
            options={{
                drawerIcon: ({focused}) => ( <TabBarIcon Icon={Feather} focused={focused} name="settings" />),
            }}  /> */}
      </Drawer.Navigator> 
    )
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
  