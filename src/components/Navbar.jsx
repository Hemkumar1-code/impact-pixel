// FILE: src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full backdrop-blur-md bg-white/70 shadow-sm border-b border-luxury-gold/30 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Impact Pixel Logo" className="h-16 md:h-24 w-auto object-contain mix-blend-multiply" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-luxury-dark hover:text-luxury-gold transition">Home</Link>
            <Link to="/services" className="text-luxury-dark hover:text-luxury-gold transition">Services</Link>
            <Link to="/portfolio" className="text-luxury-dark hover:text-luxury-gold transition">Portfolio</Link>
            <Link to="/contact" className="text-luxury-dark hover:text-luxury-gold transition">Contact</Link>
            {user ? (
              <>
                <Link to="/admin/dashboard" className="text-luxury-dark hover:text-luxury-gold transition">Dashboard</Link>
                <button
                  onClick={logout}
                  className="px-6 py-2 bg-luxury-gold text-black rounded hover:bg-yellow-400 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/admin/login"
                className="px-6 py-2 bg-luxury-gold text-black rounded hover:bg-yellow-400 transition"
              >
                Admin
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-luxury-gold"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            <Link to="/" className="block py-2 text-luxury-dark hover:text-luxury-gold">Home</Link>
            <Link to="/services" className="block py-2 text-luxury-dark hover:text-luxury-gold">Services</Link>
            <Link to="/portfolio" className="block py-2 text-luxury-dark hover:text-luxury-gold">Portfolio</Link>
            <Link to="/contact" className="block py-2 text-luxury-dark hover:text-luxury-gold">Contact</Link>
            {user ? (
              <>
                <Link to="/admin/dashboard" className="block py-2 text-luxury-dark hover:text-luxury-gold">Dashboard</Link>
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 bg-luxury-gold text-black rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/admin/login"
                className="block px-4 py-2 bg-luxury-gold text-black rounded text-center"
              >
                Admin
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
