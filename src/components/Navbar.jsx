import React from 'react'
import { Link } from 'react-router-dom'
import CarWidget from './CarWidget'

function Navbar() {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'><h1>Glow Store</h1></Link>
        <ul className='menu'>
            <li><Link to="/" className="menu-link">Inicio</Link></li>
            <li><Link to="/nosotros" className="menu-link">Nosotros</Link></li>
            <li><Link to="/productos" className="menu-link">Producto</Link></li>
            <li><Link to="/productos/Crops" className="menu-link">Crops</Link></li>
            <li><Link to="/productos/oversides" className="menu-link">Oversides</Link></li>
            <li><Link to="/productos/sudaderas" className="menu-link">Sudaderas</Link></li>
            <li><Link to="/productos/moletones" className="menu-link">Moletones</Link></li>
            <li><Link to="/contacto" className="menu-link">Contacto</Link></li>
            <li><CarWidget/></li>
        </ul>
    </nav>
  )
}

export default Navbar