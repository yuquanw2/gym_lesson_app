import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator ,createAppContainer } from 'react-navigation';

import Login from './components/Login/Login.js';
import MainPage from './components/MainPage/MainPage.js';
import List from './components/MainPage/List.js';

const AppStackNavigator = createStackNavigator({
    Login: Login,
    MainPage: MainPage,
    List:List
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
