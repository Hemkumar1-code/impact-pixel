import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check local storage for persistent login without backend
    const storedUser = localStorage.getItem('impact_pixel_admin');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const p = password.toUpperCase();
    // Allow login for the requested demo users
    if (p === 'HEMKUMAR' || p === 'SAM' || p === 'ADMIN') {
      const mockUser = { uid: Date.now().toString(), email, displayName: p };
      setUser(mockUser);
      localStorage.setItem('impact_pixel_admin', JSON.stringify(mockUser));
      setError(null);
    } else {
      throw new Error('Invalid credentials. Use HEMKUMAR or SAM.');
    }
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem('impact_pixel_admin');
    setError(null);
  };

  const register = async (email, password) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const mockUser = { uid: Date.now().toString(), email, displayName: 'New Admin' };
    setUser(mockUser);
    localStorage.setItem('impact_pixel_admin', JSON.stringify(mockUser));
    setError(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
