import { pokeApi } from '@/pages/api';
import { PokemonDetail } from '@/types';

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<PokemonDetail>(`/pokemon/${nameOrId}`);
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
      types: data.types,
    };
  } catch (error) {
    return null;
  }
};
