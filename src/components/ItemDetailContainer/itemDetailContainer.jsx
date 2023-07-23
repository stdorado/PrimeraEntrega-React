import React, { useState, useEffect } from 'react';
import ItemDetail from './itemDetailContainer'; 
import { getProductosById } from '../asyncMocks/data'; 
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductosById(itemId)
      .then((result) => {
        setProduct(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [itemId]);

  return (
    <div className="itemDetailContainer">
      {product ? <ItemDetail products={product} /> : <p>Loading...</p>}
    </div>
  );
}

export default ItemDetailContainer;