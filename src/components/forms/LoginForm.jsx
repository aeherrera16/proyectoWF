import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.scss";
import Button from "./Button";
import logo from "../../assets/images/espeL.png";

const LoginForm = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!usuario || !contraseña) {
      setError("Por favor, ingresa tu usuario y contraseña.");
      return;
    }

    console.log("Iniciar sesión");

    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <div className="form">
      <div className="logo-container">
        <img src={logo} alt="Logo ESPE" className="login-logo" />
      </div>
      <h2>INICIAR SESIÓN</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={contraseña}
        onChange={(e) => setContraseña(e.target.value)}
      />
      <div className="options"></div>
      <Button onClick={handleLogin}>Ingresar</Button>
      <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default LoginForm;
