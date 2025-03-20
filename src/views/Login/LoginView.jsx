import React from "react";
import LoginForm from "../../components/forms/LoginForm";
import "./Login.scss";

const LoginView = () => {
  const handleLogin = (data) => {
    console.log("Datos de login:", data);
  };

  return (
    <div className="login-view">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginView;
