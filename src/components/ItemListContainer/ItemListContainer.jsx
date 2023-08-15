import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory, getAllProducts } from '../../Services/Firebase'; 
import ItemList from '../ItemList/itemList';

function ItemListContainer() {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();

  const fetchProductos = useCallback(async () => {
    try {
      let productos = [];

      if (categoriaId) {
        productos = await getProductsByCategory(categoriaId);
      } else {
        productos = await getAllProducts();
      }

      setData(productos);
    } catch (error) {
      console.error(error);
    }
  }, [categoriaId]);

  useEffect(() => {
    fetchProductos();
  }, [fetchProductos]);

  const onAdd = (Valor) => {
    //agregar Alerta de compraste
    console.log('compraste', Valor);
  };

  return (
    <div>
      <ItemList data={data} />
    </div>
  );
}

export default ItemListContainer;