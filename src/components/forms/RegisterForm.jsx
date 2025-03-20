import React from "react";
import "./RegisterForm.scss";

const RegisterForm = () => {
  return (
    <div className="form">
      <h2>REGISTRO</h2>
      <input type="cedula" placeholder="Número de cédula" />
      <input type="nombres" placeholder="Nombres" />
      <input type="apellidos" placeholder="Apellidos" />
      <input type="ID" placeholder="ID" />
      <input type="correo" placeholder="Correo" />
      <input type="contrasena" placeholder="Constraseña" />
      <button>Register</button>
    </div>
  );
};

export default RegisterForm;
