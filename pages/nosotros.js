/**
 * Página Nosotros
 * Esta página muestra información sobre la tienda.
 */

import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/nosotros.module.css';

export default function Nosotros() {
  return (
    <>
      <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, tienda de música'}
      >
        <main className='contenedor'>
          {/* Encabezado */}
          <h1 className='heading'>Nosotros</h1>

          <div className={styles.contenido}>
            {/* Imagen */}
            <Image
              src={'/img/nosotros.jpg'}
              width={1000}
              height={800}
              alt='Imagen sobre nosotros'
            />

            <div>
              {/* Párrafos de contenido */}
              <p>
                Suspendisse potenti. Maecenas tincidunt gravida nulla, a euismod
                orci placerat at. Curabitur posuere, felis at varius ornare,
                dolor enim tempor mi, ac tempor purus libero quis libero.
                Vestibulum at libero eu magna hendrerit tempor. Aliquam quis
                pulvinar justo, sit amet venenatis ante. Nunc sed hendrerit
                orci. Donec ut finibus nibh, sed hendrerit dui. Phasellus tempus
                eget nisl quis hendrerit. Curabitur nec elementum tellus.
              </p>
              <p>
                Duis ante magna, suscipit et scelerisque eu, imperdiet vehicula
                quam. Nam vel dui semper, dignissim massa tincidunt, commodo
                leo. Pellentesque ut pulvinar elit. Integer suscipit metus dui,
                in elementum ante vulputate non. Vestibulum ultrices aliquet
                nunc, at mattis massa dictum et. Nullam vehicula pharetra
                gravida. Donec id dolor augue. Nunc lacinia auctor leo, ut
                ornare lectus. Donec at libero dolor.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
