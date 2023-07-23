<<<<<<< HEAD
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

=======
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

>>>>>>> 639f766c2e6a6f932472f55206d3f8d2caa46c1e
export default ItemDetailContainer;