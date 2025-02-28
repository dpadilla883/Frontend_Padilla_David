import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import api from '../services/api';
import NewSupplierForm from './NewSupplierForm';
import './SuppliersPage.css'; 

const fetchSuppliers = async () => {
  const response = await api.get('/suppliers');
  return response.data;
};

const SuppliersPage = () => {
  const { data: suppliers = [], isLoading, error, refetch } = useQuery(['suppliers'], fetchSuppliers);
  const [showForm, setShowForm] = useState(false);

  if (isLoading) return <p>Cargando proveedores...</p>;
  if (error) return <p>Error al cargar proveedores</p>;

  const handleNewSupplierClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    refetch(); 
  };

  return (
    <div className="suppliers-page">
      <h1>Gestión de Proveedores</h1>
      <Button label="Nuevo Proveedor" icon="pi pi-plus" className="p-mb-3" onClick={handleNewSupplierClick} />
      {showForm && <NewSupplierForm onClose={handleCloseForm} />}
      <DataTable value={suppliers}>
        <Column field="id" header="ID" />
        <Column field="name" header="Nombre" />
        <Column field="contact" header="Contacto" />
        <Column field="phone" header="Teléfono" />
        <Column field="email" header="Email" />
        <Column field="address" header="Dirección" />
      </DataTable>
    </div>
  );
};

export default SuppliersPage;
