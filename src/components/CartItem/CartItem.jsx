import React, { useContext } from 'react';
import { CartContext } from '../../Context/Context';
import "./Cartitem.css";
import swal from 'sweetalert'; 

function CartItem({ id, nombre, descripcion, quantity, precio, imagen, stock }) {
  const { EliminarItem } = useContext(CartContext);

  const eliminarProducto = () => {
    swal({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar este producto.",
      icon: "warning",
      buttons: ["Cancelar", "Eliminar"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        EliminarItem(id);
        mostrarAlerta();
      }
    });
  };

  const precioTotalProducto = (precio * quantity).toFixed(2);

  const mostrarAlerta = () => {
    swal("Producto eliminado con éxito!", "", "success");
  };

  return (
    <div className="card disposicion">
      <img src={imagen} className="card-img-top CartImage" alt={nombre} />
      <div className="card-body">
        <h4 className="card-title">{nombre}</h4>
        <h5 className="card-text">{quantity}</h5>
        <h6 className='card-title'> {descripcion} </h6>
        <p className='card-text'> Stock Disponible: {stock} </p>
        <p className='card-text'>Precio pieza Individual: {precio}</p>
        <p className='card-text'>Precio Final: ${precioTotalProducto}</p>
        <button onClick={eliminarProducto} className='btn btn-danger Delete' disabled={quantity === stock}>Eliminar Producto</button>
      </div>
    </div>
  );
}

export default CartItem;