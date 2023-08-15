import React from 'react';
import Items from '../Item/Items';
import "./itemList.css"

function ItemList({ data }) {
  const productsByCategory = data.reduce((ProductosAgrupados, product) => {
    if (!ProductosAgrupados[product.categorias]) {
      ProductosAgrupados[product.categorias] = [];
    }
    ProductosAgrupados[product.categorias].push(product);
    return ProductosAgrupados;
  }, {});

  return (
    <div className='Container'>
      {Object.entries(productsByCategory).map(([category, products]) => (
        <div key={category}>
          <h2 className='Texto-alcentro'>{category}</h2>
          {products.map((item) => (
            <Items key={item.id} {...item} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ItemList;