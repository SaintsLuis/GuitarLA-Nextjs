/**
 * Page Carrito
 * Esta página muestra el contenido del carrito de compras, la lista de productos seleccionados,
 * la cantidad, el precio subtotal y el total a pagar.
 */

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/carrito.module.css';
import { AlertDelete } from '@/components/sweetalert';

export default function Carrito({
  carrito,
  actualizarCantidad,
  eliminarProducto,
}) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0,
    );
    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <>
      <Layout title='Carrito de Compras'>
        <main className='contenedor'>
          <h1 className='heading'>Carrito</h1>

          <div className={styles.contenido}>
            <div className={styles.carrito}>
              <h2>Articulos</h2>

              {carrito.length === 0
                ? 'Carrito Vacio'
                : carrito.map(producto => (
                    <div key={producto.id} className={styles.producto}>
                      <div>
                        <Image
                          width={250}
                          height={480}
                          src={producto.imagen}
                          alt={producto.nombre}
                        />
                      </div>
                      <div>
                        <p className={styles.nombre}>{producto.nombre}</p>

                        <div className={styles.cantidad}>
                          <p>Cantidad:</p>
                          <select
                            className={styles.select}
                            onChange={e =>
                              actualizarCantidad({
                                id: producto.id,
                                cantidad: e.target.value,
                              })
                            }
                            value={producto.cantidad}
                          >
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                          </select>
                        </div>

                        <p className={styles.precio}>
                          $<span>{producto.precio}</span>
                        </p>
                        <p className={styles.subtotal}>
                          Subtotal: $
                          <span>{producto.cantidad * producto.precio}</span>
                        </p>
                      </div>

                      <button
                        className={styles.eliminar}
                        type='button'
                        onClick={() =>
                          AlertDelete(eliminarProducto, producto.id)
                        }
                      >
                        <svg
                          className='icon icon-tabler icon-tabler-trash'
                          width='30'
                          height='30'
                          fill='none'
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M0 0h24v24H0z' fill='none' stroke='none' />
                          <path d='m4 7h16' />
                          <path d='m10 11v6' />
                          <path d='m14 11v6' />
                          <path d='m5 7 1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12' />
                          <path d='m9 7v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3' />
                        </svg>
                      </button>
                    </div>
                  ))}
            </div>

            <aside className={styles.resumen}>
              <h3>Resumen del Pedido</h3>
              <p>Total a pagar: ${total}</p>
            </aside>
          </div>
        </main>
      </Layout>
    </>
  );
}
