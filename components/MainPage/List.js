import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Image, Text, ScrollView,Alert} from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import {ListItem} from 'react-native-elements'
import firebase from '../../firebase/firebase';

export default class List extends Component {
    constructor(props) {
      super();
      this.state = {
        username: '',
        dataList: [],
      }
    }
    componentDidMount() {
      const dataListRef = firebase.database().ref('gymLesson');
        dataListRef.on('value', (snapshot) => {
          let dataList = snapshot.val();
          let newState = [];
          for (let item in dataList) {
            newState.push({
              id: item,
              date: dataList[item].date,
              location: dataList[item].location,
              name: dataList[item].name,
              sponsor: dataList[item].sponsor,
              views: dataList[item].views
            });
          }
          this.setState({
            dataList: newState
          });
        });
    }
    writeUserData(email,fname,lname){
        firebase.database().ref('Users/').set({
            email,
            fname,
            lname
        }).then((data)=>{
            console.log('data ' , data)
        }).catch((error)=>{
            console.log('error ' , error)
        })
    }
    handlecallback(e){
      this.props.callbackfunc(e);
    }
    _handlecallback2=(e,i)=>{
      Alert.alert(
        'Notice',
        'Add to my collection',
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => this.handlecallback(i)},
        ],
        )
    }

    render() {
      writeUserData('yuquanw2@gmail.com','Yuquan', 'Wang')
          return (
            <ScrollView
              style={styles.view}
            >
                {this.state.dataList.map(
                    (dataList, i) =>
                        <ListItem
                            containerStyle={{ borderBottomColor: '#bbb' , borderTopWidth: 1}}
                            title={dataList.name}
                            subtitle={"Date: " + dataList.date + "\n" + "location: " + dataList.location}
                            subtitleNumberOfLines={2}
                            key={i}
                            onPress={ ()=> this._handlecallback2(dataList,i) }
                            >
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
