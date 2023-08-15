import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductData } from '../../Services/Firebase';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductData(itemId);
        setSelectedProduct(product);
      } catch (error) { 
      }
    };

    fetchProduct();
  }, [itemId]);

  if (selectedProduct) {
    return (
      <div>
        <ItemDetail
          id={selectedProduct.id}
          imagen={selectedProduct.imagen}
          nombre={selectedProduct.nombre}
          descripcion={selectedProduct.descripcion}
          precio={parseFloat(selectedProduct.precio)} 
          stock={selectedProduct.stock}
        />
      </div>
    );
  } else {
    return <p>No se Encontro ningun Producto</p>;
  }
}

export default ItemDetailContainer;