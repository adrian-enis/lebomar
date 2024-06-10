import React from 'react'
import LazyLoad from 'react-lazy-load';

const Producto = ({ item, addToCart }) => {

  const { id, image, description, price, name } = item;

  return (
    <>

      <div className="producto">
        <figure>
          <img src={`src/img/${image}`} alt="" />
        
        </figure>
        <div className="detalles-producto">
          <div className="descripcion">
          <p>{name}</p>
            <p>{description}</p>
          </div>
          <div className="precio">
            <span>Precio:{price}</span>
          </div>
          <button className="btn-carrito" type='button  ' onClick={() => addToCart(item)}>Añadir al carrito</button>
        </div>
      </div>


    </>

  )
}

export default Producto