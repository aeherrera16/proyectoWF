import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./LoginForm.scss";
import Button from "./Button"; // Importa el componente Button
import logo from "../../assets/images/espeL.png"; // Importa el logo

const LoginForm = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(""); // Para mostrar un mensaje de error
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const handleLogin = () => {
    // Lógica para verificar que los campos no estén vacíos
    if (!usuario || !contraseña) {
      setError("Por favor, ingresa tu usuario y contraseña.");
      return;
    }

    // Lógica para iniciar sesión, si es correcta redirige a Home
    console.log("Iniciar sesión");

    // Simulamos la autenticación (puedes reemplazarla con lógica real)
    setTimeout(() => {
      // Si todo es correcto, redirige a Home
      navigate("/home");
    }, 1000); // Simula una pequeña espera (puedes quitar este setTimeout si no lo necesitas)
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
        onChange={(e) => setUsuario(e.target.value)} // Actualiza el estado
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={contraseña}
        onChange={(e) => setContraseña(e.target.value)} // Actualiza el estado
      />
      <div className="options">
        {/* Aquí puedes agregar opciones adicionales si lo deseas */}
      </div>
      <Button onClick={handleLogin}>Ingresar</Button> {/* Usamos el componente Button */}
      <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>


      {error && <p className="error-message">{error}</p>} {/* Muestra el mensaje de error si es necesario */}
    </div>
  );
};

export default LoginForm;
