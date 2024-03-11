import  {useEffect, useState } from 'react';
import { View,Alert,  TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Formulario = ({ navigation }) => {
  const [peopleList, setPeopleList] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');



  useEffect(() => {
    retrieveData();
  }, []);

  const isValidName = (name) => /^[A-Za-z\s]+$/.test(name);
  const isValidAge = (age) => /^\d+$/.test(age);

  const storeData = async () => {
    if (!isValidName(nameInput)) {
      Alert.alert('Error', 'Nombre inválido. Debe contener solo letras y espacios.');
      return;
    }

    if (!isValidAge(ageInput)) {
      Alert.alert('Error', 'Edad inválida. Debe contener solo números.');
      return;
    }
    try {
      const existingData = await AsyncStorage.getItem('@myApp:peopleList');
      const existingPeopleList = existingData ? JSON.parse(existingData) : [];

      const newPerson = { name: nameInput, age: ageInput };
      const updatedPeopleList = [...existingPeopleList, newPerson];

      await AsyncStorage.setItem('@myApp:peopleList', JSON.stringify(updatedPeopleList));

      setPeopleList(updatedPeopleList);

      setNameInput('');
      setAgeInput('');
      navigation.navigate('MostrarDatos');
      
    } catch (error) {
      console.error('Error al almacenar datos:', error);
    }
  };


  const retrieveData = async () => {
    try {
      const data = await AsyncStorage.getItem('@myApp:peopleList');
      if (data !== null) {
        setPeopleList(JSON.parse(data));
      }
    } catch (error) {
      console.error('Error al recuperar datos:', error);
    }
  };

  const guardarDatos = async () => {
    try {
      // Almacenar datos en AsyncStorage
      await AsyncStorage.setItem('nombre', nombre);
      await AsyncStorage.setItem('edad', edad);

      // Navegar a la pantalla de mostrar datos
      navigation.navigate('MostrarDatos');
    } catch (error) {
      console.error('Error al guardar datos:', error);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nameInput}
        onChangeText={(text) => setNameInput(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Edad"
        keyboardType="numeric"
        value={ageInput}
        onChangeText={(text) => setAgeInput(text)}
      />
     <Button title="Agregar persona" onPress={storeData} />
    </View>
  );
};

export default Formulario;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginTop: 58,
    marginLeft: 10,
    marginRight: 10,

  },
  formGroup: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 20,
  }
});