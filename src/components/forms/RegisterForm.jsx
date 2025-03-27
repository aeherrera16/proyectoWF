import React, { useState } from "react";
import Button from "./Button"; // Suponiendo que ya tienes este componente
import "./RegisterForm.scss";

const RegisterForm = () => {
  // Estados para los campos del formulario
  const [cedula, setCedula] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [id, setId] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  // Estado de los errores
  const [errors, setErrors] = useState({});

  // Función para validar la cédula (10 dígitos y solo números)
  const validateCedula = (cedula) => {
    const regex = /^\d{10}$/; // Expresión regular para 10 dígitos numéricos
    return regex.test(cedula);
  };

  // Manejo de la entrada de la cédula, solo números y máximo 10 caracteres
  const handleCedulaChange = (e) => {
    const value = e.target.value;

    // Solo permitir números y limitar a 10 dígitos
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
    // Aquí puedes manejar el envío del formulario si está todo bien
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
            onChange={handleCedulaChange} // Cambio aquí para aplicar la validación en tiempo real
            className={errors.cedula ? "error" : ""}
          />
          <Button type="button" onClick={handleValidateCedula}>Validar</Button>
        </div>
        {errors.cedula && <p className="error-message">{errors.cedula}</p>} {/* Mensaje de error */}
        
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