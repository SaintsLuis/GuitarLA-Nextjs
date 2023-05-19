/**
 * Página 404 - ERROR
 * Esta página se muestra cuando se accede a una ruta que no existe.
 */

import Link from 'next/link';
import Layout from '@/components/layout';

export default function Pagina404() {
  return (
    <>
      <Layout title='Página No Encontrada'>
        <p className='error'>Página No Encontrada</p>
        <Link href={'/'} legacyBehavior>
          <a className='error-enlace'>Ir a Inicio</a>
        </Link>
      </Layout>
    </>
  );
}
