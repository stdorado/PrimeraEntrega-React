import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/Context';
import CartItem from '../CartItem/CartItem';
import swal from 'sweetalert'; 
import "./Cart.css"

function Cart() {
  const { Cart, vaciarCarro, totalQuantity, EliminarItem } = useContext(CartContext);

  const calcularTotal = () => {
    return Cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  const limpiarCarro = () => {
    swal({
      title: "¿Estás seguro?",
      text: "Si eliminas los productos deberas volver a cargarlos",
      icon: "warning",
      buttons: ["Cancelar", "Limpiar"],
      dangerMode: true,
    }).then((willClear) => {
      if (willClear) {
        vaciarCarro();
        mostrarAlerta(); 
      }
    });
  };

  const mostrarAlerta = () => {
    swal("Carro Vaciado con éxito!", "", "success");
  };

  if (totalQuantity() === 0) {
    return (
      <div className="card positionCart">
        <img src="https://img.freepik.com/vector-gratis/carro-compras-realista_1284-6011.jpg?w=740&t=st=1691781648~exp=1691782248~hmac=02e5d66cbcc528b32df1744ff82a141871d9d5bd4a1ea564697f1503e0e23236" className="card-img-top" alt="Cart Empty" />
        <div className="card-body">
          <h1 className="card-title text-center ">Oops Tu carrito está Vacío</h1>
          <h3 className="card-text text-center">¡No te quedes con las ganas!</h3>
          <Link to="/" className='option'><button className='btn btn-dark positionBotonCompra'>Compra Aquí</button></Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {Cart.map(producto => (
        <CartItem
          key={producto.id} 
          id={producto.id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
          quantity={producto.quantity}
          stock={producto.stock}
          imagen={producto.imagen}
        />
      ))}
      <div className=' PositionTotal '>
        <h3 className='card-title'>Total: ${calcularTotal()} </h3>
        <button onClick={limpiarCarro} className='btn btn-danger espaciado'>Limpiar Carro</button>
        <Link to="/CheckOut"><button className='btn btn-light EspaciadoCompra'>Finalizar Compra</button></Link>
      </div>
    </div>
  );
}

export default Cart;