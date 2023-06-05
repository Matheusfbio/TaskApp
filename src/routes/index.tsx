import { NavigationContainer } from "@react-navigation/native";

import { LoginRoutes } from "./user.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <LoginRoutes />
    </NavigationContainer>
  );
}
