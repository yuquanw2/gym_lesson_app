import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator ,createAppContainer } from 'react-navigation';

import Login from './components/Login/Login.js'

const AppStackNavigator = createStackNavigator({
    Login: Login
},{
    initialRouteName: "Login"
});

const App = createAppContainer(AppStackNavigator);
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
