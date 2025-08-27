import React, { useState } from "react";
import "../styles/App.css";

const Contacto = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3001/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(data => {
        setEnviado(true);
        setForm({ nombre: "", email: "", mensaje: "" });
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="contacto-container">
      <h1>Contacto</h1>
      {enviado && <p className="success">Mensaje enviado correctamente!</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea name="mensaje" placeholder="Mensaje" value={form.mensaje} onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
