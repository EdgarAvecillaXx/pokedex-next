import { Navbar } from '@nextui-org/react';

import { ThemeToggler } from './ThemeToggler';
import { PokedexButton } from './PokedexButton';

import styles from './navbar.module.css';

export const NavBar: React.FC = () => {
  return (
    <Navbar
      variant={'sticky'}
      disableBlur
      height={60}
      className={styles['pkdx-nav']}
      css={{ $$navbarBackgroundColor: '#e22828', marginBottom: '$10' }}>
      <Navbar.Content>
        <PokedexButton />
      </Navbar.Content>
      <ThemeToggler />
    </Navbar>
  );
};
