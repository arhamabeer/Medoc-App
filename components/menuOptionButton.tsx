import React, {ReactNode} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

type Data = {
  title: string;
  _clr: string;
  icon: ReactNode;
};

function MenuOptionButton(props: Data) {
  return (
    <TouchableOpacity
      style={{borderColor: props._clr}}
      className="w-[80%] border-2 bg-transparent h-44 m-2 rounded-lg shadow-md py-4 flex items-center justify-center">
      <View className=" pt-2 flex justify-center items-center">
        {props.icon}
      </View>
      <View className="h-12 flex items-center justify-center">
        <Text
          style={{color: props._clr}}
          className={`text-center text-4xl font-bold`}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default MenuOptionButton;
