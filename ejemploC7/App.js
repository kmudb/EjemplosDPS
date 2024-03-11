import React, { useState, useEffect } from 'react';
import { View, Text,SafeAreaView, TouchableOpacity, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

const App = () => {
  const [peopleList, setPeopleList] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');

  useEffect(() => {
    retrieveData();
  }, []);

  const storeData = async () => {
    try {
      const existingData = await AsyncStorage.getItem('@myApp:peopleList');
      const existingPeopleList = existingData ? JSON.parse(existingData) : [];

      const newPerson = { name: nameInput, age: ageInput };
      const updatedPeopleList = [...existingPeopleList, newPerson];

      await AsyncStorage.setItem('@myApp:peopleList', JSON.stringify(updatedPeopleList));

      setPeopleList(updatedPeopleList);

      setNameInput('');
      setAgeInput('');
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

  const removePerson = async (index) => {
    try {
      const updatedPeopleList = [...peopleList];
      updatedPeopleList.splice(index, 1);

      await AsyncStorage.setItem('@myApp:peopleList', JSON.stringify(updatedPeopleList));

      setPeopleList(updatedPeopleList);
    } catch (error) {
      console.error('Error al eliminar persona:', error);
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.personContainer}>
      <View style={styles.person}>
      <Text style={styles.personText}>{`Nombre: ${item.name}`}</Text>
      <Text style={styles.personText2}>{` Edad: ${item.age}`}</Text>
      </View>
      <TouchableOpacity onPress={() => removePerson(index)}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formGroup}>      
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nameInput}
        onChangeText={(text) => setNameInput(text)}
      /></View>

      <View style={styles.formGroup}>
      <TextInput
        style={styles.input}
        placeholder="Edad"
        keyboardType="numeric"
        value={ageInput}
        onChangeText={(text) => setAgeInput(text)}
      />
      </View>
    
       <View style={styles.buttonContainer}>
       <Button title="Agregar persona" onPress={storeData} />
       </View>


      <FlatList
        data={peopleList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginTop: 58,
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
  },
  personContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  person:{
    flexDirection: 'column',
  },
  personText: {
    fontSize: 16,
  },
  personText2: {
    fontSize: 13,
    color:'grey'
  },
});

export default App;
