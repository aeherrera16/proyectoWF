import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Archivo opcional de estilos globales mínimos
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si deseas medir el rendimiento, puedes pasar una función a reportWebVitals
reportWebVitals();
