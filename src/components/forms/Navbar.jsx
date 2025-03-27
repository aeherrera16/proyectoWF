import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/images/espe.jpeg";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login"); // Redirige al AuthForm.jsx (Login)
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo ESPE" className="logo-image" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
        <li>
          <button onClick={handleLogout} className="logout-button">
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
