import {  createContext, useEffect, useState } from "react";


export const CarritoContext = createContext();

const carStorage = JSON.parse(localStorage.getItem("carrito")) || [];

export const CarProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carStorage);

    const handAgregar = (item, cantidad) => {
      const itemAgregado = {...item, cantidad};
  
      const nuevoCarrito = [...carrito];
      const IsOnCar = nuevoCarrito.find((producto) => producto.id === itemAgregado.id) 
  
      if(IsOnCar){
        IsOnCar.cantidad += cantidad;
      }else{
        nuevoCarrito.push(itemAgregado);
      }
      setCarrito(nuevoCarrito);
    }
  
    const carQuantity = () => {
      return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }
  
    const carTotal = () => {
      return carrito.reduce((acc, prod) => acc + prod.precioMos * prod.cantidad, 0);
    }
  
    const vaciarCar = () => {
      setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])

    return (
      <CarritoContext.Provider value={{carrito, handAgregar, carQuantity, carTotal, vaciarCar}}>
        {children}
      </CarritoContext.Provider>
    )
}