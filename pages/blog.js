/**
 * Página Blog
 * Esta página muestra una lista de publicaciones de blog.
 */

import Layout from '@/components/layout';
import Post from '@/components/post';
import styles from '@/styles/grid.module.css';

export default function Blog({ posts }) {
  return (
    <>
      <Layout title={'Blog'} description={'Blog de música, tienda de música'}>
        <main className='contenedor'>
          {/* Encabezado */}
          <h1 className='heading'>Blog</h1>

          <div className={styles.grid}>
            {/* Renderizar la lista de publicaciones */}
            {posts?.map(post => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

// Consultar API con getStaticProps() - llamado a posts
export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const { data: posts } = await respuesta.json();

  return {
    props: { posts },
  };
}
