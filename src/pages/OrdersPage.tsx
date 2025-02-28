
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import api from '../services/api';
import NewOrderForm from './NewOrderForm';

const fetchOrders = async () => {
  const response = await api.get('/orders');
  return response.data;
};

const OrdersPage = () => {
  const { data: orders = [], isLoading, error, refetch } = useQuery(['orders'], fetchOrders);
  const [showForm, setShowForm] = useState(false);

  if (isLoading) return <p>Loading orders...</p>;
  if (error) return <p>Error loading orders</p>;

  const handleNewOrderClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    refetch(); 
  };

  return (
    <div className="orders-page">
      <h1>Gestión de Pedidos</h1>
      <Button label="Nuevo Pedido" icon="pi pi-plus" className="p-mb-3" onClick={handleNewOrderClick} />
      {showForm && <NewOrderForm onClose={handleCloseForm} />}
      <DataTable value={orders}>
        <Column field="id" header="ID" />
        <Column field="estado" header="Estado" />
        <Column field="fecha_solicitud" header="Fecha de Solicitud" />
      </DataTable>
    </div>
  );
};

export default OrdersPage;
