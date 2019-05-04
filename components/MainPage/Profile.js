import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Image, Text, TouchableOpacity,TextInput,ImageBackground,Alert} from 'react-native';
import firebase from '../../firebase/firebase';
import {ListItem} from 'react-native-elements'
import { Constants } from 'expo';
import Dialog from "react-native-dialog";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',

    };
    console.log(this.props.name);
    console.log("dsadas");
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
    let pic = {
      uri: 'https://avatars0.githubusercontent.com/u/32400328?v=4'
    };
    return (

      <ImageBackground style={styles.headerBackground} source={require('../../Image/purpletrue-black-gradient-wallpaper-iphone-ar72014.png')}>
      <View>
        <Dialog.Container visible={true}>
          <Dialog.Title>Account Infomation</Dialog.Title>
          <Dialog.Description>
            Insert your full name below
          </Dialog.Description>
          <Dialog.Input>  </Dialog.Input>
          <Dialog.Button label="Cancel" />
          <Dialog.Button label="Delete" />
        </Dialog.Container>
      </View>
      <View style={styles.header}>
        <View style={styles.profilepicWrap}>
          <Image style={styles.profilepic} source={pic} />
        </View>
      </View>

      <View style={styles.header2}>
          <Text style={styles.name}
            onPress={()=>alert("das")}> Yuquan Wang </Text>
          <Text style={styles.name}> Username:{this.state.username} </Text>
          <Text style={styles.name}> Gender: Undefined </Text>
          <Text style={styles.name}> Weight: Undefined </Text>
          <Text style={styles.name}> Height: Undefined </Text>
          <Text style={styles.name}> Finished courses: 0 </Text>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerBackground:{
    flex:1,
    width:null,
    alignSelf:"stretch",
  },
  header:{
    flex:1,
    alignSelf:'center',
    top:120,
    padding:0,
    backgroundColor:'rgba(0,0,0,0)',
  },
  header2:{
    flex:1,
    top:-50,
    padding:20,
    backgroundColor:'rgba(0,0,0,0)',
  },
  profilepicWrap:{
    width:180,
    height:180,
    borderRadius:100,
    borderColor:'rgba(0,0,0,0.4)',
    borderWidth:16,
  },
  profilepic:{
    flex:1,
    width:null,
    alignSelf:'stretch',
    borderRadius:100,
    borderColor:'#fff',
    borderWidth:4,
  },
  name:{
    marginTop: 20,
    fontSize: 26,
    color:'#fff',
    alignSelf:'center',
  },
  pos:{
    fontSize:14,
    color:"#0394c0",
    fontWeight:'300',
    fontStyle:'italic',
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  container2: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  logoContainer: {
    top:50,
    alignItems: 'center',
    flexGrow: 1,
  },
  logo: {
    width: 150,
    height: 150
  },
  title: {
    color: 'black',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  },
  image: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        resizeMode: 'cover',
    }
});
