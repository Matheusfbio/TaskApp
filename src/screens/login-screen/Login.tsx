import React, { useEffect, useState } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from 'firebase/auth';

import { auth } from '../../../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SingIn from '../../Components/sing-in';
import { Screen1 } from '../screen1';

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

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(JSON.stringify(user, null, 2));
        setUserInfo(user);
      } else {
        console.log('Await google sing in');
      }
    });

    return () => unsub();
  }, []);

  return userInfo ? <Screen1 /> : <SingIn promptAsync={promptAsync} />;
}
