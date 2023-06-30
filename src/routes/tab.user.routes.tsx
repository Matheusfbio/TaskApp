import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screen1 } from '../screens/screen1';
import { Screen2 } from '../screens/screen2';
import { Entypo } from '@expo/vector-icons';

const { Screen, Navigator } = createBottomTabNavigator();

export function BarRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="Login"
        component={Screen1}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Usuario"
        component={Screen2}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="suitcase" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
}
