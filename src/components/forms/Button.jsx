import React from "react";
import "./Button.scss"; // Puedes poner aquí el estilo para el botón

const Button = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;