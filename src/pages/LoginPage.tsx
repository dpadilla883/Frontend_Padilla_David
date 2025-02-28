import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import './LoginPage.css'; 

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    navigate('/');
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="p-field">
          <label>Email </label>
          <InputText value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="p-field">
          <label>Contraseña </label>
          <InputText type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button label="Entrar" type="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
