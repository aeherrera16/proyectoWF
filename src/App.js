import React, { useState } from 'react';
import './App.scss';
import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/forms/RegisterForm';
import logo from './assets/images/logo.svg';  // Agrega el "./"

function App() {
  const [view, setView] = useState('login');

  const handleToggle = () => {
    setView(view === 'login' ? 'register' : 'login');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleToggle} className="toggle-button">
          {view === 'login' ? 'Ir a Registro' : 'Ir a Login'}
        </button>
      </header>
      <main>
        {view === 'login' ? <LoginForm /> : <RegisterForm />}
      </main>
    </div>
  );
}

export default App;
