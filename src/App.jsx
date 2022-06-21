
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {BrowserRouter as Rutas, Routes, Route, Navigate} from 'react-router-dom'



function App() {
  const onAdd = (cant)=>{
    console.log(cant)
  }
  
  return (
    <>
      <Rutas>
        <NavBar/>
        <Routes>
          <Route index path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>

          <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
          <Route path='/carrito' element={<Cart/>} />

          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
          <ItemCount stock={20} initial={1} onAdd={onAdd} />
      </Rutas>
      
    </>
  );
}

export default App;
