
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import api from '../services/api';
import UpdateInventoryForm from './UpdateInventoryForm';

const fetchInventory = async () => {
  const response = await api.get('/inventory');
  return response.data;
};

const InventoryPage = () => {
  const { data: inventory = [], isLoading, error, refetch } = useQuery(['inventory'], fetchInventory);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedInventoryId, setSelectedInventoryId] = useState<number | null>(null);

  if (isLoading) return <p>Cargando inventario...</p>;
  if (error) return <p>Error al cargar inventario</p>;


  const handleUpdateInventoryClick = () => {
    if (inventory.length > 0) {
      setSelectedInventoryId(inventory[0].id);
      setShowUpdateForm(true);
    }
  };

  const handleCloseUpdateForm = () => {
    setShowUpdateForm(false);
    refetch();
  };

  return (
    <div className="inventory-page">
      <h1>Gestión de Inventarios</h1>
      <Button
        label="Actualizar Inventario"
        icon="pi pi-refresh"
        className="p-mb-3"
        onClick={() => handleUpdateInventoryClick()}
      />
      {showUpdateForm && selectedInventoryId && (
        <UpdateInventoryForm inventoryId={selectedInventoryId} onClose={handleCloseUpdateForm} />
      )}
      <DataTable value={inventory}>
        <Column field="id" header="ID" />
        <Column field="company_id" header="ID Empresa" />
        <Column field="fecha_actualizacion" header="Última Actualización" />
      </DataTable>
    </div>
  );
};

export default InventoryPage;
