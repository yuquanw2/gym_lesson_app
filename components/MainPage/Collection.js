import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Image, Text, ScrollView,Alert} from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import {ListItem} from 'react-native-elements'
import firebase from '../../firebase/firebase';

export default class Collection extends Component {
    constructor(props) {
      super();
      this.state = {
        dataList: [],
      }
    }
    componentDidMount() {
      console.log(this.props.idxlist);
      const dataListRef = firebase.database().ref('gymLesson');
        dataListRef.on('value', (snapshot) => {
          let dataList = snapshot.val();
          let newState = [];
          let idx = 0;
          for (let item in dataList) {
              if(idx in this.props.idxlist){
                newState.push({
                  id: item,
                  date: dataList[item].date,
                  location: dataList[item].location,
                  name: dataList[item].name,
                  speaker:dataList[item].speaker,
                  sponsor: dataList[item].sponsor,
                  views: dataList[item].views
                });
              }
              idx = idx+1;
          }
          this.setState({
            dataList: newState
          });
        });
    }
    _handlecallback2=()=>{
      Alert.alert(
        'Notice',
        'Did you take this lesson',
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('Cancel Pressed')},
        ],
        )
    }
    render() {
          return (
            <ScrollView style={styles.view}>
                {this.state.dataList.map(
                    (dataList, i
                    ) =>
                        <ListItem
                            containerStyle={{ borderBottomColor: '#bbb' , borderTopWidth: 1}}
                            title={dataList.name}
                            subtitle={"Date: " + dataList.date + "\n" + "location: " + dataList.location + "\n"
                                      + "Name: "+dataList.name + "\n" + "Speaker: "+ dataList.speaker + "\n"
                                      + "Views: "+dataList.views}
                            onPress={()=>{this._handlecallback2()}}
                            subtitleNumberOfLines={5}
                            key={i}>
                        </ListItem>
                )}
            </ScrollView>
          );
      }


}

const styles = StyleSheet.create({
    title: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    name: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
    },
    button:{

        marginRight:40,
        marginLeft:40,
        marginTop:10,
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 18,
        backgroundColor: '#97a0a7',

    },
    insert: {
        fontSize: 20,
        color: '#fff',
        fontStyle: 'italic',
        textAlign: 'center',
    },
    image: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:20
    },
    scrollView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image_url: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        resizeMode: 'cover',
    },
});
