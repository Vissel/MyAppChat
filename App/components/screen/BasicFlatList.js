import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableHighlight,
  ScrollView,
} from 'react-native'

import ChatItem from './ChatItem'

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={{ marginRight: 60 }} >
          <Image
            style={{ width: 40, height: 40 }}
            source={require('../img/user-man-info-2-icon.png')}
          />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }} >
          <Text style={{ fontSize: 18, color: 'white' }}>
            {this.props.name}
          </Text>
          <Text style={{ color: 'white' }} >Online</Text>
        </View>
        <View style={{ marginLeft: 60 }} >
          <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            source={require('../img/lilly-luta.jpg')} />
        </View>
      </View>
    )
  }
}

export default class BasicFlatList extends Component {
  constructor(props){
    super(props);
    this.state = {
      messageArray:[],
      messageText:'',

    }
  }

   
  onSendBtnPressed(){
  //  alert('test') 
  if(this.state.messageText){
    var d = new Date();

    this.state.messageArray.push({
      'time' : d.getHours() + ":" +d.getMinutes(),
      'message' :this.state.messageText
    })
    this.setState({messageArray : this.state.messageArray})
    this.setState({messageText : ''})
  }
  
  };

  render() {
    let messages = this.state.messageArray.map((val,key) =>{
      return(
        <ChatItem key={key} keyval={key} val={val}/>
      )
    })

    return (
      <KeyboardAvoidingView style={styles.container} {...Platform.OS == 'ios' ? { behavior: 'padding' } : null} >
        <Header name="Aleksandar Djuric" />
        <View style={{ flex: 1 }}>
        
            <ScrollView>
                  {messages}
              </ScrollView>
             
        </View>

        <View style={styles.footer}>
        <View>
          <Image
            style={{ width: 15, height:15, marginRight: 15 }}
            source={require('../img/paperclip.png')}
          />
        </View>
        <KeyboardAvoidingView behavior='padding'>
        <View>
          <TextInput
            style={styles.textBox}
            onChangeText = {(messageText) => this.setState({messageText}) }
            value={this.state.messageText}
            placeholder='   Write a message...' />
        </View>
            </KeyboardAvoidingView>

        <View>
          <TouchableHighlight style={styles.sendBtn} disabled={this.state.disabled}
            onPress={this.onSendBtnPressed.bind(this)}
          >
          <Text style={{color:'white'}} >Send</Text>
            </TouchableHighlight>
          {/* <Image
            style={{ width: 20, height: 20, marginLeft: 5 }}
            source={require('../img/voice.png')} 
            /> */}
        </View>
      </View>
      </KeyboardAvoidingView >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor:'#ffff99',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'rgb(120, 175, 30)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
    paddingTop: 20
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: { 
    width: 250,
    height:37, 
    backgroundColor: '#d6d6c2', 
    borderRadius: 7, 
    paddingBottom: 8, 
    paddingTop: 8, 
    textDecorationLine: 'none' 
  },
    
  sendBtn :{
    backgroundColor:'blue',
    padding:7,
    borderRadius:4,
    marginLeft:10,
    }

})
