import React, { useState } from "react";
import "./AuthForm.scss";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className={`auth-box ${isLogin ? "login-mode" : "register-mode"}`}>
        <div className="side-panel">
          <h2>{isLogin ? "¿Aún no tienes cuenta?" : "¿Ya tienes cuenta?"}</h2>
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "REGISTRARSE" : "INICIAR SESIÓN"}
          </button>
        </div>
        <div className="form-container">
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
