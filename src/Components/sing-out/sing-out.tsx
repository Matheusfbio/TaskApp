import { Button, View } from 'react-native';
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

export default function () {
  const auth = getAuth();

  signOut(auth)
    .then(() => {
      console.log('Sign-out successful.');
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <View>
      <Button title="SignOut" />
    </View>
  );
}
