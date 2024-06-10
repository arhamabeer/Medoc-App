import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

type Data = {
  isFirstField?: boolean;
  type?: string;
  placeholder: string;
  onInputChange: (e: string) => void;
};

function InputFields({
  type = 'text',
  placeholder,
  onInputChange,
  isFirstField = false,
}: Data) {
  return (
    <TextInput
      secureTextEntry={type === 'password'}
      autoCapitalize={'none'}
      label={placeholder}
      onChangeText={onInputChange}
      placeholderTextColor="#888"
      autoFocus={isFirstField}
      className="m-2 z-50 text-black w-[80%]"
      placeholder={`Enter ${placeholder}`}
    />
  );
}

export default InputFields;
