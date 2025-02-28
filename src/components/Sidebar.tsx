import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/usuarios">Usuarios</NavLink>
          </li>
          <li>
            <NavLink to="/productos">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/inventario">Inventario</NavLink>
          </li>
          <li>
            <NavLink to="/pedidos">Pedidos</NavLink>
          </li>
          <li>
            <NavLink to="/proveedores">Proveedores</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
