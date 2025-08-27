import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">UTN Deportes</h1>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
