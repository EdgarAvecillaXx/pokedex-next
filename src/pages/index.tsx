import { GetStaticProps } from 'next';

import { PokemonListResponse, NextPageCustom, Props } from '@/types';
import { pokeApi } from './api';
import { Layout } from '@/components/layouts';
import { PokemonList } from '@/components/Common';

export const Home: NextPageCustom<Props> = () => {
  return <PokemonList />;
};

Home.getLayout = page => <Layout>{page}</Layout>;

export const getStaticProps: GetStaticProps = async context => {
  const {
    data: { results },
  } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons = results.map(pokemon => {
    const id = pokemon.url?.split('/')[6];
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    return {
      ...pokemon,
      id,
      image,
    };
  });
  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
