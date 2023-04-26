import { useEffect, useRef, useState } from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import confetti from 'canvas-confetti';

import { NextPageCustom, PokemonDetail, PokemonListResponse, PropsDetails } from '@/types';
import { pokeApi } from '../api';
import { Layout } from '@/components/layouts';
import PokemonDetails from '@/components/Common/PokemonDetail';
import { localFavorites } from '@/utils';

const PokemonByNamePage: NextPageCustom<PropsDetails> = ({ pokemon }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [styleHeight, setStyleHeight] = useState('auto');
  const [isFavorite, setIsFavorite] = useState(localFavorites.isFavorite(pokemon.id));

  const handleFavorites = () => {
    localFavorites.toggleFavorites(pokemon.id);
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      confetti({
        particleCount: 100,
        spread: 160,
        angle: 270,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
  };

  useEffect(() => {
    function handleResize() {
      if (divRef.current?.offsetHeight! > window.innerHeight - 148) {
        setStyleHeight('auto');
      } else {
        setStyleHeight('calc(100vh - 148px)');
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ height: styleHeight }}>
      <PokemonDetails
        ref={divRef}
        isFavorite={isFavorite}
        pokemon={pokemon}
        toggleFavorites={handleFavorites}
      />
    </div>
  );
};

PokemonByNamePage.getLayout = (page, pokemon) => <Layout title={pokemon.name}>{page}</Layout>;

export const getStaticPaths: GetStaticPaths = async ctx => {
  const {
    data: { results },
  } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);
  const paths = results.map(pokemon => ({
    params: { name: pokemon.name },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { name } = ctx.params as { name: string };

  const { data } = await pokeApi.get<PokemonDetail>(`/pokemon/${name}`);

  return {
    props: {
      pokemon: {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
        types: data.types,
      },
    },
  };
};

export default PokemonByNamePage;
