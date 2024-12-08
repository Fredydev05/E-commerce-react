import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import { CarritoContext } from "../Context/CarContext";

function ItemDetail({item}) {

  const {carrito, handAgregar} = useContext(CarritoContext);

  const [ cantidad, setCantidad ] = useState(1);


  const handMinor = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handPlus = () => {
    setCantidad(cantidad + 1)
  }

  return (
    
    <div className="container">
        <div className="producto-detalle">
            <img src={(`.${item.imagen}`)} alt={item.titulo} />
            <div>
                <h3 className="titulo">{item.titulo}</h3>
                <p className="categoria">Categoria: {item.categorias_id}</p>
                <p className="precio">{item.precioMos} Gs.</p>
                <ItemCount cantidad={cantidad} handAgregar={() => handAgregar(item, cantidad)} handMinor={handMinor} handPlus={handPlus}/>
            </div>
        </div>            
    </div>
    
  )
}

export default ItemDetail