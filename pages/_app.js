import { useState, useEffect } from 'react';
import '@/styles/globals.css';

/**
 * Componente principal de la aplicación.
 * @param {Object} props - Propiedades del componente.
 * @param {React.Component} props.Component - Componente de la página actual.
 * @param {Object} props.pageProps - Propiedades de la página actual.
 * @returns {React.Component} Componente App.
 */
export default function App({ Component, pageProps }) {
  // Carrito LocalStorage
  const carritoLS =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('carrito')) ?? []
      : [];

  // Estado para almacenar el carrito de compras
  const [carrito, setCarrito] = useState(carritoLS);

  // Estado para controlar si la página ha sido completamente renderizada
  const [paginaLista, setPaginaLista] = useState(false);

  // Solucionar Hidratación del LS
  useEffect(() => {
    setPaginaLista(true);
  }, []);

  // Almacenar carrito en el Local Storage
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  /**
   * fn - Agrega un producto al carrito de compras.
   * Si el producto ya existe en el carrito, actualiza la cantidad.
   * @param {Object} guitarra - Producto a agregar al carrito.
   */
  const agregarCarrito = guitarra => {
    if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
      // Actualizar la cantidad del producto existente
      const carritoActualizado = carrito.map(guitarraState => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      setCarrito(carritoActualizado);
      localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
    } else {
      // Agregar el producto nuevo al carrito
      setCarrito([...carrito, guitarra]);
      localStorage.setItem('carrito', JSON.stringify([...carrito, guitarra]));
    }
  };

  /**
   * fn- Elimina un producto del carrito de compras.
   * @param {number} id - ID del producto a eliminar.
   */
  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter(producto => producto.id !== id);
    setCarrito(carritoActualizado);
    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
  };

  /**
   * fn - Actualiza la cantidad de un producto en el carrito de compras.
   * @param {Object} guitarra - Producto a actualizar.
   */
  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map(guitarraState => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = parseInt(guitarra.cantidad);
      }
      return guitarraState;
    });
    setCarrito(carritoActualizado);
    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
  };

  return paginaLista ? (
    <Component
      {...pageProps}
      // Los siguientes props estarán disponibles en todas las páginas
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      eliminarProducto={eliminarProducto}
      actualizarCantidad={actualizarCantidad}
    />
  ) : null;
}
