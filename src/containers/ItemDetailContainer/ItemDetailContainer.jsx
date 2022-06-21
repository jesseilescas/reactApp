import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import {  getFetchDetail } from '../../data/data'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})

  const {id} = useParams()
  

  useEffect(() => {
    getFetchDetail(id)
    .then((resp)=> setProducto(resp))
    .catch(err =>console.log(err))

  }, [])
  
  return (
    
    <ItemDetail producto ={producto}/>
  )
}

export default ItemDetailContainer