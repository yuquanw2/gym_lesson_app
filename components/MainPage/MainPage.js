import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import {ListItem} from 'react-native-elements'
import firebase from '../../firebase/firebase';
import List from './List.js';
import Collection from './Collection.js';
import Profile from './Profile.js';


export default class MainPage extends React.Component {
  state = {
    index: 2,
    username: '',
    routes: [
      { key: 'list', title: 'List', icon: 'queue-music' },
      { key: 'mycollection', title: 'My Collection', icon: 'album' },
      { key: 'profile', title: 'Profile', icon: 'history' },
    ],
    collectionList: [],
  };

    transcollectionfromlsit = (e) => {
        var newArray = this.state.collectionList.slice();
        newArray.push(e);
        this.setState({collectionList:newArray});
    }
  _handleIndexChange = index => this.setState({ index });
  _cdscdc=()=>{
    console.log("mainpage"+this.props.navigation.state);
  }
  _renderScene = BottomNavigation.SceneMap({
    list: () => <List callbackfunc={this.transcollectionfromlsit}/>,
    mycollection: () => <Collection idxlist={this.state.collectionList}/>,
    profile: () => <Profile username={this.state.username}/>,
  });
  render() {
    this._cdscdc();
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
