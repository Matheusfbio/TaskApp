import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import DrawerRoutes from './drawer.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}
