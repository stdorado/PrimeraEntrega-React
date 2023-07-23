<<<<<<< HEAD
import React from 'react'
import "./items.css"
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const Items = ({id,nombre,precio,descripcion,imagen})=> {
  return (
    <article className='targetaProducto'>
    <header className='Productos'>
     <h2 className='tituloProductos'>
      {nombre}
     </h2>
    </header>
    <picture>
      <img src={imagen} alt={nombre} className='ImagenProductos' width={"300px"} />
    </picture>
    <section>
      <p className='DescripcionProducto'> {descripcion} </p>
    </section>
    <section>
      <p className='PrecioProducto'> Precio : {precio} </p>
    </section>
    <footer className='PieProductos'>
    <ItemCount initial={1} stock={5} onAdd={(valor)=> console.log("compraste ")+ valor } />
    <Link to={`/Detalle/${id}`} className='Opciones'>Detalles</Link>
    </footer>
    </article>
  )
}

=======
import React from 'react'
import "./items.css"
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const Items = ({id,nombre,precio,descripcion,imagen})=> {
  return (
    <article className='targetaProducto'>
    <header className='Productos'>
     <h2 className='tituloProductos'>
      {nombre}
     </h2>
    </header>
    <picture>
      <img src={imagen} alt={nombre} className='ImagenProductos' width={"300px"} />
    </picture>
    <section>
      <p className='DescripcionProducto'> {descripcion} </p>
    </section>
    <section>
      <p className='PrecioProducto'> Precio : {precio} </p>
    </section>
    <footer className='PieProductos'>
    <ItemCount initial={1} stock={5} onAdd={(valor)=> console.log("compraste ")+ valor } />
    <Link to={`/Detalle/${id}`} className='Opciones'>Detalles</Link>
    </footer>
    </article>
  )
}

>>>>>>> 639f766c2e6a6f932472f55206d3f8d2caa46c1e
export default Items