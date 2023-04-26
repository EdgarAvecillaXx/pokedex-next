import { useContext } from 'react';

import { Pokemon } from '@/types';
import { PokemonContext } from '@/components/Common';

export const usePokemonContext: () => Pokemon[] = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemonContext must be used within a PokemonContextProvider');
  }
  return context;
};
