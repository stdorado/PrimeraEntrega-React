import React from 'react';
import { Link } from 'react-router-dom';
import "./ItemDetail.css"

function ItemDetail({ id, imagen, nombre, descripcion, precio, stock }) {
  return (
    <div className="card cardPosition">
      <img src={imagen} className="card-img-top " alt={nombre}/>
      <div className="card-body">
        <h2 className="card-title">{nombre}</h2>
        <h5 className='card-title'> Valor : ${precio} USD</h5>
        <p className="card-text"> Caracteristicas del Producto: {descripcion}</p>
        <p className='card-text'>ID del producto{id}</p>
        <p className='card-text'>Stock Disponible : {stock} </p>
        <Link to='/'><button className='btn btn-dark positionBotonMas'>Ver otros Productos</button></Link>
      </div>
    </div>
  );
}

export default ItemDetail;