import { FavoriteCardPokemon } from '@/components/Common';
import { Card, Grid, Link } from '@nextui-org/react';
import React, { FC, ForwardRefExoticComponent, RefAttributes, forwardRef } from 'react';

interface Props {
  favoritesPokemons: number[];
}

export const Favorites: ForwardRefExoticComponent<Omit<Props, 'ref'> & RefAttributes<HTMLDivElement>> =
  forwardRef(({ favoritesPokemons }, ref) => {
    return (
      <>
        <Grid.Container gap={2} direction='row' justify='flex-start' ref={ref}>
          {favoritesPokemons.map(id => (
            <FavoriteCardPokemon id={id} key={id} />
          ))}
        </Grid.Container>
      </>
    );
  });
