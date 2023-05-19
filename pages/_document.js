import { Html, Head, Main, NextScript } from 'next/document';

/**
 *
 *  Este Archivo _document.js, Nos Permitecontrolar la estructura del documento HTML, agregar metadatos, enlaces a estilos y scripts externos, entre otras configuraciones.
 */

export default function Document() {
  return (
    <Html lang='es'>
      <Head>
        {/* Metadatos */}
        <meta name='description' content='GuitarLA - Venta de guitarras' />

        {/* Fuentes de Google */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin={'true'}
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap'
          rel='stylesheet'
        />

        {/* Normalize.css */}
        <link
          rel='stylesheet'
          href='https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
