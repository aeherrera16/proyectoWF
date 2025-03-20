import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/main.scss"; // Estilos globales

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <header className="main-header" style={{ padding: "1rem", background: "#282c34", color: "#fff" }}>
        <nav>
          <Link to="/" style={{ color: "#fff", marginRight: "1rem" }}>Login</Link>
          <Link to="/register" style={{ color: "#fff" }}>Registro</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
