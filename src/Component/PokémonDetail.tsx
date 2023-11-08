import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Pokemon {
  name: string;
  id: number;
  types: string[];
  height: number;
  weight: number;
  abilities: string[];
  species: { name: string };
  moves: { move: { name: string } }[];
}

interface PokemonDetailProps extends RouteComponentProps<{ name: string }> {}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ match }) => {
  const { name } = match.params;
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        const data = response.data;
        setPokemon({
          name: data.name,
          id: data.id,
          types: data.types.map((type: any) => type.type.name),
          height: data.height,
          weight: data.weight,
          abilities: data.abilities.map((ability: any) => ability.ability.name),
          species: { name: data.species.name },
          moves: data.moves.slice(0, 5), // Limiting to the first 5 moves for simplicity
        });
      })
      .catch((error) => {
        console.error('Error fetching Pokémon data:', error);
      });
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const { id, types, height, weight, abilities, species, moves } = pokemon;

  return (
    <div>
      <h2>{name}</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <p>ID: {id}</p>
      <p>Types: {types.join(', ')}</p>
      <p>Height: {height} decimetres</p>
      <p>Weight: {weight} hectograms</p>
      <p>Abilities: {abilities.join(', ')}</p>
      <p>Species: {species.name}</p>
      <h3>Moves</h3>
      <ul>
        {moves.map((move, index) => (
          <li key={index}>{move.move.name}</li>
        )}
      </ul>
    </div>
  );
};

export default PokemonDetail;
