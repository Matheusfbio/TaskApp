import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { BarRoutes } from '../../routes/tab.user.routes';

export default function MainScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-3xl">Welcome</Text>
    </SafeAreaView>
  );
}
