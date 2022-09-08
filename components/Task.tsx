import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { IProps } from '../interfaces/Props';



export default function Task({ text }: IProps) {
    const colors = ['green', 'yellow', 'red'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        async function getDatas() {
            const result = await AsyncStorage.getItem('index');
            if(result) {
                setIndex(JSON.parse(result));
            }
        }
        getDatas();
      }, [])
    
      useEffect(() => {
        async function saveDatas() {
            AsyncStorage.setItem('index', JSON.stringify(index));
        }
        saveDatas();
      }, [index])

    const changeColor = () => {
        if (index > 1) {
            return setIndex(0)
        }
        return setIndex((prevState) => prevState + 1)
    }

    return (
      <View style={styles.item}>
        <View style={ styles.itemLeft }>
            <TouchableOpacity 
                onPress={ changeColor }
                style={ {
                    width: 24,
                    height: 24,
                    backgroundColor: colors[index],
                    opacity: 0.5,
                    borderRadius: 5,
                    marginRight: 15,
                }}
            />
            <Text>{ text }</Text>
        </View>
        {/* <View style={ styles.circular }></View> */}
      </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        maxWidth: '90%'
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 15,
        height: 15,
        borderColor: 'purple',
        borderWidth: 2,
        borderRadius: 50
    }
    })
