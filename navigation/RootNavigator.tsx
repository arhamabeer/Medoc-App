// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginOptionScreen from '../screens/LoginOption/loginOption';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginOptionScreen" component={LoginOptionScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
