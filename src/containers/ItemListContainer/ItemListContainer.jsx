import React from 'react'
import {useState, useEffect} from 'react'
import {getFetch} from '../../data/data'
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'


function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [cargando, setCarga ] = useState(true)
  const { categoriaId} = useParams()

  useEffect(()=>{
    if (categoriaId) {
      getFetch()
      .then((resp) =>{
        setProductos(resp.filter(producto => producto.categoria === categoriaId))
        setCarga(false)
      })
      .catch(err=>console.log(err))
    } else {
      getFetch()
      .then((resp) =>{
        setProductos(resp)
        setCarga(false)
      })
      .catch(err=>console.log(err))
      
    }
  },[categoriaId])
  
  
    return (
      <>
      { cargando ?
        <div className='container spin-container'>
          <div className="spinner-grow spinner" style={{width: '10rem', height: '10rem'}} role="status">
          </div>
        </div>
        :
        <ItemList productos={productos}/>
        
        

      }
     </>
  )
}

export default ItemListContainer