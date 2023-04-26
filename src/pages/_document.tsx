import { Children } from 'react';

import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

import { CssBaseline } from '@nextui-org/react';

export default function MyDocument() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps, styles: Children.toArray([initialProps.styles, CssBaseline.flush()]) };
};
