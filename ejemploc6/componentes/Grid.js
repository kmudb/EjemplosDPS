import React, { useEffect, useState } from 'react';
import { FlatList, Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import JsonDatos from '../datos.json';

const Grid = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      // Accede a los datos del archivo JSON
      setData(JsonDatos.datos);
    }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
        <View >
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
        </View>
    </TouchableOpacity>
    
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={4}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: 100, // Ajusta la altura del elemento según tus necesidades
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    color: '#888',
  },
});

export default Grid;