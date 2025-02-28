import React, { createContext, useState, useEffect, ReactNode } from 'react';
import api from '../services/api';

interface AuthContextProps {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async () => {},
  logout: () => {},
});

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>(null);

  // Al iniciar, verifica sesión guardada
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

 /* const login = async (email: string, password: string) => {
    // Llamada al backend cuando esté listo (endpoint /auth/login)
    try {
      const response = await api.post('/auth/login', { email, password });
      setUser(response.data.user);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Error en login:', error);
    }
  };
*/
const login = async (email: string, password: string) => {
  // Simular un login exitoso
  const fakeUser = {
    nombre_completo: 'Admin User',
    email,
  };

  setUser(fakeUser);
  localStorage.setItem('user', JSON.stringify(fakeUser));
  localStorage.setItem('token', 'fake-jwt-token');
};

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
