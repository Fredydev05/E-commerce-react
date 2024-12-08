import React, { useContext } from 'react'
import { CarritoContext } from '../Context/CarContext'
import { Link } from 'react-router-dom';

function Carrito() {

    const { carrito, carTotal,vaciarCar } = useContext(CarritoContext);

    const handleVaciar = () => {
        vaciarCar();
    }
  return (
    <div className='container'>
        <h1 className='main-title'>Carrito</h1>
        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <h2>{prod.titulo}</h2>
                    <p>Precio unitario: {prod.precio} Gs.</p>
                    <p>Total: {prod.precioMos * prod.cantidad} Gs.</p>
                </div>
            ))
        }
        {carrito.length > 0 ?
            <>
                <h2>Precio total: {carTotal()} Gs.</h2>
                <button onClick={handleVaciar}>Vaciar</button>
                <Link to="/checkout">Finalizar Compra</Link>
            </> : 
            <h2>Your carrito is vacio :(</h2>
            }
    </div>
  )
}

export default Carrito