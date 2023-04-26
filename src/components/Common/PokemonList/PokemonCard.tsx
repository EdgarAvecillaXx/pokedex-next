import { FC, MouseEventHandler } from 'react';

import { useRouter } from 'next/router';

import { Card, Grid, Row, Text } from '@nextui-org/react';
import { Pokemon } from '@/types';

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: FC<Props> = ({ pokemon: { id, name, image } }) => {
  const router = useRouter();

  const handleClick: MouseEventHandler = () => {
    router.push(`/name/${name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={handleClick}>
        <Card.Body>
          <Card.Image src={image} width={'100%'} height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between' css={{ margin: '2px 0.8em' }}>
            <Text transform='capitalize'>{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
