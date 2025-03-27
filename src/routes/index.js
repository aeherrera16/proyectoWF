import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginView from "../views/Login/LoginView";
import RegisterView from "../views/Register/RegisterView";
import HomePage from "../views/HomePage";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/home" element={<HomePage />} /> {/* Agregando HomePage */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
