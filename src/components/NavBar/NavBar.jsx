
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';
import './NavBar.css'
function NavBar() {
  return (
    <Navbar expand="lg" className='nav-bg' >
    <Container>
    <Navbar.Brand href="#home">Chaparrones</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className='itemsNav' id="basic-navbar-nav">
      
        <Nav.Link className='navLink' href="#home" >Piñatas</Nav.Link>
        <Nav.Link className='navLink' href="#link" >Bolsas de Manta</Nav.Link>
        <Nav.Link className='navLink' href="#link" >Mezcaleros de Peltre</Nav.Link>
        <Nav.Link className='navLink' href="#link" >Articulos de Fiesta</Nav.Link>
      
    </Navbar.Collapse>
        <Nav.Link className='navLink-icon' href='#carrito'> 
        <CartWidget/>
        </Nav.Link>
  </Container>
</Navbar>
  )
}

export default NavBar