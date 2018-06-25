import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View, Button, TouchableOpacity
} from 'react-native'

import { StackNavigator } from 'react-navigation'
import LoginScreen from "./App/components/screen/LoginScreen"
import RegisterScreen from "./App/components/screen/RegisterScreen"
import UserInfoScreen from "./App/components/screen/UserInfoScreen"
import BasicFlatList from './App/components/screen/BasicFlatList'

const appNavigator = StackNavigator({
  login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login',
      headerStyle: {
        backgroundColor: '#6200EE'
      }
    }
  },
  register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#6200EE'
      }
    }
  },
  userInfo: {
    screen: UserInfoScreen,
    navigationOptions: {
      title: 'Name',
      headerTitleStyle: {
        alignSelf: 'center',
        color: 'white'
      },
      headerStyle: {
        backgroundColor: '#6200EE'
      },
      headerRight:
        <TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 18, marginRight: 10 }}>Sign out</Text>
        </TouchableOpacity>
    }
  },
  list: {
    screen: BasicFlatList,
    navigationOptions: {
      header: null
    }
  }
})
export default appNavigator
