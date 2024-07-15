import React,{useState,useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PokemonDetailScreen = ({ route }) => {
  const { pokemonUrl } = route.params;
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    fetch(pokemonUrl)
      .then(response => response.json())
      .then(data => {
        setPokemon(data);
      })
      .catch(error => console.error('Error fetching Pokemon:', error));
  }, []);





if (!pokemon) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Cargando detalles del Pokémon...</Text>
      </View>
    );
  }

  const mov = pokemon.moves.map(m => m.move.name);
  let movimientos= mov.join(',');

  return (
    <View style={styles.container}>
           <Image style={styles.imagen} source={{ uri: pokemon.sprites.front_default }} />
      <Text style={styles.tipTitle}>Detalles de {pokemon.name}</Text>
      <Text style={styles.tip}> Nombre: {pokemon.name} {'\n'}</Text>
      <Text style={styles.tip}> Alto: {pokemon.height} {'m \n'}</Text>
      <Text style={styles.tip}> Peso: {pokemon.weight} {'kg \n'}</Text>
      <Text style={styles.tip}> Movimiento: {movimientos} </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tip: {
    fontSize: 16,
    marginBottom: 5,
  },
  imagen: {
    width: '100%',
    aspectRatio: 2, // Ajustar el aspecto de la bandera
    resizeMode: 'cover', // Ajustar la imagen para cubrir toda el área
    borderColor:'#000000'
  },
});

export default PokemonDetailScreen;


