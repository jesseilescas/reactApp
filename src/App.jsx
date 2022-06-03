import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  const date = new Date()
  const promocion = 'Promoción de hoy: '+ date.toLocaleDateString()
  
  return (
    <>
    <NavBar/>
    <ItemListContainer promocion={promocion}/>
    </>
  );
}

export default App;
