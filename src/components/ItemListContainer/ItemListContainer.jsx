import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer(prop) {
    return (
      <>
      <div className='container'>
        <h1>{prop.promocion}</h1>
    </div>
    <div className='container'>
      <ItemCount/>
    </div>
      </>
  )
}

export default ItemListContainer