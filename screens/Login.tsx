import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, NavigatorIOSProps, KeyboardAvoidingView, TextInput, Button, Image } from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';
import myContext from '../contexts/myContext';



function Login({ navigation }: any) {
    const [btnDisable, setBtnDisable] = useState(true);
    const [nameInput, setNameInput] = useState('');

    const { setUsername }: any = useContext(myContext);

    const checkInput = (text: string) => {
        if (text.length >= 4) {
            setNameInput(text);
            return setBtnDisable(false);
        }
        setNameInput(text);
        return setBtnDisable(true);
    }
    return (
      <View style={styles.container}>
        <View style={styles.inputLogin}>
            {/* <Image source={require('../assets/favicon.png')} /> */}
            <Icon name="user" size={200} color="#ED715F" />
            <TextInput
                onChangeText={(text) => checkInput(text)}
                maxLength={20}
                style={styles.inputText}
                placeholder='Digite seu nome'
            />
            <TouchableOpacity
                disabled={btnDisable}
                // color={'#ED715F'}
                // title='Entrar'
                onPress={() => {
                    setUsername(nameInput);
                    return navigation.push('Lista de tarefas')
                }}
            >
                <Text style={ btnDisable ? styles.loginBtnDisabled : styles.loginBtn}>Entrar</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputText: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: 200,
        margin: 20,
        borderRadius: 10,
    },
    loginBtn: {
      backgroundColor: '#ED715F',
      color: 'white',
      paddingHorizontal: 70,
      paddingVertical: 15,
      borderRadius: 10,
      fontSize: 16
    },
    loginBtnDisabled: {
      backgroundColor: '#B0B0A2',
      color: 'white',
      paddingHorizontal: 70,
      paddingVertical: 15,
      borderRadius: 10,
      fontSize: 16
    },
    // textBtn: {
    //     backgroundColor: 'purple',
    //     padding: 20,
    //     color: 'white'
    // }
})
