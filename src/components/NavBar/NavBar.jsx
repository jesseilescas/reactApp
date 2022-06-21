
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import logo from '../../images/logo.png'
import { Link, NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <Navbar expand="lg" className='nav-bg' >
    <Container>
    <img src={logo} alt="" />
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className='itemsNav' id="basic-navbar-nav">
      
        <NavLink className='navLink' to='/' >Inicio</NavLink>
        <NavLink className='navLink' to='/categoria/manta'>Bolsas de Manta</NavLink>
        <NavLink className='navLink' to='categoria/piñata'>Piñatas</NavLink>
        
      
    </Navbar.Collapse>
        <Link className='navLink-icon' to='/carrito'>
        <CartWidget/>
        </Link>
  </Container>
</Navbar>
  )
}

export default NavBar