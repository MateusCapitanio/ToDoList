import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Provider from './components/Provider';

const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Lista de tarefas' component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <MyTabs />
      </Provider>
    </NavigationContainer>
  );
}


