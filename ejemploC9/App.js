import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CameraScreen from './CameraScreen'; // Este es tu componente de la cámara
import VideoScreen from './VideoScreen';   // Este es el componente de video que crearás

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Camera">
        <Drawer.Screen name="Camera" component={CameraScreen} />
        <Drawer.Screen name="Video" component={VideoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

