import axios from "axios";
import { useEffect } from "react";

type PokemonSkils(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  PokemonSkils('Frozen yoghurt', 159, 6.0, 24, 4.0),
  PokemonSkils('Ice cream sandwich', 237, 9.0, 37, 4.3),
  PokemonSkils('Eclair', 262, 16.0, 24, 6.0),
  PokemonSkils('Cupcake', 305, 3.7, 67, 4.3),
  PokemonSkils('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function PokéCard() {
  const [pokemonData, setPokemonData] = useState<PokemonSkils[]>([]);

  useEffect(() => {
    // Fetch data from the PokeAPI
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => {
        setPokemonData(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching Pokémon data:', error);
      });
  }, []);

return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '16px' }}>
  {pokemonData.map((PokemonSkils) => (


    
  ))}
</div>
  );
}