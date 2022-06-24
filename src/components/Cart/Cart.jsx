import React from 'react'
import { useCartContext } from '../../context/CartContext'


const Cart = () => {
  const { cart} = useCartContext ()
    return (
        <div>
          <ul>
            {
              cart.map(item => <li key={item.id}>{item.nombre}</li>)
            }
          </ul>
        </div>
    )
}

export default Cart