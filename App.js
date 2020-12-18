import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';

// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       title: 'App',
//     },
//   }
// );

// export default createAppContainer(navigator);

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{title: 'Home',
          headerTitleAlign: 'center'}} 
        />
        <Stack.Screen 
          name="Components" 
          component={ComponentsScreen}
          options={{title: 'Components',
          headerTitleAlign: 'center'}} 
        />
        <Stack.Screen 
          name="List" 
          component={ListScreen}
          options={{title: 'List',
          headerTitleAlign: 'center'}} 
        />
        <Stack.Screen 
          name="Image" 
          component={ImageScreen}
          options={{title: 'Image',
          headerTitleAlign: 'center'}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
