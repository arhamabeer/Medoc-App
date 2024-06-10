import React from 'react';
import Phar from 'react-native-vector-icons/MaterialIcons';
import Doc from 'react-native-vector-icons/FontAwesome6';
import {LoginOptions} from './types/loginOptions';

export const loginOptions: LoginOptions[] = [
  {
    title: 'Doctor Login',
    icon: <Doc name="user-doctor" size={54} color="#2075ab" />,
    _clr: '#2075ab',
  },
  {
    title: 'Pharma Login',
    icon: <Phar name="local-pharmacy" size={54} color="#04c20d" />,
    _clr: '#04c20d',
  },
  {
    title: 'Admin Login',
    icon: <Phar name="security" size={54} color="#a31d28" />,
    _clr: '#a31d28',
  },
];
