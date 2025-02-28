import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import api from '../services/api';

interface NewSupplierFormProps {
  onClose: () => void;
}

const NewSupplierForm: React.FC<NewSupplierFormProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      
      await api.post('/suppliers', {
        name,
        contact,
        phone,
        email,
        address,
      });
      onClose();
    } catch (error) {
      console.error('Error al crear proveedor:', error);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h2>Crear Nuevo Proveedor</h2>
      <form onSubmit={handleSubmit}>
        <div className="p-field">
          <label>Nombre</label>
          <InputText value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="p-field">
          <label>Contacto</label>
          <InputText value={contact} onChange={(e) => setContact(e.target.value)} />
        </div>
        <div className="p-field">
          <label>Teléfono</label>
          <InputText value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="p-field">
          <label>Email</label>
          <InputText value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="p-field">
          <label>Dirección</label>
          <InputText value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <Button label="Guardar" icon="pi pi-check" type="submit" className="p-mr-2" />
          <Button label="Cancelar" icon="pi pi-times" onClick={onClose} className="p-button-secondary" />
        </div>
      </form>
    </div>
  );
};

export default NewSupplierForm;
