import React, { useState } from "react";
import Button from "./Button";
import PrivacyModal from "./PrivacyModal";
import logo from "../../assets/images/espeL.png";  // Asegúrate de tener el logo importado
import "./RegisterForm.scss";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [cedula, setCedula] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [id, setId] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const validateCedula = (cedula) => {
    const regex = /^\d{10}$/;
    return regex.test(cedula);
  };

  const validateCorreo = (correo) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);
  };

  const handleCedulaChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setCedula(value);
    }
  };

  const handleCorreoChange = (e) => {
    const value = e.target.value;
    setCorreo(value);

    if (!validateCorreo(value)) {
      setErrors({ ...errors, correo: "Por favor ingresa un correo electrónico válido." });
    } else {
      setErrors({ ...errors, correo: "" });
    }
  };

  const handleValidateCedula = async () => {
    if (!validateCedula(cedula)) {
      setErrors({ ...errors, cedula: "La cédula debe ser un número de 10 dígitos." });
      return;
    }

    setLoading(true);
    setSuccessMessage("");

    try {
      const response = await fetch(`http://localhost:3001/persona/${cedula}`);
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Persona no encontrada");

      setNombres(data.nombres);
      setApellidos(data.apellidos);
      setId(data.id);
      setErrors({ ...errors, cedula: "" });
      setSuccessMessage("¡Validación correcta!");
    } catch (error) {
      setErrors({ ...errors, cedula: "No se encontró una persona con esa cédula." });
      setNombres("");
      setApellidos("");
      setId("");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", { cedula, nombres, apellidos, id, correo, contrasena });
  };

  return (
    <div className="form">
      {/* Logo agregado */}
      <div className="logo-container">
        <img src={logo} alt="Logo ESPE" className="register-logo" />
      </div>

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

        <input type="text" placeholder="Nombres" value={nombres} readOnly />
        <input type="text" placeholder="Apellidos" value={apellidos} readOnly />
        <input type="hidden" value={id} />

        <div className="correo-container">
          <input
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={handleCorreoChange}
            className={errors.correo ? "error" : ""}
          />
          {errors.correo && <p className="error-message">{errors.correo}</p>}
        </div>

        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />

        {/* Aviso de privacidad */}
        <div className="terms-container">
          <label className="terms-label">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
            />
            <span>
              He leído y acepto el{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setModalOpen(true);
                }}
                className="bold-black"
              >
                <strong>Aviso de Privacidad</strong>
              </a>.
            </span>
          </label>
        </div>

        <Button type="submit" disabled={!acceptTerms}>
          Registrar
        </Button>
      </form>

      <PrivacyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default RegisterForm;
