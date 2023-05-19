/**
 * Página Tienda
 * Esta página muestra una colección de guitarras de la tienda.
 */

import Layout from '@/components/layout';
import Guitarra from '@/components/guitarra';
import styles from '@/styles/grid.module.css';

export default function Tienda({ guitarras }) {
  return (
    <>
      <Layout
        title={'Tienda Virtual'}
        description={'Tienda virtual, venta de guitarras'}
      >
        <main className='contenedor'>
          {/* Encabezado */}
          <h1 className='heading'>Nuestra Colección</h1>

          <div className={styles.grid}>
            {/* Renderizar la colección de guitarras */}
            {guitarras?.map(guitarra => (
              <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

// Consultar API con getStaticProps() - llamado a guitarras - Strapi
export async function getStaticProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`,
  );
  const { data: guitarras } = await respuesta.json();

  return {
    props: { guitarras },
  };
}

/**
 * También se incluye un ejemplo de cómo se podría utilizar el método getServerSideProps en lugar de getStaticProps si se requiere renderizado del lado del servidor.
 */
// export async function getServerSideProps() {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/guitarras?populate=imagen`,
//   );
//   const { data: guitarras } = await respuesta.json();

//   return {
//     props: { guitarras },
//   };
// }
