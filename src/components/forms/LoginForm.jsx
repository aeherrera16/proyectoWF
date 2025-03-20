import React from "react";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <div className="form">
      <h2>INICIAR SESIÓN</h2>
      <input type="usuario" placeholder="Usuario" />
      <input type="contrasena" placeholder="Contraseña" />
      <div className="options">
      </div>
      <button>Ingresar</button>
      <a href="#">¿Olvidaste tu contraseña?</a>
    </div>
  );
};

export default LoginForm;
