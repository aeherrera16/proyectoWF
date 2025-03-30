import React, { useState } from "react";
import Button from "./Button";
import "./RegisterForm.scss";

const RegisterForm = () => {
  const [cedula, setCedula] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [id, setId] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [errors, setErrors] = useState({});

  const validateCedula = (cedula) => {
    const regex = /^\d{10}$/;
    return regex.test(cedula);
  };

  const handleCedulaChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setCedula(value);
    }
  };

  const handleValidateCedula = () => {
    if (!validateCedula(cedula)) {
      setErrors({ ...errors, cedula: "La cédula debe ser un número de 10 dígitos." });
    } else {
      setErrors({ ...errors, cedula: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", { cedula, nombres, apellidos, id, correo, contrasena });
  };

  return (
    <div className="form">
      <h2>REGISTRO</h2>
      <form onSubmit={handleSubmit}>
        <div className="cedula-container">
          <input
            type="text"
            placeholder="Número de cédula"
            value={cedula}
            onChange={handleCedulaChange}
            className={errors.cedula ? "error" : ""}
          />
          <Button type="button" onClick={handleValidateCedula}>Validar</Button>
        </div>
        {errors.cedula && <p className="error-message">{errors.cedula}</p>}
        
        <input
          type="text"
          placeholder="Nombres"
          value={nombres}
          onChange={(e) => setNombres(e.target.value)}
        />
        
        <input
          type="text"
          placeholder="Apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
        />
        
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        
        <Button type="submit">Registrar</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
