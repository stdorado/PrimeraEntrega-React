<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getProductosByCategoria } from '../asyncMocks/data';
import ItemList from '../ItemList/itemList';

function ItemListContainer() {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();

  const fetchProductos = useCallback(async () => {
    try {
      const productos = await getProductosByCategoria(categoriaId);
      setData(productos);
    } catch (error) {
      console.error(error);
    }
  }, [categoriaId]);

  useEffect(() => {
    fetchProductos();
  }, [fetchProductos]);

  const onAdd = (Valor) => {
    console.log('compraste', Valor);
  };

  return (
    <div>
      <ItemList data={data} />
    </div>
  );
}
=======
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getProductosByCategoria } from '../asyncMocks/data';
import ItemList from '../ItemList/itemList';

function ItemListContainer() {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();

  const fetchProductos = useCallback(async () => {
    try {
      const productos = await getProductosByCategoria(categoriaId);
      setData(productos);
    } catch (error) {
      console.error(error);
    }
  }, [categoriaId]);

  useEffect(() => {
    fetchProductos();
  }, [fetchProductos]);

  const onAdd = (Valor) => {
    console.log('compraste', Valor);
  };

  return (
    <div>
      <ItemList data={data} />
    </div>
  );
}
>>>>>>> 639f766c2e6a6f932472f55206d3f8d2caa46c1e
export default ItemListContainer