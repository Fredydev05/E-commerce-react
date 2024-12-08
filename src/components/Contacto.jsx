import { useForm } from "react-hook-form";

function Contacto() {

    const {register, handleSubmit} = useForm();

    const enviar = (data) => {
        console.log(data);
    } 
  return (
    <div className='container'>
        <h1>Contacto</h1>
        <form action="" className='formulario' onSubmit={handleSubmit(enviar)}>
            <input type="text" name="" id="" placeholder='Nombre...' {...register("nombre")}/>
            <input type="email" placeholder='E-mail' {...register("email")} />
            <input type="phone" placeholder='Telefono...' {...register("telefono")} />
            <button type='submit' className='enviar'>Enviar</button>
        </form>
    </div>
  )
}

export default Contacto