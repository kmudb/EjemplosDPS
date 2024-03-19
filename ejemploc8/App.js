// Importaciones necesarias
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, View, Platform } from 'react-native';

// Pantallas para las pestañas
const Screen1 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Screen 1</Text>
  </View>
);

const Screen2 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Screen 2</Text>
  </View>
);



// Pestañas
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Screen1') {
          iconName = Platform.OS === 'ios' ? 'home-outline' : 'home';
        } else if (route.name === 'Screen2') {
          iconName = Platform.OS === 'ios' ? 'list-outline' : 'list';
        }
        // Devolver el componente de icono correspondiente
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Screen1" component={Screen1} />
    <Tab.Screen name="Screen2" component={Screen2} />
  </Tab.Navigator>
);

// Pantallas para el Drawer
const DrawerScreen1 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Drawer Screen 1</Text>
  </View>
);

const DrawerScreen2 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Drawer Screen 2</Text>
  </View>
);

// Drawer
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
    <Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} />
  </Drawer.Navigator>
);

// Componente principal
const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
};

export default App;
