import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from 'firebase/auth';

import { auth } from '../../../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const [userInfo, setUserInfo] = useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      '138751756651-7suo2561l2fcq4be0q5ge700rs9fnn0e.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type == 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);
  return (
    <SafeAreaView>
      <TouchableOpacity
        className="flex-row space-x-1 items-center justify-center p-10 w-auto rounded-sm bg-blue-600 direct"
        onPress={() => promptAsync(promptAsync)}
      >
        <AntDesign name="google" size={26} color="black" />
        <Text className="text-lg">Sing in with google</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
