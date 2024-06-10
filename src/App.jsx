import React, { useEffect, useState } from 'react'
import { db } from './data/data'


import "./styles/App.scss"
import Header from './components/Header'
import SectionHero from './components/SectionHero'
import Producto from './components/Producto'
const App = () => {

  const [menu, setMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const [data, setData] = useState(db)

  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart")
    return localStorageCart ? JSON.parse(localStorageCart) : []
    }
  const [cart, setCart] = useState(initialCart)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const MAX__ITEMS = 5;
  const MIN__ITEMS = 1;


  function addToCart(item) {


    const itemExist = cart.findIndex((prevItem) => prevItem.id === item.id)

    if (itemExist >= 0) {
      console.log("Ya existe")
      if (cart[itemExist].quantity >= MAX__ITEMS) return
      const updateCart = [...cart];
      updateCart[itemExist].quantity++;
      setCart(updateCart)
    } else {
      item.quantity = 1;
      setCart([...cart, item])
      console.log("No existe, agregando...")
    }

  }

  const toggleCart = () => {

    setShowCart(!showCart)
  }

  const toggleMenu = (e) => {
    e.stopPropagation()
    setMenu(!menu)

  }


  const handleClick = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setMenu(false)
  }

  function increaseQuantity(id) {
    const updateCart = cart.map(item => {
      if (item.id === id & item.quantity < MAX__ITEMS
      ) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      } else {
        console.log("Ya agregastes la cantidad maxima")
      }
      return item
    })
    setCart(updateCart)
  }

  function decreaseQuantity(id) {
    const updateCart = cart.map(item2 => {
      if (item2.id === id & item2.quantity > MIN__ITEMS) {
        return {
          ...item2,
          quantity: item2.quantity - 1
        }
      }
      return item2
    })
    setCart(updateCart)
  }

  function removeCart(id) {
    setCart(prev => prev.filter(item => item.id !== id))
    console.log("Eliminando..")
  }


  return (
    <>

      <Header
        menu={menu}
        toggleMenu={toggleMenu}
        handleClick={handleClick}
        showCart={showCart}
        toggleCart={toggleCart}
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeCart={removeCart}

      />

      <SectionHero />

      <section className='section-productos contenedor'>
        <h2 className='title-productos contenedor'>Productos</h2>
        <div className="producto-container">
          {
            data.map((item) => {
              return (
                <Producto item={item} key={item.id} addToCart={addToCart} />
              )
            })
          }
        </div>

      </section>

    </>
  )
}

export default App