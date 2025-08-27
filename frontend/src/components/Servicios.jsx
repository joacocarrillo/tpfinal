import React from "react";
import "../styles/App.css";

const Servicios = () => {
  return (
    <div className="servicios-container">
      <h1>Servicios</h1>
      <div className="servicios-grid">
        <div className="servicio-card">
          <h2>Asesoramiento</h2>
          <p>Te ayudamos a elegir el mejor equipamiento.</p>
        </div>
        <div className="servicio-card">
          <h2>Envios</h2>
          <p>Rápidos y seguros a toda la ciudad.</p>
        </div>
        <div className="servicio-card">
          <h2>Soporte</h2>
          <p>Atención personalizada en todo momento.</p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
