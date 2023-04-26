import { FC } from 'react';

import { Card } from '@nextui-org/react';

import { PropsDetails } from '@/types';

const PokemonBanner: FC<PropsDetails> = ({ pokemon }) => {
  return (
    <Card isHoverable css={{ padding: '30px' }}>
      <Card.Body>
        <Card.Image
          src={pokemon.sprites.other?.['official-artwork'].front_default || '/no-image.png'}
          alt={pokemon.name}
          width='100%'
          height={200}
        />
      </Card.Body>
    </Card>
  );
};

export default PokemonBanner;
