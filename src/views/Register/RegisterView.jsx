import React from "react";
import RegisterForm from "../../components/forms/RegisterForm";
import "./Register.scss";

const RegisterView = () => {
  const handleRegister = (data) => {
    console.log("Datos de registro:", data);
  };

  return (
    <div className="register-view">
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterView;
