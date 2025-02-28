import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
//import './UsersPage.css'; 

const UsersPage = () => {
 
  const users = [
    { id_usuario: 1, nombre_completo: 'Juan Pérez', email: 'juan@example.com', estado: 'Activo' },
    { id_usuario: 2, nombre_completo: 'María López', email: 'maria@example.com', estado: 'Inactivo' },
  ];

  return (
    <div className="users-page">
      <h1>Gestión de Usuarios</h1>
      <Button label="Nuevo Usuario" icon="pi pi-plus" className="p-mb-3" />
      <DataTable value={users}>
        <Column field="id_usuario" header="ID" />
        <Column field="nombre_completo" header="Nombre Completo" />
        <Column field="email" header="Email" />
        <Column field="estado" header="Estado" />
      </DataTable>
    </div>
  );
};

export default UsersPage;
