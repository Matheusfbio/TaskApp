import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import SingOut from '../../Components/sing-out/sing-out';

export default function SettingScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-3xl">Setting</Text>
      <SingOut />
    </SafeAreaView>
  );
}
