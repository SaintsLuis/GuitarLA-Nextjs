/**
 * Página de inicio (Index - Home)
 * Esta página muestra la colección de guitarras, publicaciones de blog y un curso.
 */

import Layout from '@/components/layout';
import Guitarra from '@/components/guitarra';
import Post from '@/components/post';
import Curso from '@/components/curso';
import styles from '@/styles/grid.module.css';

export default function Home({ guitarras, posts, curso }) {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de música, venta de guitarras y más'}
      >
        <main className='contenedor'>
          {/* Encabezado */}
          <h1 className='heading'>Nuestra Colección</h1>

          <div className={styles.grid}>
            {/* Renderizar la lista de guitarras */}
            {guitarras?.map(guitarra => (
              <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
            ))}
          </div>
        </main>

        {/* Renderizar el componente de Curso */}
        <Curso curso={curso} />

        <section className='contenedor'>
          {/* Encabezado de la sección de blog */}
          <h2 className='heading'>Blog</h2>

          <div className={styles.grid}>
            {/* Renderizar la lista de publicaciones */}
            {posts?.map(post => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

// Consultar API con getStaticProps
export async function getStaticProps() {
  // URL de los diferentes endpoints a consultar
  const urlGuitarra = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;

  // Consultar los endpoints en paralelo utilizando Promise.all
  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarra),
    fetch(urlPosts),
    fetch(urlCurso),
  ]);

  // Obtener los datos de respuesta en formato JSON
  const [{ data: guitarras }, { data: posts }, { data: curso }] =
    await Promise.all([resGuitarras.json(), resPosts.json(), resCurso.json()]);

  return {
    props: {
      guitarras,
      posts,
      curso,
    },
  };
}
