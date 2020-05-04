import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from '../screens/HomeScreen'
import MenScreen from '../screens/MenScreen';
import WomenScreen from '../screens/WomenScreen';
import ElectronicsScreen from '../screens/ElectronicsScreen';

const TopTab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <TopTab.Navigator 
        initialRouteName='Home'>
      <TopTab.Screen name="Home" component={HomeScreen} />
      <TopTab.Screen name="Men" component={MenScreen} />
      <TopTab.Screen name="Women" component={WomenScreen} />
      <TopTab.Screen name="Electronics" component={ElectronicsScreen} />
    </TopTab.Navigator>
  );
}

export default MyTabs