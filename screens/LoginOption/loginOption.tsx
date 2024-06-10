import React, {ReactNode} from 'react';
import {Text, View} from 'react-native';
import MenuOptionButton from '../../components/menuOptionButton';
import {loginOptions} from '../../constants';

type Data = {
  title: string;
  icon: ReactNode;
  _clr: string;
};
function LoginOptionScreen() {
  return (
    <View className="flex-1 flex justify-center items-center content-center flex-row flex-wrap px-10">
      {loginOptions.map((val: Data, i) => (
        <MenuOptionButton {...val} key={i} />
      ))}
    </View>
  );
}

export default LoginOptionScreen;
