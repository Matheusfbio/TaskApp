import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';

export default function SingIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <Text className="text-3xl pb-3">and Firebase</Text>
      <SafeAreaView className="flex-col justify-around">
        <TextInput
          className=" border-2 border-gray-500 text-center items-center justify-evenly m-2 p-2 w-96 rounded-lg"
          autoCapitalize="none"
          placeholder="Email"
        />
        <TextInput
          className=" border-2 border-gray-500 text-center items-center justify-evenly m-2 p-2 w-96 rounded-lg"
          autoCapitalize="none"
          placeholder="Senha"
        />
      </SafeAreaView>
      <TouchableOpacity className=" bg-blue-300 flex-row items-center justify-evenly p-2 my-4 w-40 rounded-lg">
        <Text>Entrar</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity className=" bg-blue-300 flex-row items-center justify-evenly p-7 w-80 rounded-full">
        <AntDesign name="google" size={30} color="black" />
        <Text className="text-lg">
          Sing in with <Text className="text-blue-500 pb-10">G</Text>
          <Text className="text-red-500">o</Text>
          <Text className="text-yellow-500">o</Text>
          <Text className="text-blue-500">g</Text>
          <Text className="text-green-500">l</Text>
          <Text className="text-red-500">e</Text>
        </Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}
