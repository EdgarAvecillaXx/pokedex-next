import type { AppProps } from 'next/app';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { NextPageCustom } from '@/types';
import { darkTheme, lightTheme } from '@/themes';
import { PokemonProvider } from '@/components/Common';

import '@/styles/globals.css';

type AppPropsCustom = AppProps & {
  Component: NextPageCustom;
};

export default function App({ Component, pageProps }: AppPropsCustom) {
  const { pokemons, pokemon } = pageProps;
  const getLayout = Component.getLayout || (page => page);
  return (
    <PokemonProvider value={pokemons}>
      <NextThemesProvider
        defaultTheme='system'
        attribute='class'
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}>
        <NextUIProvider>{getLayout(<Component {...pageProps} />, pokemon)}</NextUIProvider>
      </NextThemesProvider>
    </PokemonProvider>
  );
}
