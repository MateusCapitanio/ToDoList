import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

function Help() {
    return (
      <View style={styles.container}>
        <View style={styles.cardHint}>
            <Icon name='alert-circle' size={30} color='#fff' />
            <Text style={styles.hintText}>Toque em uma tarefa adicionada para remover.</Text>
        </View>
        <View style={styles.cardHint}>
            <Icon name='alert-circle' size={30} color='#fff' />
            <Text style={styles.hintText}>Toque no quadrado colorido para definir o grau de prioridade da tarefa.</Text>
        </View>
        
      </View>
    );
}

const styles = StyleSheet.create({
    cardHint: {
        backgroundColor: '#ED715F',
        width: '90%',
        height: 100,
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        elevation: 3,
        borderRadius: 5,
    },
    hintText: {
        color: '#fff',
        fontSize: 16,
        width: 250,
        marginHorizontal: 10
    },
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
    }
})

export default Help;
