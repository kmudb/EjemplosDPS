import React, { useState } from 'react';
import { StyleSheet, Button, FlatList, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

export default function ListaPersona({ navigation  }) {
  const [peopleList, setPeopleList] = useState([]);

 // Utiliza useFocusEffect para recargar los datos cuando la pantalla gana enfoque
 useFocusEffect(
    React.useCallback(() => {
      retrieveData();
    }, [])
  );


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
    } catch (error) {      console.error('Error al eliminar persona:', error);    }
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
      <View style={styles.buttonContainer}>
       <Button title="Agregar persona" onPress={() => navigation.navigate('Agregar')} />
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
