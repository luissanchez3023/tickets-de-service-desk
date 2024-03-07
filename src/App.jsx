import  { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("name");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [data, setTickets] = useState("");

  useEffect(() => {
    fetch("http://localhost:5173/tickets")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);
      });
  }, []);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangePriority = (event) => {
    setPriority(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };


  const onsubmitForm = (event) => {
    event.preventDefault();
    if (name.length < 6) {
      alert("El nombre debe tener al menos 6 caracteres");
    } else if (name.length > 18) {
      alert("El nombre tiene más de 18 caracteres");
    } else {
      console.log("Datos del Ticket:", { name, priority, description, data });
    }
    if (description.length > 30) {
      alert("La descripcion supera el limite de caracteres, escribe algo más corto");
    }
  };

  return (
    <form className="formulario" onSubmit={onsubmitForm}>
      <h1>Tickets De Service Desk</h1>
      <label>
        Titulo del Ticket:
        <input type="text" placeholder="Ingrese el nombre del ticket: " onChange={onChangeName} />
      </label>
      <label>
        Prioridad:
        <select value={priority} onChange={onChangePriority}>
          <option value="">Seleccionar</option>
          <option value="baja">1</option>
          <option value="media">2</option>
          <option value="alta">3</option>
          <option value="alta">4</option>
        </select>
      </label>
      <label>
        Descripcion:
        <textarea className="descripcion" name="descripcion" onChange={onChangeDescription} value={description}></textarea>
      </label>
      
      <button type="submit" value="enviar">
        Enviar
      </button>
    </form>

  );
}

export default App;
