import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/Context';
import CartItem from '../CartItem/CartItem';

function Cart() {
  const { Cart, vaciarCarro, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity() === 0) {
    return (
      <div>
        <h1>El carro está vacío</h1>
        <Link to="/" className='option'>Compra Aquí</Link>
      </div>
    );
  }

  return (
    <div>
      {Cart.map(productos => (
        <CartItem
          key={productos.id}
          id={productos.id}
          nombre={productos.nombre}
          descripcion={productos.descripcion}
          precio={productos.precio}
          quantity={productos.quantity}
          stock={productos.stock}
        />
      ))}
      <h3>Total: ${total()} </h3>
      <button onClick={() => vaciarCarro()}>Vaciar Carro</button>
      <Link to="/checkout" className='Option'>Checkout</Link>
    </div>
  );
}

export default Cart;