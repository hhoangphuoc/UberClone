import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from "react-redux";
import HomeScreen from './screens/HomeScreen';
import { store } from './store';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import 'react-native-gesture-handler'; //using for swipe back and forth inside screen (by hand)


import { NavigationContainer } from '@react-navigation/native'; //another wrapper container for navigation of entire app

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <HomeScreen/> 
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({

  //styling for the main container
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
