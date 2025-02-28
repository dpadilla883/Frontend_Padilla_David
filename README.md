# Nombre: David Padilla

# NRC: 1406


# Frontend Proyecto PYMEs

## Descripción

Este proyecto frontend está desarrollado con React, Vite y TypeScript. Utiliza PrimeReact para la interfaz de usuario, React Query para el manejo de datos y Axios para las peticiones HTTP. Se conecta a la API del backend para gestionar usuarios, productos, inventario, pedidos, etc.


## Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/dpadilla883/Frontend_Padilla_David.git
   ```

   ```bash
   cd Frontend_Padilla_David
   ```

2. **Instalar dependencias**

   ```bash
   npm install react-router-dom axios @tanstack/react-query zustand primereact primeicons
   ```

   ```bash
   npm install --save-dev @vitejs/plugin-react
   ```

3. **Iniciar la aplicación**

   ```bash
   npm run dev
   ```

   La aplicación se ejecutará normalmente en `http://localhost:5173`.

## Uso

- La aplicación cuenta con varias páginas:
  - **Dashboard:** Muestra información general del sistema (productos, stock bajo, pedidos pendientes).
  - **Gestión de Usuarios:** Permite crear, editar y eliminar usuarios.
  - **Gestión de Productos:** Para ver y gestionar productos.
  - **Gestión de Inventario:** Para ver y actualizar el inventario.
  - **Gestión de Pedidos y Proveedores:** Para gestionar órdenes y proveedores.
- La comunicación con el backend se realiza a través de Axios y React Query.
- Los componentes de la interfaz están estilizados con PrimeReact y CSS personalizado.
- Se puede modificar o agregar funcionalidades directamente en los componentes en la carpeta `src/pages/`.

## Requisitos Previos

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
