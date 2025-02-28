Nombre: David Padilla
NRC: 1406

A continuación se muestran dos ejemplos de archivos README en formato Markdown, uno para el backend y otro para el frontend, con instrucciones detalladas para la instalación y uso de la aplicación.

---


# README - Frontend

## Descripción

Este proyecto frontend está desarrollado con React, Vite y TypeScript. Utiliza PrimeReact para la interfaz de usuario, React Query para el manejo de datos y Axios para las peticiones HTTP. Se conecta a la API del backend para gestionar usuarios, productos, inventario, pedidos, etc.

## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión recomendada: 16.x o superior)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

## Instalación

1. **Clonar el repositorio**

   git clone https://github.com/dpadilla883/Frontend_Padilla_David.git

   ```bash
   cd Frontend_Padilla_David
   ```

2. **Instalar dependencias**

   ```bash
   npm install react-router-dom axios @tanstack/react-query zustand primereact primeicons
   npm install --save-dev @vitejs/plugin-react
   ```

3. **Configurar variables de entorno**

   Crea un archivo `.env` en la raíz del proyecto frontend y agrega la siguiente variable (ajústala según tu entorno):

   ```env
   VITE_API_URL=http://localhost:3000
   ```

4. **Iniciar la aplicación**

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
- Puedes modificar o agregar funcionalidades directamente en los componentes en la carpeta `src/pages/`.

## Notas Adicionales

- Asegúrate de que el backend esté corriendo en la URL configurada en `VITE_API_URL`.
- La aplicación utiliza rutas definidas en React Router. Revisa el archivo `App.tsx` para ver la configuración de las rutas.
- Durante el desarrollo, la autenticación puede estar deshabilitada o simplificada para facilitar las pruebas. En producción, se recomienda implementar un sistema de autenticación robusto.

---

Ambos archivos README proporcionan instrucciones detalladas para la instalación y uso de cada parte de la aplicación. Puedes ajustar y personalizar estos archivos según las necesidades específicas de tu proyecto.

¿Te gustaría agregar o modificar algún detalle en estos README?
