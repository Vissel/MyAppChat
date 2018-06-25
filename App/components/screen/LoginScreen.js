import React, { Component } from "react"

import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet, Button,
  Image
} from 'react-native'

// import * as firebase from 'firebase';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
  }
  //
  // static navigationOptions = {
  //     title: 'Snapping Chat',
  //     headerStyle: {
  //         backgroundColor: '#6200EE'
  //     }
  // }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={style.container}>
        <View style={style.content}>
          <View style={style.banner}>
            <Image
              source={require('../../assets/images/chat_app.jpg')}
              style={style.imageStyle} />
          </View>
          <View style={style.formInput}>
            <TextInput
              style={style.input}
              underlineColorAndroid='transparent'
              placeholder='Email' />
            <TextInput
              style={style.input}
              secureTextEntry
              underlineColorAndroid='transparent'
              placeholder='Password' />
            <TouchableOpacity
              onPress={() => {
                navigate('userInfo')
              }}
              style={style.button}>
              <Text style={style.textView}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigate('register')
              }}
              style={{ alignItems: 'center' }}>
              <Text style={{ color: '#1565C0', fontSize: 15 }}>Forgot your password.</Text>
            </TouchableOpacity>
          </View>
          <View style={style.footer}>
            <TouchableOpacity
              onPress={() => {
                navigate('register')
              }}
              style={{
                margin: 10,
                padding: 10,
                marginRight: 25,
                marginLeft: 25,
                alignItems: 'center',
                borderColor: '#1565C0',
                borderTopWidth: 1,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderBottomWidth: 1,
                borderRadius: 10
              }}>
              <Text style={{ color: '#1565C0', fontSize: 20, textAlign: 'center' }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

var style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "grey",
    height: 50,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    elevation: 15
  },
  content: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'center',
  },
  textView: {
    fontSize: 20,
    textAlign: 'center',
    color: "#FFFFFF"
  },
  input: {
    margin: 5,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 10,
    borderColor: 'grey',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  button: {
    margin: 10,
    padding: 10,
    marginRight: 25,
    marginLeft: 25,
    backgroundColor: '#1565C0',
    borderRadius: 10,
    alignItems: 'center'
  },
  formInput: {
    flex: 1,
  },
  banner: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    justifyContent: 'center'
  },
  imageStyle: {
    width: 100,
    height: 100,
  }
});