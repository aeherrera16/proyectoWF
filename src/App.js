import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/forms/Home'; // Asegúrate de la ruta correcta
import LoginForm from './components/forms/AuthForm'; // Asegúrate de la ruta correcta
import AuthForm from './components/forms/AuthForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        {/* Redirige automáticamente a /login cuando se acceda a la raíz */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Ruta para el formulario de login */}
        <Route path="/login" element={<AuthForm />} />

        {/* Ruta para la página de inicio */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
