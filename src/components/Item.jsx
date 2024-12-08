import { Link } from "react-router-dom"

function Item({producto}) {
  return (
    <div>
        <div className="producto">
            <img src={(`.${producto.imagen}`)} alt={producto.titulo} />
            <div>
                <h4>{producto.titulo}</h4>
                <p>Precio: {producto.precio} Gs.</p>
                <p>Categoria: {producto.categorias_id}</p>
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
            </div>
        </div>
    </div>
  )
}

export default Item