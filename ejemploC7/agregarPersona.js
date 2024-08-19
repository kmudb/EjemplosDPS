import { useEffect, useState } from 'react';
import { StyleSheet,TextInput,Button,FlatList, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function agregarPersona({ navigation  }) {
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');

  const storeData = async () => {
    try {
      const existingData = await AsyncStorage.getItem('@myApp:peopleList');
      const existingPeopleList = existingData ? JSON.parse(existingData) : [];
      const newPerson = { name: nameInput, age: ageInput };
      const updatedPeopleList = [...existingPeopleList, newPerson];
      await AsyncStorage.setItem('@myApp:peopleList', JSON.stringify(updatedPeopleList));
      setNameInput('');
      setAgeInput('');
      navigation.goBack();//volver a la pantalla
    } catch (error) {
      console.error('Error al almacenar datos:', error);
    }
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formGroup}>      
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nameInput}
        onChangeText={(text) => setNameInput(text)}      /></View>
      <View style={styles.formGroup}>
      <TextInput
        style={styles.input}
        placeholder="Edad"
        keyboardType="numeric"
        value={ageInput}
        onChangeText={(text) => setAgeInput(text)}      />
      </View>
       <View style={styles.buttonContainer}>
       <Button title="Agregar persona" onPress={storeData} />
       </View>
     
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    marginTop: 58,  
    marginLeft: 10,
    marginRight:10  },
  formGroup: {
    marginBottom: 20,  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,  },
  buttonContainer: {
    marginTop: 20,  },
  personContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,  },
  person:{
    flexDirection: 'column',  },
  personText: {
    fontSize: 16,  },
  personText2: {
    fontSize: 13,
    color:'grey'  },});
