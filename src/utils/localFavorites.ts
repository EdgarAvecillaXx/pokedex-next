const toggleFavorites = (id: number) => {
  console.log('toggleFavorite called');

  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter(idx => idx !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const isFavorite = (id: number): boolean => {
  console.log('isFavorite called');

  if (typeof window !== 'undefined') {
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id);
  } else {
    return false;
  }
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export default {
  isFavorite,
  pokemons,
  toggleFavorites,
};
