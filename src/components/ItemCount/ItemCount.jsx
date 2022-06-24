import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import {useState} from 'react'

function ItemCount({initial, stock, onAdd}) {
  const [contador, setContador] = useState(initial)

          function agregarCantidad() {
                  if (contador>=stock) {
                    } else {
                    setContador(contador+1)
                    
                    
                  }
          }
          function quitarCantidad() {
                  if (contador <= initial ) {
                  } else {
                    setContador(contador-1)
                  }

              
          }
          const agregar= ()=>{
            onAdd(contador)
}
  return (
    <div>
        <Card style={{ width: '25rem', marginTop: '2rem' }} className='text-center'>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <InputGroup className='justify-content-between'>
                  <Button id='minusButton' variant="outline-primary" onClick={quitarCantidad}>-</Button>
                    <Form.Label style={{ width: '18rem' }}>{contador}</Form.Label>   
                  <Button id='plusButton' onClick={agregarCantidad} variant="outline-primary">+</Button>
                </InputGroup>
                <Button id='plusButton' onClick={agregar} variant="outline-primary">Agregar al Carrito</Button>
            </Card.Body>
            </Card>
    </div>
    
  )
}

export default ItemCount