import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Image, Text, TouchableOpacity,TextInput} from 'react-native';
import firebase from '../../firebase/firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  handleSignup(){
    const { username, password } = this.state
    //alert(username)
    firebase
      .auth()
      .createUserWithEmailAndPassword(username, password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message
        alert(errorMessage);
        })
        .then((authData) => {
                    console.log(authData);
                    if(authData!=null){
                      this.props.navigation.navigate('MainPage', {username: this.state.username});
                    }
                })
  }

  handleLogin(){
    const { username, password } = this.state
    //alert(username)
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message
          alert(errorMessage);
        })
        .then((authData) => {
                    console.log(authData);
                    if(authData!=null){
                      this.props.navigation.navigate('MainPage', {username: this.state.username});
                    }
                })
  }



  render() {
    let pic = {
      uri: 'https://avatars0.githubusercontent.com/u/32400328?v=4'
    };
    return (
      <View style={styles.container}>
        <Image source = {{ url: 'https://www.setaswall.com/1242x2688-wallpaperhttps://www.setaswall.com/wp-content/uploads/2018/09/1242x2688-Wallpaper-002-340x220.jpg' }} style = { styles.image }/>
        <View style={styles.logoContainer}>
          <Image source={pic} style={styles.logo}/>
          <Text style={styles.title}>Go Gyms!</Text>
        </View>

        <View style={styles2.formContainer}>
          <View style={styles2.container}>
            <TextInput
              placeholder="username"
              placeholderTextColor='rgba(255,255,255,0.7)'
              style={styles2.input}
              autoCapitalize = 'none'
              onChangeText={(username) => this.setState({username})}
              />
            <TextInput
              placeholder="password"
              placeholderTextColor='rgba(255,255,255,0.7)'
              secureTextEntry
              style={styles2.input}
              onChangeText={(password) => this.setState({password})}
              />
          </View>

         <View>
           <TouchableOpacity
             style={styles2.buttonContainer}
             onPress = {() => {this.handleSignup()}}>
             <Text style={styles2.buttonText}>Sign Up</Text>
           </TouchableOpacity>

           <TouchableOpacity
             style={styles2.buttonContainer}
             onPress = {() => {this.handleLogin()}}>
             <Text style={styles2.buttonText}>Log in</Text>
           </TouchableOpacity>
         </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#FFF',
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

const styles2 = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: 7,
      color: '#FFF',
      paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  },
});
