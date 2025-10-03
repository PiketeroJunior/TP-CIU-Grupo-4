import React from 'react';

export default function Contacto() {
  // const [nombre, setNombre] = React.useState("")
  // const [email, setEmail] = React.useState("");
  // const navigate = navigate();

  const [formulario, setFormulario] = React.useState({
    nombre: "",
    email: "",
  })

  const [error, setError] = React.useState("");
  const [enviado, setEnviado] = React.useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value //Accedo al valor de la variable name (nombre o email) y le asigno el value
    })
  }

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (!formulario.nombre.trim()){
      setError("El nombre es obligatorio");
      setEnviado(false);
      return;
    }

    if (!formulario.email.includes("@")){
      setError("El email debe ser válido");
      setEnviado(false);
      return;
    }

    setError("");
    setEnviado(true);

    console.log("Datos enviados: ", formulario);
  }

  //Podemos probar lo de llevar a una pagina de formulario exitoso
  return (
    <form onSubmit={manejarSubmit}>
      <label>Nombre:</label>
      <input type="text" name="nombre" value={formulario.nombre} onChange={manejarCambio}/>
      <label>Email:</label>
      <input type="email" name="email" value={formulario.email} onChange={manejarCambio}/>
      <button type="submit">Enviar</button>
      { error && <p style={{color: "red"}}>{error}</p> }
      { enviado && <p style={{color: "green"}}>Formulario enviado con éxito</p> }
    </form>
  )
}
