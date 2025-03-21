import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Formulario from './components/Formulario';
import MostrarDatos from './components/MostrarDatos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Formulario">
      <Stack.Screen name="Formulario" component={Formulario} />
      <Stack.Screen name="MostrarDatos" component={MostrarDatos} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

