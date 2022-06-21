import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    
    
  return (
    <div className="card text-center" style={{width: '18rem'}}>
        <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <img className="card-img-top" src={producto.imagen} alt=""></img>
            <Link to={`/detalle/${producto.id}`}>
            <button className='btn btn-outline-primary w-100'>Detalles</button>
            </Link>
        </div>
    </div>
    
  )
}

export default Item