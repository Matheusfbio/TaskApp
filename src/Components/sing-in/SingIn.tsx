import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export default function SingIn({ promptAsync }) {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Ionicons name="logo-firebase" size={120} color="orange" />
      <Text className="text-3xl">
        Sing in with <Text className="text-blue-500">G</Text>
        <Text className="text-red-500">o</Text>
        <Text className="text-yellow-500">o</Text>
        <Text className="text-blue-500">g</Text>
        <Text className="text-green-500">l</Text>
        <Text className="text-red-500">e</Text>
      </Text>
      <Text className="text-3xl pb-10">and Firebase</Text>
      <TouchableOpacity
        className=" bg-blue-300 flex-row items-center justify-evenly p-7 w-80 rounded-full"
        onPress={() => {
          promptAsync();
        }}
      >
        <AntDesign name="google" size={30} color="black" />
        <Text className="text-lg">
          Sing in with <Text className="text-blue-500 pb-10">G</Text>
          <Text className="text-red-500">o</Text>
          <Text className="text-yellow-500">o</Text>
          <Text className="text-blue-500">g</Text>
          <Text className="text-green-500">l</Text>
          <Text className="text-red-500">e</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
