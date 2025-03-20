import React, { useState } from "react";
import "./RegisterForm.scss";

const RegisterForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    cedula: "",
    firstName: "",
    lastName: "",
    adminId: "ADM001", // Valor fijo simulado
    password: "",
  });

  const handleCedulaBlur = () => {
    if (form.cedula === "12345678") {
      setForm({ ...form, firstName: "Juan", lastName: "Pérez" });
    } else {
      setForm({ ...form, firstName: "", lastName: "" });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Registrarse</h2>
      <input
        name="cedula"
        type="text"
        placeholder="Cédula"
        value={form.cedula}
        onChange={handleChange}
        onBlur={handleCedulaBlur}
      />
      <input
        name="firstName"
        type="text"
        placeholder="Nombres"
        value={form.firstName}
        onChange={handleChange}
      />
      <input
        name="lastName"
        type="text"
        placeholder="Apellidos"
        value={form.lastName}
        onChange={handleChange}
      />
      <input
        name="adminId"
        type="text"
        placeholder="ID"
        value={form.adminId}
        readOnly
      />
      <input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
      />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterForm;
