import{StatusBar} from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'

import{HomeScreenStack,MyBottomTabNavigator} from './Navigation/MainNavigation'

const App = props =>{
  return (
    <NavigationContainer>    
      <MyBottomTabNavigator />
    </NavigationContainer>
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;