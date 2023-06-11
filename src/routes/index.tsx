import { NavigationContainer } from '@react-navigation/native';

// import { LoginRoutes } from './user.routes';
import { BarRoutes } from './tab.user.routes';
import { MainScreen } from '../screens/main-screen/MainScreen';

export function Routes() {
  return (
    <NavigationContainer>
      <MainScreen />
      {/* <BarRoutes /> */}
    </NavigationContainer>
  );
}
