import React from 'react'
import Items from '../Item/Items'

function ItemList({ data }) {
  return (
    <div className='ContenedorProductos'>
      {data.map((item) => (
        <Items key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ItemList