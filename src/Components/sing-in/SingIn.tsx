import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

export default function SingIn({ promptAsync }) {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <TouchableOpacity
        className=" bg-blue-600 hover:bg-black flex-row items-center justify-center p-3 w-64 rounded-full "
        onPress={() => {
          promptAsync();
        }}
      >
        <AntDesign name="google" size={26} color="black" />
        <Text className="text-lg">Sing in with google</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
