import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import {useState} from 'react'

function ItemCount() {
  const stock = 5
  const [contador, setContador] = useState(0)

 function agregarCantidad() {
        if (contador>=stock) {
          console.log('no hay mas productos');
          } else {
          setContador(contador+1)
          
          
        }
 }
 function quitarCantidad() {
        if (contador <= 0 ) {
          console.log('no se puede');
        } else {
          setContador(contador-1)
        }

    
}
  return (
    <div>
        <Card style={{ width: '25rem' }} className='text-center'>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>Piñata Pinocho</Card.Title>
                <Card.Footer>Inventario:{stock}</Card.Footer>
                <Card.Text>
                Descripcion del Producto
                </Card.Text>
                <InputGroup className='justify-content-between'>
                  <Button id='minusButton' variant="outline-primary" onClick={quitarCantidad}>-</Button>
                    <Form.Label style={{ width: '18rem' }}>{contador}</Form.Label>   
                  <Button id='plusButton' onClick={agregarCantidad} variant="outline-primary">+</Button>
                </InputGroup>
            </Card.Body>
            </Card>
    </div>
    
  )
}

export default ItemCount