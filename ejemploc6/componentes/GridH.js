import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet,TouchableOpacity, Image } from 'react-native';
import JsonDatos from '../datos.json';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      // Accede a los datos del archivo JSON
      setData(JsonDatos.datos);
    }, []);


  return (
    <ScrollView horizontal style={styles.scrollView}>
      <View style={styles.container}>
        {data.map((item) => (
   <TouchableOpacity style={styles.item}>
   <View >
   <Image source={{ uri: item.image }} style={styles.image} />
   <Text style={styles.title}>{item.title}</Text>
       <Text style={styles.artist}>{item.artist}</Text>
   </View>
</TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    margin: 10,
  },
  container: {
    flexDirection: 'row',
  },
  item: {
    width: 100, // Ajusta el ancho del elemento según tus necesidades
    height: 100, // Ajusta la altura del elemento según tus necesidades
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin: 5,
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

export default App;