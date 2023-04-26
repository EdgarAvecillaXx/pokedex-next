import { FC, PropsWithChildren, useEffect, useState } from 'react';

import Head from 'next/head';

import { NavBar } from '../UI';
import { Footer } from '../UI';
import { useRouter } from 'next/router';

interface Props {
  title?: string;
}

const origin = (typeof window !== 'undefined' && window.location.origin) || '';

export const Layout: FC<PropsWithChildren & Props> = ({ children, title }) => {
  const capitalizeTitle = title && title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <>
      <Head>
        <title>{capitalizeTitle || 'Pokedex App'}</title>
        <meta name='author' content='Edgar Avecilla' />
        <meta
          name='description'
          content={`Information about Pokemon${(title && ': ' + title) || ' and Pokedex'}`}
        />
        <meta name='keywords' content={`${title || 'trainer '},pokemon, pokedex`} />
        <meta property='og:title' content={`Information about ${capitalizeTitle || 'Pokemon'}`} />
        <meta
          property='og:description'
          content={`This is the info page about ${capitalizeTitle || 'Pokedex'}`}
        />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
      </Head>

      <NavBar />

      <main>{children}</main>

      <Footer />
    </>
  );
};
