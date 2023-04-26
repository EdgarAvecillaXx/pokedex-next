import Link from 'next/link';

import { Container, Image, Tooltip } from '@nextui-org/react';

import style from './navbar.module.css';

export const PokedexButton: React.FC = () => {
  return (
    <Container
      css={{ paddingLeft: '0px' }}
      direction='row'
      display='flex'
      alignItems='flex-start'
      className={style['pkdx-button-container']}>
      <Tooltip content={'Go to Home'} placement='bottom' className={style['pkdx-button-main']}>
        <Link href='/'>
          <Image className={`${style['pkdx-button']}`} src={'/main-circle.svg'} />
        </Link>
      </Tooltip>
      <Tooltip content={'Go to Favorites'} placement='bottom'>
        <Link href='/favorites'>
          <Image className={style['pkdx-button']} src={'/circle1.svg'} />
        </Link>
      </Tooltip>
      <Image className={style['pkdx-button']} src={'/circle2.svg'} />
      <Image className={style['pkdx-button']} src={'/circle3.svg'} />
    </Container>
  );
};
