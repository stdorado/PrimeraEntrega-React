import React, { useContext } from 'react';
import { CartContext } from '../../Context/Context';

function CartItem({ id, nombre, descripcion, quantity, precio, stock }) {
  const { EliminarItem } = useContext(CartContext);

  const eliminarProducto = () => {
    EliminarItem(id);
  };

  return (
    <div className="cart-item">
      <div>
        <h4>{nombre}</h4>
        <p>Descripción: {descripcion}</p>
        <p>Cantidad: {quantity}</p>
        <p>Precio Unitario: ${precio}</p>
        <p>Total: ${precio * quantity}</p>
        <p>Stock Disponible: {stock}</p>
        <button onClick={eliminarProducto}>Eliminar</button>
      </div>
    </div>
  );
}

export default CartItem;



