import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';

const MostrarDatos = () => {
 const [peopleList, setPeopleList] = useState([]);


  useEffect(() => {
    retrieveData();
  }, []);

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
    <FlatList
        data={peopleList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
  );
};

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

export default MostrarDatos;
a