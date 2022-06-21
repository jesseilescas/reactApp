import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
  return (

      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}  >
            {productos.map(prod => 
                    <div className='p-3'
                    key={prod.id}>
                        <Item producto={prod}/>
                    </div>
                    )}
           
            
      </div>
           
      )
    
  
}


export default ItemList