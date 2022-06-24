import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext, useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
  //Context
  const {cart, addToCart} = useCartContext()
  //Estado Boton
  const [btnState, setBtnState] = useState ('button')
  //Añadir al Carrito
  const onAdd = (cant)=>{
    console.log(cant);
    setBtnState('input')
    addToCart({...producto, cantidad: cant})
  }
  console.log(cart);
  
  const BotonContador =({añadir})=>{
    return(
        <div className='container'>
              <div>
                <div className='row'>
                    <div className='col-md-6' style={{display: 'flex', justifyContent: 'center'}} >
                        <img style={{width: '75%'}} src={producto.imagen} alt="" />
                    </div>
                    <div className='col-md-6 detalle-info'>
                        <h1>{producto.nombre}</h1>
                        <p className='text-uppercase'>{producto.categoria}</p>
                        <h2>Precio $ {producto.precio}</h2>
                        <ItemCount stock={20} initial={1} onAdd={añadir} />
                    </div>
                </div>
              </div>
        </div>
          )}
  const SeguirComprando = ()=>{
    return(
      <div className='container'>
              <div>
                <div className='row'>
                    <div className='col-md-6' style={{display: 'flex', justifyContent: 'center'}} >
                    <img style={{width: '75%'}} src={producto.imagen} alt="" />
                    </div>
                    <div className='col-md-6 detalle-info'>
                    <h1 style={{color: 'green', textAlign: 'center'}}>Se agregó al carrito</h1>
                      <NavLink to='/carrito'>
                        <button className='btn btn-outline-primary mb-2'>Ir al Carrito</button>
                      </NavLink>
                      <NavLink to='/'>
                        <button className='btn btn-outline-primary w100'>Seguir Comprando</button>
                      </NavLink>
                    </div>
                </div>
              </div>
        </div>
  )}



  return (
    <div>
      {
        btnState === 'button' ?
            <BotonContador añadir={onAdd}/>
        :
            <SeguirComprando/>
      }
    </div>
  )
}

export default ItemDetail