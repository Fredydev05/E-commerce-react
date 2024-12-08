import { useContext, useState } from "react";
import { CarritoContext } from "../Context/CarContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function Checkout() {

    const [pedidoId, setPedidoId] = useState("");
    const { carrito, carTotal, vaciarCar } = useContext(CarritoContext);
    const {register, handleSubmit} = useForm();

  const comprar = (data) => {
      const pedido = {
        cliente: data,
        productos: carrito,
        total: carTotal()
      }
      
      const pedidoRef = collection(db, "pedidos");

      addDoc(pedidoRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            vaciarCar();
        })
  }

  if(pedidoId){
    return (
        <div className="container">
            <h1 className="main-title">Muchas gracias por tu compra :)</h1>
            <p>Tu numero de pedido es: {pedidoId}</p>
        </div>
    )
  }

  return (
    <div className="container">
      <h1>Finalizar la Compra</h1>
      <form action="" className="formulario" onSubmit={handleSubmit(comprar)}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Nombre..."
          {...register("nombre")}
        />
        <input type="email" placeholder="E-mail" {...register("email")} />
        <input
          type="phone"
          placeholder="Telefono..."
          {...register("telefono")}
        />
        <button type="submit" className="enviar">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Checkout;
