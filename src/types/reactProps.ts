import { NextPage } from 'next';
import { Pokemon, PokemonDetail } from '@/types';

export type NextPageCustom<T = unknown> = NextPage<T> & {
  getLayout?: (page: JSX.Element, pokemon: PokemonDetail) => JSX.Element;
};

export interface Props {
  pokemon: Pokemon;
}

export interface PropsDetails {
  pokemon: PokemonDetail;
}
