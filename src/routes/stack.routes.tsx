import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Feather } from '@expo/vector-icons';

import { TabBarRoutes } from './tab.user.routes';
import tasksScreen from '../screens/tasks-screen';
import { Screen1 } from '../screens/screen1';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="feed" component={Screen1} />
    </Stack.Navigator>
  );
}
