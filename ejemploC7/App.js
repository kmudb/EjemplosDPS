import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Formulario from './components/Formulario';
import MostrarDatos from './components/MostrarDatos';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Formulario">
        <Stack.Screen name="Formulario" component={Formulario} />
        <Stack.Screen name="MostrarDatos" component={MostrarDatos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;