import axios from 'axios';
import {Card} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';



type Pokemon = {
  name: string;
  url: string;
};

export default function PokéCard() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    // Fetch data from the PokeAPI
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=50') // Adjust the limit to the number of Pokémon you want to display
      .then(response => {
        setPokemonData(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching Pokémon data:', error);
      });
  }, []);

 return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '16px' }}>
  {pokemonData.map((pokemon) => (
    <Card key={pokemon.name} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
        title={pokemon.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* You can add more details about the Pokémon here */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Learn More</Button>
      </CardActions>
    </Card>
  ))}
</div>
  );
}