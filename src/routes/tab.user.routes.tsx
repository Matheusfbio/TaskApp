import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import CalendarScreen from '../screens/calendar-screen/calendar-screen';
import TaskScreen from '../screens/tasks-screen/tasks-screen';
import SettingScreen from '../screens/setting-screen/setting-screen';

const { Screen, Navigator } = createBottomTabNavigator();

export function TabBarRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="Login"
        component={CalendarScreen}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Usuario"
        component={TaskScreen}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="suitcase" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Configuração"
        component={SettingScreen}
        options={{
          tabBarLabel: 'settings',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
