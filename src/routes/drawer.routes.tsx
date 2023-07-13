import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Feather } from '@expo/vector-icons';

import { TabBarRoutes } from './tab.user.routes';
import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{ title: '' }}>
      <Drawer.Screen
        name="feed"
        component={TabBarRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          drawerLabel: 'inicio',
        }}
      />

      <Drawer.Screen
        name="profile"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          drawerLabel: 'Meu perfil',
        }}
      />
    </Drawer.Navigator>
  );
}
