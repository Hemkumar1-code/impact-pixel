// FILE: src/pages/AdminDashboard.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Trash2, Plus, Edit2, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('portfolio');
  const [portfolioImages, setPortfolioImages] = useState([
    { id: 1, title: 'Sample 1', category: 'Poster Design', url: 'https://via.placeholder.com/200' },
  ]);
  const [services, setServices] = useState([
    { id: 1, name: 'Poster Design', description: 'Eye-catching posters' },
  ]);
  const [newService, setNewService] = useState({ name: '', description: '' });

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const addService = () => {
    if (newService.name.trim()) {
      setServices([...services, { id: Date.now(), ...newService }]);
      setNewService({ name: '', description: '' });
    }
  };

  const deleteService = (id) => {
    setServices(services.filter((s) => s.id !== id));
  };

  const deleteImage = (id) => {
    setPortfolioImages(portfolioImages.filter((img) => img.id !== id));
  };

  return (
    <main className="min-h-screen bg-luxury-light pt-32 md:pt-48 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-5xl font-serif font-bold mb-2">
              Admin <span className="text-luxury-gold">Dashboard</span>
            </h1>
            <p className="text-gray-600">Welcome, {user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 text-luxury-dark rounded hover:bg-red-700 transition"
          >
            <LogOut size={20} /> Logout
          </button>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-luxury-gold/40">
          {['portfolio', 'services', 'links'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-semibold transition ${
                activeTab === tab
                  ? 'text-luxury-gold border-b-2 border-luxury-gold'
                  : 'text-gray-600 hover:text-luxury-dark'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Portfolio Tab */}
          {activeTab === 'portfolio' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="glass rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Upload Portfolio Images</h2>

                <div className="border-2 border-dashed border-luxury-gold/30 rounded-lg p-8 text-center mb-6">
                  <Upload className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    id="portfolio-upload"
                  />
                  <label htmlFor="portfolio-upload" className="cursor-pointer">
                    <span className="text-luxury-gold font-semibold">Click to upload</span>
                    <p className="text-gray-600 text-sm mt-2">PNG, JPG, GIF up to 10MB</p>
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioImages.map((image) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass rounded-lg overflow-hidden"
                  >
                    <img src={image.url} alt={image.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <p className="font-semibold mb-2">{image.title}</p>
                      <p className="text-sm text-gray-600 mb-4">{image.category}</p>
                      <button
                        onClick={() => deleteImage(image.id)}
                        className="w-full px-4 py-2 bg-red-600 text-luxury-dark rounded hover:bg-red-700 transition flex items-center justify-center gap-2"
                      >
                        <Trash2 size={18} /> Delete
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="glass rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Add New Service</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-luxury-dark font-semibold mb-2">Service Name</label>
                    <input
                      type="text"
                      value={newService.name}
                      onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                      className="w-full bg-white/70 shadow-sm border border-luxury-gold/40 rounded px-4 py-2 text-luxury-dark focus:outline-none focus:border-luxury-gold"
                      placeholder="e.g., Poster Design"
                    />
                  </div>
                  <div>
                    <label className="block text-luxury-dark font-semibold mb-2">Description</label>
                    <textarea
                      value={newService.description}
                      onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                      className="w-full bg-white/70 shadow-sm border border-luxury-gold/40 rounded px-4 py-2 text-luxury-dark focus:outline-none focus:border-luxury-gold resize-none"
                      rows="3"
                      placeholder="Service description..."
                    ></textarea>
                  </div>
                  <button
                    onClick={addService}
                    className="flex items-center gap-2 px-6 py-2 bg-luxury-gold text-black font-semibold rounded hover:bg-yellow-300 transition"
                  >
                    <Plus size={20} /> Add Service
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass rounded-lg p-6"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button className="p-2 bg-blue-600 text-luxury-dark rounded hover:bg-blue-700 transition">
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => deleteService(service.id)}
                          className="p-2 bg-red-600 text-luxury-dark rounded hover:bg-red-700 transition"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Links Tab */}
          {activeTab === 'links' && (
            <motion.div
              key="links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="glass rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">External Links</h2>
                <p className="text-gray-600">Add YouTube, portfolio, and project links here.</p>

                <div className="mt-8 space-y-4">
                  <div>
                    <label className="block text-luxury-dark font-semibold mb-2">Link Title</label>
                    <input
                      type="text"
                      className="w-full bg-white/70 shadow-sm border border-luxury-gold/40 rounded px-4 py-2 text-luxury-dark focus:outline-none focus:border-luxury-gold"
                      placeholder="e.g., YouTube Channel"
                    />
                  </div>
                  <div>
                    <label className="block text-luxury-dark font-semibold mb-2">URL</label>
                    <input
                      type="url"
                      className="w-full bg-white/70 shadow-sm border border-luxury-gold/40 rounded px-4 py-2 text-luxury-dark focus:outline-none focus:border-luxury-gold"
                      placeholder="https://..."
                    />
                  </div>
                  <button className="flex items-center gap-2 px-6 py-2 bg-luxury-gold text-black font-semibold rounded hover:bg-yellow-300 transition">
                    <Plus size={20} /> Add Link
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
