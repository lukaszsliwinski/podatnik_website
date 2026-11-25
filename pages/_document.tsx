import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Biuro Rachunkowe Podatnik</title>
        <meta
          name="description"
          content="Profesjonalna księgowość, kadry i płace oraz rozliczenia podatkowe dla firm i osób fizycznych. Biuro Rachunkowe Podatnik w Chorzowie."
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
