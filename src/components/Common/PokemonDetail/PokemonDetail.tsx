import { FC } from 'react';
import { Badge, Button, Card, Container, Image, Text } from '@nextui-org/react';

import { PropsDetails } from '@/types';

type Props = {
  toggleFavorites: () => void;
  isFavorite: boolean;
};

const PokemonDetail: FC<PropsDetails & Props> = ({ pokemon, toggleFavorites, isFavorite }) => {
  return (
    <Card>
      <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
        <Container>
          <Text h1 transform='capitalize'>
            {pokemon.name}
          </Text>
          {pokemon.types.map((type, index) => (
            <Badge
              key={index}
              css={{
                marginRight: '1em',
                borderColor: '$' + type.type.name,
                color: '$' + type.type.name,
              }}
              variant={'bordered'}>
              {type.type.name}
            </Badge>
          ))}
        </Container>
        <Button color='gradient' ghost={!isFavorite} onPress={() => toggleFavorites()}>
          {isFavorite ? 'En favoritos' : 'Guardar en Favoritos'}
        </Button>
      </Card.Header>
      <Card.Body>
        <Text size={30}>Sprites:</Text>
        <Container direction='row' display='flex'>
          <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
          <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
          <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
          <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
        </Container>
      </Card.Body>
    </Card>
  );
};

export default PokemonDetail;
