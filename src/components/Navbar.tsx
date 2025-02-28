import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import './Navbar.css'; 

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <h2>Gestión de Inventarios</h2>
      <div className="user-info">
        {user && <span>{user.nombre_completo || user.email}</span>}
        <Button label="Cerrar sesión" icon="pi pi-sign-out" onClick={handleLogout} />
      </div>
    </nav>
  );
};

export default Navbar;
