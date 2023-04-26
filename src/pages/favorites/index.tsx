import { useEffect, useRef, useState } from 'react';

import { NextPageCustom } from '@/types';
import { Layout } from '@/components/layouts';
import { Favorites, NoFavorites } from '@/components/UI/Favorites';
import { localFavorites } from '@/utils';

const FavoritesPage: NextPageCustom = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [styleHeight, setStyleHeight] = useState('auto');
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
    function handleResize() {
      if (divRef.current?.offsetHeight! > window.innerHeight - 136) {
        setStyleHeight('auto');
      } else {
        setStyleHeight('calc(100vh - 136px)');
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
      {favoritesPokemons.length > 0 ? (
        <Favorites favoritesPokemons={favoritesPokemons} ref={divRef} />
      ) : (
        <NoFavorites ref={divRef} />
      )}
    </div>
  );
};

FavoritesPage.getLayout = page => <Layout title='Pokemons - Favoritos'>{page}</Layout>;

export default FavoritesPage;
