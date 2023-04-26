import Image from 'next/image';

import { Button, Navbar, Text, useTheme } from '@nextui-org/react';

import { useTheme as useNextTheme } from 'next-themes';

export const ThemeToggler: React.FC = () => {
  const { setTheme } = useNextTheme();
  const { type, isDark } = useTheme();

  return (
    <>
      <Navbar.Brand css={{ marginRight: '-25px' }}>
        <Text color='white' b size={'$md'} css={{ marginRight: '-10px', marginTop: '15px' }}>
          Change Theme
        </Text>

        <Button
          onPress={() => {
            setTheme(isDark ? 'light' : 'dark');
          }}
          auto
          light
          ripple={false}
          css={{
            padding: '0px',
          }}>
          <Image
            alt={type}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              isDark ? 700 : 197
            }.png`}
            width={70}
            height={70}
          />
        </Button>
      </Navbar.Brand>
    </>
  );
};
