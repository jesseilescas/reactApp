import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import {  getFetchDetail } from '../../data/data'
import {doc, getDoc, getFirestore} from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})

  const {id} = useParams()
  
  // useEffect(()=>{
  //   const db = getFirestore()
  //   const queryItem = doc(db, 'productos', '7XKsGTrYVQfLJfklVGtP')
  //   getDoc(queryItem) // Promesa
  //   .then(resp => setProducto({ id : resp.id, ...resp.data()}))
    
  // }, [])
  // console.log(producto);

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