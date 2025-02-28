
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

import ProductsPage from './pages/ProductsPage';
import InventoryPage from './pages/InventoryPage';
import OrdersPage from './pages/OrdersPage';
import SuppliersPage from './pages/SuppliersPage';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Layout from './components/Layout';
import UsersPage from './pages/UsersPage';

const App = () => {
  const { user } = useContext(AuthContext);

  
  const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    return user ? children : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<PrivateRoute><Layout /></PrivateRoute>}>
      <Route path="/" element={<DashboardPage />} />
        
        <Route path="productos" element={<ProductsPage />} />
        <Route path="inventario" element={<InventoryPage />} />
        <Route path="pedidos" element={<OrdersPage />} />
        <Route path="proveedores" element={<SuppliersPage />} />
        <Route path="usuarios" element={<UsersPage />} />


      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
