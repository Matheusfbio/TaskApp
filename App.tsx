import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './src/routes/drawer.routes';
import { ActivityIndicator, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SingIn from './src/Components/sing-in';

export default function App() {
  const user = false;
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // useEffect(() => {
  //   const unsubscribe = auth().onAuthStateChanged((_user) => {
  //     if (initializing) {
  //       setInitializing(false);
  //     }
  //     setUser(_user);
  //   });

  //   return unsubscribe;
  // }, [initializing]);

  // if (initializing) {
  //   return (
  //     <View className="flex-1 items-center justify-center">
  //       <ActivityIndicator color={Colors.primary} />
  //     </View>
  //   );
  // }

  return (
    <NavigationContainer>
      {/* <SingIn /> */}
      {user ? <DrawerRoutes /> : <SingIn />}
    </NavigationContainer>
  );
}
