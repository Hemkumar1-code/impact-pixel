// FILE: src/pages/AdminLogin.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const formattedEmail = username.includes('@') ? username : `${username}@${username}.com`;
      if (isLogin) {
        await login(formattedEmail, password);
      } else {
        await register(formattedEmail, password);
      }
      navigate('/admin/dashboard');
    } catch (err) {
      setError(isLogin ? 'Invalid username or password' : 'Failed to create admin account. Password must be 6+ chars.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-luxury-light pt-32 md:pt-48 pb-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-lg p-8 max-w-md w-full mx-4"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold mb-2">
            <span className="text-luxury-gold">Impact Pixel</span>
          </h1>
          <p className="text-gray-600">Admin Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-luxury-dark font-semibold mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full bg-white/70 shadow-sm border border-luxury-gold/40 rounded px-4 py-2 text-luxury-dark focus:outline-none focus:border-luxury-gold"
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block text-luxury-dark font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-white/70 shadow-sm border border-luxury-gold/40 rounded px-4 py-2 text-luxury-dark focus:outline-none focus:border-luxury-gold"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-50 border border-red-200 rounded px-4 py-2 text-red-600 text-sm"
            >
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-luxury-gold text-black font-semibold rounded hover:bg-yellow-500 transition disabled:opacity-50"
          >
            {loading ? 'Processing...' : (isLogin ? 'Login' : 'Create Admin')}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-luxury-gold hover:underline text-sm font-medium"
          >
            {isLogin ? "Don't have an admin account? Create one" : "Already have an account? Login here"}
          </button>
        </div>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded text-blue-800 text-sm">
          <p className="font-semibold mb-2">Demo Credentials:</p>
          <p>Username: HEMKUMAR</p>
          <p>Password: HEMKUMAR</p>
          <p className="mt-2">Or use SAM / SAM</p>
        </div>
      </motion.div>
    </main>
  );
}
