import React from "react";
import "../styles/App.css";

const Inicio = () => {
  return (
    <div className="inicio-container">
      <div className="hero">
        <h1>Bienvenidos a UTN Deportes</h1>
        <p>Todo lo que necesitás para tus deportes favoritos.</p>
      </div>
      <div className="features">
        <div className="feature">
          <h2>Calidad</h2>
          <p>Productos duraderos y confiables.</p>
        </div>
        <div className="feature">
          <h2>Variedad</h2>
          <p>Fútbol, básquet, running y más.</p>
        </div>
        <div className="feature">
          <h2>Precios</h2>
          <p>Accesibles para todos los deportistas.</p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
