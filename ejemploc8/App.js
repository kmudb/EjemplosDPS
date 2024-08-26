import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator } from '@react-navigation/drawer';

const Tab=createBottomTabNavigator();

const Drawer= createDrawerNavigator();


// Definir Tab Navigator
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown:false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Screen1}  options={{ tabBarShowLabel: () => null }}/>
      <Tab.Screen name="Profile" component={Screen2} />
      <Tab.Screen name="Settings" component={Screen3} />
    </Tab.Navigator>
  );
}


// Definir Drawer Navigator
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Tabs">
      <Drawer.Screen name="Tabs" component={MyTabs} options={{ title: 'Home' }} />
      <Drawer.Screen name="Notifications" component={Screen4} />
    </Drawer.Navigator>
  );
}

const Screen1=()=>(
  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Text>Screen 1</Text>
  </View>
);

const Screen2=()=>(
  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Text>Screen 2</Text>
  </View>
);

const Screen3=()=>(
  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Text>Screen 3</Text>
  </View>
);

const Screen4=()=>(
  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Text>Screen 4</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
