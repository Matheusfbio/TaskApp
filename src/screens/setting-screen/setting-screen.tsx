import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';

export default function SettingScreen() {
  const SignOut = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        console.log('Sign-out successful.');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-3xl">Setting</Text>
      {/* <Button onPress={signOut} title="signOut" /> */}
      <Button title="Sign Out" onPress={SignOut} />
    </SafeAreaView>
  );
}
