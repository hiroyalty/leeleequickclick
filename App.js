import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { SplashScreen } from 'expo';
import { MaterialIcons, Ionicons, MaterialCommunityIcons,FontAwesome, Feather } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './src/graphql/Client';
import { createStore, combineReducers } from 'redux';
//import { Provider } from 'react-redux';
//import productsReducer from './src/store/reducers/products'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import SideDrawerNavigation from './navigation/SideDrawerNavigation'
import useLinking from './navigation/useLinking';

//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator(); 

// const rootReducer = combineReducers({
//   products: productsReducer
// })

//const store = createStore(rootReducer)

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3e4095',
    accent: '#f1c40f',
  },
};

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          ...MaterialIcons.font,
          ...MaterialCommunityIcons.font,
          ...FontAwesome.font,
          ...Feather.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          'maven-pro-regular': require('./assets/fonts/MavenPro-Regular.ttf'),
          'maven-pro-bold': require('./assets/fonts/MavenPro-Bold.ttf')
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
  return (
    <ApolloProvider client={client}>
    <PaperProvider theme={theme}>
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Root" component={SideDrawerNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </PaperProvider>
    </ApolloProvider>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
