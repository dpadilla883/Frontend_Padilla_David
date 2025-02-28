
import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import api from '../services/api';
import NewProductForm from './NewProductForm'; // Ajusta la ruta si es distinta
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

const ProductsPage = () => {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);

  const { data: products = [], isLoading, error } = useQuery(['products'], fetchProducts);

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  const handleNewProductClick = () => {
    setShowForm(true);
  };

  
  const handleCloseForm = () => {
    setShowForm(false);
    queryClient.invalidateQueries(['products']); 
  };

  return (
    <div className="products-page">
      <h1>Gestión de Productos</h1>

      <Button
        label="Nuevo Producto"
        icon="pi pi-plus"
        className="p-mb-3"
        onClick={handleNewProductClick}
      />

      {/* Si showForm es true, mostramos el formulario */}
      {showForm && <NewProductForm onClose={handleCloseForm} />}

      <DataTable value={products}>
        <Column field="id" header="ID" />
        <Column field="name" header="Nombre" />
        <Column field="salePrice" header="Precio de Venta" />
        {/* etc */}
      </DataTable>
    </div>
  );
};

export default ProductsPage;
