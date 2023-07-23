import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';


const ItemDetail = ({ products }) => {
  return (
    <div className="cardInfo">
      <div>
        <img width={300} src={products.imagen} alt="imagen" />
      </div>
      <div className="cardInfoDetails">
        <div>
          <h3 className="cardInfoTitle">{products.nombre}</h3>
          <p className="cardInfoDesc">{products.descripcion}</p>
        </div>
        <div>
          <h5 className="cardInfoPrice">Price: $ {products.precio}</h5>
        </div>
        <ItemCount stock={products.stock} />
      </div>
    </div>
  );
}

export default ItemDetail;