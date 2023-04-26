import { FC } from 'react';

import { Grid } from '@nextui-org/react';

import PokemonCard from './PokemonCard';
import { usePokemonContext } from '@/hooks';
import { Pokemon } from '@/types';

export const PokemonList: FC = () => {
  const pokemons: Pokemon[] = usePokemonContext();

  return (
    <Grid.Container gap={2} justify='center'>
      {pokemons.map(pokemon => {
        return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
      })}
    </Grid.Container>
  );
};
