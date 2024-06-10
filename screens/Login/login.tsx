import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import InputFields from '../../components/inputFields';
import Icon from 'react-native-vector-icons/AntDesign';
import {Button, Text} from 'react-native-paper';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (val: string, target: string) => {
    setLoginData(prev => ({
      ...prev,
      [target]: val,
    }));
  };
  return (
    <View className="flex-1 justify-center items-center">
      <InputFields
        placeholder="Email"
        onInputChange={(v: string) => handleInputChange(v, 'email')}
        isFirstField={true}
      />
      <InputFields
        placeholder="Password"
        onInputChange={(v: string) => handleInputChange(v, 'password')}
        type="password"
      />
      <Button
        icon="login"
        mode="contained"
        className="w-[60%] m-2"
        onPress={() => console.log('Pressed')}>
        Login
      </Button>
    </View>
  );
}

export default Login;
