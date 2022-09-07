import React, { useContext, useEffect, useState } from 'react';
import {
    // Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView, 
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Task from '../components/Task';
import myContext from '../contexts/myContext';
import Icon from 'react-native-vector-icons/Ionicons'

function HomeScreen() {
  const [task, setTask] = useState('');
  const [arrayTasks, setArrayTasks] = useState<string[]>([]);

  const { username }: any = useContext(myContext);

  useEffect(() => {
    async function getDatas() {
        const result = await AsyncStorage.getItem('tasks');
        if(result) {
            setArrayTasks(JSON.parse(result));
        }
    }
    getDatas();
  }, [])

  useEffect(() => {
    async function saveDatas() {
        AsyncStorage.setItem('tasks', JSON.stringify(arrayTasks));
    }
    saveDatas();
  }, [arrayTasks])

  const handleAddTask = () => {
    // Keyboard.dismiss();
    setArrayTasks((prevState) => [...prevState, task]);
    setTask('');
  }

  const completedTask = (index: number) => {
    let arrayTasksCopy = [...arrayTasks];
    arrayTasksCopy.splice(index, 1)
    setArrayTasks(arrayTasksCopy);
  }

    return (
        <View style={styles.container}>
        <ScrollView style={styles.tasksWrapper}
        >
          <Text style={styles.sectionTitle}>Olá, <Text style={{ color: '#ED715F'}}>{username}</Text></Text>
          <Text style={styles.hintText}>Toque em uma tarefa adicionada para remover</Text>
          <Text style={styles.hintText}>Toque no quadrado colorido para definir o grau de prioridade da tarefa</Text>
  
          <View style={styles.items}>
            {arrayTasks.map((task, i) => (
              <TouchableOpacity key={i} onPress={() => completedTask(i)}>
                <Task text={task} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
  
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={ styles.writeTaskWrapper }
            >
            <TextInput
                style={styles.textInput}
                placeholder={'Escreva uma tarefa'}
                maxLength={40}
                onChangeText={(text) => setTask(text)}
                value={task}
            />
            <TouchableOpacity onPress={handleAddTask}>
                <View style={styles.addWrapper}>
                <Text style={styles.addText}>
                    <Icon name='send' size={20} color="#352E2F" />
                </Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED'
    },
    tasksWrapper: {
      height: 250,
      paddingHorizontal: 20,
    },
    hintText: {
        color: '#ED715F',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginVertical: 10,
        borderRadius: 5,
    },
    sectionTitle: {
      paddingTop: 20,
      fontSize: 24,
      fontWeight: 'bold',
      color: '#352E2F'
    },
    items: {
      marginTop: 30
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 20,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    textInput: {
      paddingVertical: 10,
      paddingHorizontal: 25,
      backgroundColor: '#fff',
      borderRadius: 10,
      width: 300,
  
    },
    addWrapper: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#ED715F',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addText: {
        color: '#352E2F',
    },
});

export default HomeScreen;
