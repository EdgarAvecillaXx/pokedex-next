import { ForwardRefExoticComponent, RefAttributes, forwardRef } from 'react';

import { Grid } from '@nextui-org/react';

import { PropsDetails } from '@/types';
import PokemonBanner from './PokemonBanner';
import PokemonDetail from './PokemonDetail';

type Props = {
  toggleFavorites: () => void;
  isFavorite: boolean;
};

const PokemonDetails: ForwardRefExoticComponent<
  Omit<PropsDetails & Props, 'ref'> & RefAttributes<HTMLDivElement>
> = forwardRef(({ pokemon, toggleFavorites, isFavorite }, ref) => {
  return (
    <Grid.Container css={{ marginTop: '5px' }} gap={2} ref={ref}>
      <Grid xs={12} sm={4}>
        <PokemonBanner pokemon={pokemon} />
      </Grid>
      <Grid xs={12} sm={8}>
        <PokemonDetail isFavorite={isFavorite} pokemon={pokemon} toggleFavorites={toggleFavorites} />
      </Grid>
    </Grid.Container>
  );
});

PokemonDetails.displayName = 'PokemonDetails';

export default PokemonDetails;
