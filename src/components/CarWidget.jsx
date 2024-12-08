import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../Context/CarContext'

function CarWidget() {

    const { carQuantity } = useContext(CarritoContext);
  return (
    <div>
        <Link className="menu-link" to="/carrito">
            Carrito
            <span className='number'> {carQuantity()}</span>
        </Link>
    </div>
  )
}

export default CarWidget