import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_BACKEND_URL;
const TOKEN_KEY = 'admin_token';

// Helper to get auth headers
export const getAuthHeaders = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const AdminContext = createContext(null);

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }
    try {
      const response = await axios.get(`${API_URL}/api/admin/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setIsAuthenticated(Boolean(response.data?.authenticated));
    } catch (error) {
      localStorage.removeItem(TOKEN_KEY);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const login = async (password) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/admin/login`,
        { password }
      );
      if (response.data?.token) {
        localStorage.setItem(TOKEN_KEY, response.data.token);
      }
      setIsAuthenticated(true);
      return { success: true };
    } catch (error) {
      const detail = error.response?.data?.detail;
      return { success: false, error: typeof detail === 'string' ? detail : 'লগইন ব্যর্থ হয়েছে' };
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${API_URL}/api/admin/logout`, {}, {
        headers: getAuthHeaders()
      });
    } catch (error) {
      console.error('Logout error:', error);
    }
    localStorage.removeItem(TOKEN_KEY);
    setIsAuthenticated(false);
  };

  return (
    <AdminContext.Provider value={{ isAuthenticated, loading, login, logout, checkAuth }}>
      {children}
    </AdminContext.Provider>
  );
};
