import React from "react";
import "./LoginForm.scss";
import Button from "./Button"; // Importa el componente Button

const LoginForm = () => {
  const handleLogin = () => {
    // Lógica para el inicio de sesión
    console.log("Iniciar sesión");
  };

  return (
    <div className="form">
      <h2>INICIAR SESIÓN</h2>
      <input type="text" placeholder="Usuario" />
      <input type="password" placeholder="Contraseña" />
      <div className="options">
        {/* Aquí puedes agregar opciones adicionales si lo deseas */}
      </div>
      <Button onClick={handleLogin}>Ingresar</Button> {/* Usamos el componente Button */}
      <a href="#">¿Olvidaste tu contraseña?</a>
    </div>
  );
};

export default LoginForm;