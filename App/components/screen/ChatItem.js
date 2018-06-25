import React, { Component } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'

class ChatItem extends Component{
    render(){
        return(
            <View key={this.props.keyval} style={styles.listMessage}>
                <Text
                style={{textAlign: this.props.keyval % 2 == 0 ? 'right' : 'left',
                    color: this.props.keyval % 2 == 0 ? 'green' : '#7393f2',
                    fontSize: 16, position:'relative',marginBottom:7 , padding:10, backgroundColor:'white',
                    borderColor:'gray', borderRadius:10, textShadowRadius:5, includeFontPadding:false, textAlignVertical:'center' }}
                     >
                     {this.props.val.time} | 
                     {this.props.val.message}
                    </Text>
                  
                </View>
        );
    }
}

const styles = StyleSheet.create ({
    listMessage:{

    },
})

export default ChatItem;