import React, { useState } from "react";
import "./LoginForm.scss";

const LoginForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <input
        name="username"
        type="text"
        placeholder="Usuario"
        value={form.username}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;
