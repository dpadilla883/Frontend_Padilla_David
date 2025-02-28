
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

interface DashboardData {
  totalProducts: number;
  stockBajoCount: number;
  pedidosPendientesCount: number;
}

const fetchDashboardData = async (): Promise<DashboardData> => {
  const response = await api.get('/dashboard');
  return response.data; 
};


const DashboardPage = () => {
  const { data, isLoading, error } = useQuery(['dashboardData'], fetchDashboardData);

  if (isLoading) return <p>Cargando datos del Dashboard...</p>;
  if (error) return <p>Error al cargar el Dashboard</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Total Productos</h2>
        <p>{data?.totalProducts}</p>
      </div>
      <div>
        <h2>Stock Bajo</h2>
        <p>{data?.stockBajoCount}</p>
      </div>
      <div>
        <h2>Pedidos Pendientes</h2>
        <p>{data?.pedidosPendientesCount}</p>
      </div>
    </div>
  );
};

export default DashboardPage;
