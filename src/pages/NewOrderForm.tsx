
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import api from '../services/api';
import { useQueryClient } from '@tanstack/react-query';

interface NewOrderFormProps {
  onClose: () => void;
}

const NewOrderForm: React.FC<NewOrderFormProps> = ({ onClose }) => {
  const queryClient = useQueryClient();
  const [deliveryDate, setDeliveryDate] = useState('');
  const [companyId, setCompanyId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
      
        deliveryDate: deliveryDate ? new Date(deliveryDate).toISOString() : null,
        estado: 'pendiente', // Valor por defecto
       
        company: { id: parseInt(companyId, 10) },
      };

      await api.post('/orders', payload);
      queryClient.invalidateQueries(['orders']);
      onClose();
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h2>Create New Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="p-field">
          <label>Delivery Date</label>
          <InputText
            type="date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
          />
        </div>
        <div className="p-field">
          <label>Company ID</label>
          <InputText
            type="number"
            value={companyId}
            onChange={(e) => setCompanyId(e.target.value)}
          />
        </div>
        <Button label="Save" icon="pi pi-check" type="submit" className="p-mr-2" />
        <Button label="Cancel" icon="pi pi-times" onClick={onClose} className="p-button-secondary" />
      </form>
    </div>
  );
};

export default NewOrderForm;
