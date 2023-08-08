import React, { useContext, useState } from 'react';
import "./ItemDetail.css"
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/Context';


const ItemDetail = ({ id,imagen,nombre,descripcion,precio,stock }) => {
  const [quantityAded, setquantityAded] = useState(0)

  const {AgregarItem} = useContext(CartContext)

  const handleOnAdd = (quantity) =>{
    setquantityAded(quantity)

    const item ={
     id, nombre,precio,imagen
    }
AgregarItem(item,quantity)
  }
  return (
    <div className="cardInfo">
      <div>
        <img width={300} src={imagen} alt="imagen" />
      </div>
      <div className="cardInfoDetails">
        <div>
          <h3 className="cardInfoTitle">{nombre}</h3>
          <p className="cardInfoDesc">{descripcion}</p>
        </div>
        <div>
          <h5 className="cardInfoPrice">Price: $ {precio}</h5>
        </div>
        <ItemCount  initial={1} stock={stock}/>
      </div>
    </div>
  );
}

export default ItemDetail;