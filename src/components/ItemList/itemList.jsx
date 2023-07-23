<<<<<<< HEAD
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
=======
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
>>>>>>> 639f766c2e6a6f932472f55206d3f8d2caa46c1e
export default ItemList