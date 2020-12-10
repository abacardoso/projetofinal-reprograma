import React from "react";
import { useForm } from "react-hook-form";
import "../Styles/Components/formulario.css"

const Formulario = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <aside className="formulario__aside">
     <h2>Deseja contribuir com nosso site?</h2>
     <p>É fácil, só preencher os campos abaixo e nos enviar alguma dica que você usa e acha que todo mundo também deve conhecer!</p>
     <form onSubmit={handleSubmit(onSubmit)}>
     <label>Nome:</label>
     <input type="text" name="nome" ref={register({ required: true })} /> {errors.firstName && "First name is required"}

     <label>E-mail:</label>
      <input type="email" name="email" ref={register({ required: true })} /> {errors.firstName && "First name is required"}

     <label>Mensagem:</label>
     <input type="text" name="mensagem" ref={register({ min: 20 , max: 300 })} /> {errors.firstName && "First name is required"}

      <input type="submit" />
     </form>
    </aside>
  )
}

export default Formulario