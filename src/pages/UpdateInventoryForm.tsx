
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import api from '../services/api';
import { useQueryClient } from '@tanstack/react-query';

interface UpdateInventoryFormProps {
  inventoryId: number;
  onClose: () => void;
}

const UpdateInventoryForm: React.FC<UpdateInventoryFormProps> = ({ inventoryId, onClose }) => {
  const queryClient = useQueryClient();
  const [newCompanyId, setNewCompanyId] = useState('');
  const [newFecha, setNewFecha] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      
      const payload: any = {};
      if (newCompanyId.trim() !== '') {
        payload.company_id = parseInt(newCompanyId, 10);
      }
      if (newFecha.trim() !== '') {
        
        payload.fecha_actualizacion = new Date(newFecha).toISOString();
      }
      await api.put(`/inventory/${inventoryId}`, payload);
      queryClient.invalidateQueries(['inventory']); 
      onClose();
    } catch (error) {
      console.error('Error updating inventory:', error);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem', backgroundColor: '#fff' }}>
      <h2>Actualizar Inventario</h2>
      <form onSubmit={handleSubmit}>
        <div className="p-field">
          <label>Nueva ID Empresa (opcional)</label>
          <InputText
            type="number"
            value={newCompanyId}
            onChange={(e) => setNewCompanyId(e.target.value)}
            placeholder="Ej: 1"
          />
        </div>
        <div className="p-field">
          <label>Nueva Fecha de Actualización (YYYY-MM-DD HH:mm:ss) (opcional)</label>
          <InputText
            type="text"
            value={newFecha}
            onChange={(e) => setNewFecha(e.target.value)}
            placeholder="Ej: 2025-02-21 10:00:00"
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <Button label="Actualizar" icon="pi pi-check" type="submit" className="p-mr-2" />
          <Button label="Cancelar" icon="pi pi-times" onClick={onClose} className="p-button-secondary" />
        </div>
      </form>
    </div>
  );
};

export default UpdateInventoryForm;
