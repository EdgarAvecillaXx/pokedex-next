import { createContext } from 'react';

import { Pokemon } from '@/types';

export const PokemonContext = createContext({} as Pokemon[]);

interface PokemonProviderProps {
  value: Pokemon[];
  children: JSX.Element;
}

export const PokemonProvider = (props: PokemonProviderProps) => {
  const { value, children } = props;
  return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;
};
