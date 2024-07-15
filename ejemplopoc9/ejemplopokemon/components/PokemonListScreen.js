import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonDetailScreen from './PokemonDetailScreen';



const PokemonApp =  ({ navigation }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0')
      .then(response => response.json())
      .then(data => {
        setPokemonList(data.results);
        setFilteredPokemonList(data.results);
      })
      .catch(error => console.error('Error fetching Pokemon:', error));
  }, []);

  const filterPokemon = query => {
    setSearchQuery(query);
    const filtered = pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPokemonList(filtered);
  };


  const renderPokemonItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => showPokemonDetails(item.url)}>
      <Image style={styles.image} source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIdFromUrl(item.url)}.png` }} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  const getPokemonIdFromUrl = url => {
    const idRegex = /\/(\d+)\//;
    return url.match(idRegex)[1];
  };

const showPokemonDetails = pokemonUrl => {
    navigation.navigate('Detalles', { pokemonUrl });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        onChangeText={filterPokemon}
        value={searchQuery}
        placeholder="Buscar Pokémon..."
      />
      <FlatList
        data={filteredPokemonList}
        renderItem={renderPokemonItem}
        numColumns={2}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PokemonApp;