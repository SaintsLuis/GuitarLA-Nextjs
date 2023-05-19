/**
 * Página de un post individual (Blog / Post - Router Dinámico)
 * Esta página muestra los detalles de un post específico.
 */

import Image from 'next/image';
import Layout from '@/components/layout';
import { formatearFecha } from '@/utils/helpers';
import styles from '@/styles/blog.module.css';

export default function Post({ post }) {
  const { titulo, contenido, imagen, publishedAt } = post[0].attributes;

  return (
    <>
      <Layout title={`${titulo}`}>
        <article className={`${styles.post} ${styles['mt-3']}`}>
          {/* Imagen del post */}
          <Image
            src={imagen.data.attributes.url}
            width={1000}
            height={500}
            alt={`Imagen blog ${titulo}`}
          />

          <div className={styles.contenido}>
            {/* Detalles del post */}
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </Layout>
    </>
  );
}

// Consultar la API con getServerSideProps
export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`,
  );
  const { data: post } = await respuesta.json();

  return {
    props: { post },
  };
}
