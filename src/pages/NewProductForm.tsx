
import React, { useState } from 'react';
import api from '../services/api';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

interface NewProductFormProps {
  onClose: () => void;
}

const NewProductForm: React.FC<NewProductFormProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  //const [stockMaximum, setStockMaximum] = useState('');
 // const [stockMinimum, setStockMinimum] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      
      await api.post('/products', {
        name,
        salePrice: parseFloat(salePrice),
        purchasePrice: parseFloat(purchasePrice),
        //stockMinimum: parseInt(stockMinimum, 10),
        //stockMaximum: parseInt(stockMaximum, 10),
        company: { id: 1 },
      });
    
      onClose();
      
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
      <h2>Crear Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="p-field">
          <label>Nombre del Producto </label>
          <InputText value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="p-field">
          <label>Precio de Venta </label>
          <InputText
            value={salePrice}
            onChange={(e) => setSalePrice(e.target.value)}
            keyfilter="num"
          />
        </div>




        <Button label="Guardar" icon="pi pi-check" type="submit" className="p-mr-2" />
        <Button label="Cancelar" icon="pi pi-times" onClick={onClose} className="p-button-secondary" />
      </form>
    </div>
  );
};

export default NewProductForm;
