/**
 * Página de producto individual (Guitarras - Router Dinámico)
 * Esta página muestra los detalles de una guitarra específica y permite agregarla al carrito.
 */

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/guitarras.module.css';
import Layout from '@/components/layout';
import { AlertSuccess, AlertError } from '@/components/sweetalert';

export default function Producto({ guitarra, agregarCarrito }) {
  const [cantidad, setCantidad] = useState(0);
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;

  const handleSubmit = e => {
    e.preventDefault();

    if (cantidad < 1) {
      AlertError({
        text: 'Cantidad No Válida',
      });
      return;
    }

    // Construir un objeto con la guitarra seleccionada
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };

    AlertSuccess({
      title: 'Guitarra Agregada Correctamente',
    });

    // Pasar la información al contexto para agregar al carrito
    agregarCarrito(guitarraSeleccionada);
  };

  return (
    <>
      <Layout title={`Guitarra ${nombre}`}>
        <div className={styles.guitarra}>
          {/* Imagen de la guitarra */}
          <Image
            src={imagen.data.attributes.url}
            width={600}
            height={400}
            alt={`Imagen guitarra ${nombre}`}
          />

          <div className={styles.contenido}>
            {/* Detalles de la guitarra */}
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>

            {/* Formulario para agregar al carrito */}
            <form onSubmit={handleSubmit} className={styles.formulario}>
              <label htmlFor='cantidad'>Cantidad:</label>

              <select
                onChange={e => setCantidad(+e.target.value)}
                id='cantidad'
              >
                <option value='0'>-- Seleccione --</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>

              <input type='submit' value='Agregar al Carrito' />
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}

// Obtener los paths para las rutas dinámicas
export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const { data } = await respuesta.json();

  const paths = data.map(guitarra => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Consultar la API con getStaticProps
export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`,
  );
  const { data: guitarra } = await respuesta.json();

  return {
    props: { guitarra },
  };
}

// Consultar API | getServerSideProps
// export async function getServerSideProps({ query: { url } }) {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`,
//   );
//   const { data: guitarra } = await respuesta.json();

//   return {
//     props: { guitarra },
//   };
// }
