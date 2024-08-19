
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaPersona from './listaPersona';
import agregarPersona from './agregarPersona';


const stack = createNativeStackNavigator();
export default function App() {
 
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Lista">
        <stack.Screen name="Lista" component={ListaPersona} options={{title:'Lista de personas'}}/>
        <stack.Screen name="Agregar" component={agregarPersona} options={{title:'Agregar personas'}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};
