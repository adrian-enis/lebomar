import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import logoLegomar from "../img/logo-lebomar.png"
import { useMemo } from 'react';
import mini_1 from "../img/mini_01.jpg"



const Header = ({ menu, toggleMenu, handleClick, showCart, toggleCart, cart, increaseQuantity, decreaseQuantity, removeCart }) => {
  const isEmpty = useMemo(() => cart.length === 0, [cart])
  const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])
  return (
    <>
      <header className="header">

        <div className="wrapper">
          <p>¿Eres contribuyente especial?<span>¡Haz click aqui!</span> </p>
        </div>

        <div className="wrapper-elements contenedor">
          <div className="header-logo">
            <img src={logoLegomar} alt="logotipo lebomar" className='logo' />
          </div>

          <div className='wrapper-cart' type="button" onClick={toggleCart} >
            <div className="cart">

              <span><i className="bi bi-cart"></i></span>
              <span>${cartTotal}</span>
            </div>

          </div>
          <div className={`display-cart ${showCart ? "is-Active2" : ""}`}>
            <i className="cart-close bi bi-x-square" onClick={toggleCart}></i>
            {
              isEmpty ? (
                <h2>El carrito esta vacio</h2>
              ) : (

                <>


                  {cart.map((prevItem) => (


                    <div key={prevItem.id}>
                      <div className="producto">
                        <img className='img-producto' src={`src/img/${prevItem.image}`} alt="producto" />
                        <p>{prevItem.description}</p>

                      </div>

                      <div className='cantidad'>

                        <button type='button' onClick={() => decreaseQuantity(prevItem.id)}>
                          -
                        </button>
                        <span>{prevItem.quantity}</span>
                        <button type='button' onClick={() => increaseQuantity(prevItem.id)}>+</button>
                        <button type='button' onClick={() => removeCart(prevItem.id)}>x</button>
                      </div>
                      <button className='pedido-finalizado'>Finalizar pedido</button>

                      <div className="subTotal">
                        <h3>Total a pagar:</h3>
                        <span> ${cartTotal}</span>
                      </div>
                      <hr className='separador' />
                    </div>

                  ))}
                </>
              )
            }


          </div>

          <form className="search-container">
            <input type="search" placeholder="Buscar..." className="search-input" />
            <button type='button'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="search-icon">
                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>

            </button>
          </form>

          <button className={`hamburger hamburger--collapse ${menu ? "is-active" : ""}`} onClick={toggleMenu} type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <nav className={`nav ${menu ? "is-Active" : ""}`}>

          <a href="" onClick={handleClick}>Inicio</a>
          <a href="" onClick={handleClick}>Inicio</a>
          <a href="" onClick={handleClick}>Inicio</a>
          <a href="" onClick={handleClick}>Inicio</a>
          <a href="" onClick={handleClick}>Inicio</a>

        </nav>
      </header>
    </>
  )
}

export default Header