import React, {Component} from "react";

import {
    View,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={style.container}>

                <View style={style.formInput}>
                    <TextInput
                        style={style.input}
                        underlineColorAndroid='transparent'
                        placeholder='Email'/>
                    <TextInput
                        style={style.input}
                        underlineColorAndroid='transparent'
                        placeholder='First name'/>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={style.input}
                        placeholder='Last name'/>
                    <TextInput
                        style={style.input}
                        secureTextEntry
                        underlineColorAndroid='transparent'
                        placeholder='Password'/>
                    <TextInput
                        style={style.input}
                        secureTextEntry
                        underlineColorAndroid='transparent'
                        placeholder='Confirm password'/>
                    <TouchableOpacity
                        onPress={this.props.backLogin}
                        style={style.button}>
                        <Text style={style.textView}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

var style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    textView: {
        fontSize: 20,
        textAlign: 'center',
        color: "#FFFFFF"
    },
    input: {
        margin: 5,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        borderRadius: 20, 
        borderColor:'grey',
        borderTopWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderBottomWidth:1,
    },
    button: {
        margin: 10,
        padding: 10,
        marginLeft: 90,
        marginRight: 90,
        backgroundColor: 'skyblue',
        borderRadius: 20,
        alignItems: 'center'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#6495ED",
        height: 50
    },
    textAppBar: {
        color: "#000000",
        fontSize: 20,
        fontWeight: '400',
    },
    formInput: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center'
    }
});