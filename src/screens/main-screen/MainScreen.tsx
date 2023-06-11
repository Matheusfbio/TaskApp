import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, Button, TouchableOpacity } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function MainScreen() {
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId:
      '890725885278-3hu4i77d8omtng7dailrgh3veuekbhkk.apps.googleusercontent.com',
    androidClientId:
      '890725885278-cknssodril7drh9e849in9668kj70iml.apps.googleusercontent.com',
  });

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="justify-center mt-1 text-3xl"> My Study Life</Text>
      <Button
        title="Sing in with Google"
        onPress={() => {
          promptAsync();
        }}
      />
      <StatusBar style="dark" />
    </View>
  );
}
