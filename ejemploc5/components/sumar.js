import { useState } from 'react';
import { Button, StyleSheet, Text,TextInput, View } from 'react-native';

export default function Sumar() {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [resultado, setResultado] = useState(null);
  
    const sumarNumeros = () => {
      const suma = parseFloat(numero1) + parseFloat(numero2);
      setResultado(suma);
    };
  return (

        <View style={styles.container}>
      <Text style={styles.tile}>Suma de Dos Números</Text>
      <TextInput
      style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={numero1}
        onChangeText={(text) => setNumero1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={numero2}
        onChangeText={(text) => setNumero2(text)}
      />
      <Button title="Sumar" onPress={sumarNumeros} />
      {resultado !== null && <Text>Resultado: {resultado}</Text>}
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
  tile: {
    color:"blue",
    fontSize:23,
  }
});
