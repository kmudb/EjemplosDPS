import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image,StyleSheet, Text,TextInput, View } from 'react-native';

export default function Cajita() {
  const [nombre,setNombre] = useState('Juan Bosco');

  return (

        <View style={styles.container}>
        <TextInput 
          style={styles.input}
          defaultValue={nombre}  
          onChangeText={newText => setNombre(newText)}/>
        <Image
          style={styles.image}
          source={{uri:"https://img.freepik.com/vector-premium/mujer-avatar-mujer-negocios_38295-63.jpg"}}
        />
        <Text>Hola {nombre}</Text>
        <StatusBar style="auto" />
        </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    image: {
    flex: 0.5,
    width: '100%',
    backgroundColor: '#0553',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
