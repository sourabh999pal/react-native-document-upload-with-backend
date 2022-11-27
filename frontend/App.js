import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Register from './src/Register';
import Document from './src/component/Document';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})