import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Screen1() {
  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('Usuario');
  }
  return (
    <View className="flex-1 justify-center items-center bg-yellow-500">
      <Text className="justify-center mt-1 ">Bem vindo a tela de login</Text>
      <Button title="Ir para a tela de usuario" onPress={openScreen} />
      <StatusBar style="dark" />
    </View>
  );
}
