// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginOptionScreen from '../screens/LoginOption/loginOption';
import Login from '../screens/Login/login';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginOptionScreen" component={LoginOptionScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
