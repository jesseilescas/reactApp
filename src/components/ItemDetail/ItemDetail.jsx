import React from 'react'

const ItemDetail = ({producto}) => {
  return (
    <div className='container'>
        <div>
        <div className='row'>
            <div className='col-md-6' >
                <img style={{width: '75%'}} src={producto.imagen} alt="" />
            </div>
            <div className='col-md-6 detalle-info'>
                <h1>{producto.nombre}</h1>
                <p>{producto.categoria}</p>
                <h2>Precio $ {producto.precio}</h2>
            </div>
            
        </div>
    </div>

    </div>
  )
}

export default ItemDetail