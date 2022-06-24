
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {BrowserRouter as Rutas, Routes, Route, Navigate} from 'react-router-dom'
import {  CartContextProvider } from './context/CartContext';



function App() {

  return (
  <>
    <CartContextProvider>
      <Rutas>
        <NavBar/>
        <Routes>
          <Route index path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
          <Route path='/carrito' element={<Cart/>} />
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </Rutas>
    </CartContextProvider>
  </>
  );
}

export default App;
