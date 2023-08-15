import React, { useContext, useState } from 'react';
import "./items.css";
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/Context';
import swal from 'sweetalert';

const Items = ({ id, nombre, precio, descripcion, imagen, stock }) => {
  const { AgregarItem } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const handleBuyClick = () => {
    if (count <= stock) {
      AgregarItem({
        id: id,
        nombre: nombre,
        precio: precio,
        imagen: imagen,
        descripcion: descripcion,
        stock: stock
      }, count);

      mostrarAlerta(); 
    }
  };

  const mostrarAlerta = () => {
    swal("Producto agregado al carrito con éxito!", "", "success");
  };

  return (
    <div className='Alinear-productos'>
      <div className="card">
        <img src={imagen} className="card-img" alt={nombre} />
        <div className="card-body">
          <h2 className="card-title">{nombre}</h2>
          <p className='card-text caract'> Caracteristicas: {descripcion}</p>
          <p className='card-text'> Stock Disponible : {stock} </p>
          <p className="card-title"> Valor : ${precio} USD</p>
          <ItemCount initial={1} stock={stock} count={count} setCount={setCount} />
          <button className="btn btn-outline-success comprar" disabled={stock <= 0 || count > stock} onClick={handleBuyClick}>Buy</button>
          <Link to={`/Detalle/${id}`} className='Opciones'>
            <button className='btn btn-outline-dark UbicacionDetalle'>Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Items;