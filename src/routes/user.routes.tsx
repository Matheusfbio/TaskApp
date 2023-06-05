import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screen1 } from "../screens/screen1";
import { Screen2 } from "../screens/screen2";
import { StatusBar } from "react-native";

const { Screen, Navigator } = createNativeStackNavigator();

export function LoginRoutes() {
  return (
    <Navigator>
      <Screen
        name="Login"
        component={Screen1}
        options={{
          title: "login",
          headerTitleAlign: "center",
          statusBarStyle: "dark",
        }}
      />

      <Screen
        name="Usuario"
        component={Screen2}
        options={{
          title: "Usuario",
          headerTitleAlign: "center",
          statusBarStyle: "dark",
        }}
      />
    </Navigator>
  );
}
