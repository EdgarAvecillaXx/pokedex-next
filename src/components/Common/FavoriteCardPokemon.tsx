import { FC } from 'react';

import { useRouter } from 'next/router';

import { Card, Grid } from '@nextui-org/react';

interface Props {
  id: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ id }) => {
  const router = useRouter();
  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable isPressable css={{ padding: 10 }} onPress={onFavoriteClicked}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  );
};
