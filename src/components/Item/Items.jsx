import React, { useContext, useState } from 'react';
import "./items.css";
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/Context';

const Items = ({ id, nombre, precio, descripcion, imagen, stock }) => {
  const { AgregarItem } = useContext(CartContext);
  const [count, setCount] = useState(1); // Maneja el estado local de Count

  const handleBuyClick = () => {
    AgregarItem({
      id: id,
      nombre: nombre,
      precio: precio,
      imagen: imagen,
      descripcion: descripcion
    }, count);
  };

  return (
    <div className='Alinear-productos'>
      <div class="card" >
        <img src={imagen} class="card-img" alt={nombre} />
        <div class="card-body">
          <h2 class="card-title">{nombre}</h2>
          <h5 className='card-title'>{descripcion}</h5>
          <p class="card-text"> ${precio}</p>
          <ItemCount initial={1} stock={stock} setCount={setCount} />
          <button className="btn btn-success comprar" disabled={stock <= 0} onClick={handleBuyClick}>Buy</button>
          <Link to={`/Detalle/${id}`} className='Opciones'>
            <button className='btn bg-white btn-black text-center'>Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Items;