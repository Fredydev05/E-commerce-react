import React from 'react'

function ItemCount({handPlus, handMinor, cantidad, handAgregar}) {

  return (
    <div>
        <div className="item-count">
            <button onClick={handMinor}>-</button>
            <p>{cantidad}</p>
            <button onClick={handPlus}>+</button>
        </div>
        <button className="agregar-al-carrito" onClick={handAgregar}>
                Agregar al carriño
        </button>
    </div>
  )
}

export default ItemCount