import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const AlertSuccess = ({ title }) => {
  MySwal.fire({
    position: 'top-end',
    icon: 'success',
    title: title || 'Your work has been saved',
    showConfirmButton: false,
    timer: 2000,
  });
};

export const AlertError = ({ text }) => {
  MySwal.fire({
    icon: 'error',
    title: 'Oops...',
    text: text || 'Something went wrong!',
  });
};

// Confirmation Delete, toma la fn eliminarProducto
export const AlertDelete = (eliminarProducto, eliminarProductoId) => {
  MySwal.fire({
    title: '¿Estás seguro?',
    text: '¡No podrás revertir esto!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminarlo',
  }).then(result => {
    if (result.isConfirmed) {
      eliminarProducto(eliminarProductoId);
      Swal.fire('¡Eliminado!', 'Tu producto ha sido eliminado.', 'success');
    }
  });
};
