import { useEffect, useRef, useState } from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import confetti from 'canvas-confetti';

import { NextPageCustom, PokemonDetail, PropsDetails } from '@/types';
import { pokeApi } from '../api';
import { Layout } from '@/components/layouts';
import PokemonDetails from '@/components/Common/PokemonDetail';
import { getPokemonInfo, localFavorites } from '@/utils';

const PokemonPage: NextPageCustom<PropsDetails> = ({ pokemon }) => {
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

PokemonPage.getLayout = (page, pokemon) => <Layout title={pokemon.name}>{page}</Layout>;

export const getStaticPaths: GetStaticPaths = async ctx => {
  const limit = [...Array(151)].map((_, i) => i + 1);
  const paths = limit.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { id } = ctx.params as { id: string };

  const pokemon = await getPokemonInfo(id);

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
    revalidate: 86400, // 24 hours
  };
};

export default PokemonPage;
