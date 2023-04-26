import { Container, Grid, Image, Text } from '@nextui-org/react';
import { ForwardRefExoticComponent, RefAttributes, forwardRef } from 'react';

export const NoFavorites: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>> = forwardRef(
  (props, ref) => {
    return (
      <Grid ref={ref}>
        <Container display='flex' direction='column' alignItems='center' justify='center'>
          <Text h1>No hay favoritos</Text>
          <Image
            alt='No hay favoritos'
            src={
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png'
            }
            width={300}
            height={300}
            css={{ opacity: '0.2' }}
          />
        </Container>
      </Grid>
    );
  }
);

NoFavorites.displayName = 'NoFavorites';