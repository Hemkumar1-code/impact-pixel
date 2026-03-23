import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Trash2, Plus, LogOut, CheckCircle, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  // Data State
  const [items, setItems] = useState([]);

  // Form State
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({ name: '', price: '', description: '', image: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Load items from local storage entirely locally without Firebase
  useEffect(() => {
    const saved = localStorage.getItem('impact_pixel_services');
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMsg('Image size must be less than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    
    // Validate fields
    if (!formData.name || !formData.price || !formData.description || !formData.image) {
      setErrorMsg('Please fill out all fields and upload an image.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate upload delay for UI experience
    setTimeout(() => {
      const newItem = {
        id: Date.now(),
        ...formData
      };
      
      const updatedItems = [newItem, ...items];
      setItems(updatedItems);
      localStorage.setItem('impact_pixel_services', JSON.stringify(updatedItems));
      
      setIsSubmitting(false);
      setSuccessMsg('Service / Item added successfully!');
      
      // Clear form
      setFormData({ name: '', price: '', description: '', image: '' });
      setImagePreview(null);
      
      // Hide success message after 3 seconds
      setTimeout(() => setSuccessMsg(''), 3000);
    }, 1200);
  };

  const deleteItem = (id) => {
    const updated = items.filter(item => item.id !== id);
    setItems(updated);
    localStorage.setItem('impact_pixel_services', JSON.stringify(updated));
  };

  return (
    <main className="min-h-screen bg-luxury-light pt-32 md:pt-48 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
        >
          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-2">
              Admin <span className="text-luxury-gold">Dashboard</span>
            </h1>
            <p className="text-gray-600 font-medium">Welcome back, {user?.displayName || 'Admin'}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-red-50 border border-red-200 text-red-600 rounded-xl hover:bg-red-100 transition shadow-sm font-semibold"
          >
            <LogOut size={20} /> Logout
          </button>
        </motion.div>

        {/* Action Area */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Add New Item Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white shadow-xl border border-gray-100 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-luxury-dark border-b border-gray-100 pb-4">Add New Service / Project</h2>
            
            {successMsg && (
              <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3 font-medium">
                <CheckCircle size={22} className="text-green-500" /> {successMsg}
              </motion.div>
            )}
            
            {errorMsg && (
              <motion.div initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl font-medium">
                {errorMsg}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image Upload */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Item Image</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-luxury-gold transition relative overflow-hidden bg-gray-50/50 group">
                  {imagePreview ? (
                    <div className="relative">
                      <img src={imagePreview} alt="Preview" className="h-48 w-full object-contain rounded-lg bg-white shadow-sm" />
                      <button 
                        type="button" 
                        onClick={() => { setImagePreview(null); setFormData(prev => ({...prev, image: ''}))}}
                        className="absolute -top-2 -right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 shadow-lg transform transition hover:scale-110"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="py-4">
                      <div className="w-16 h-16 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-luxury-gold/10 group-hover:text-luxury-gold transition-colors">
                        <Upload className="w-8 h-8" />
                      </div>
                      <p className="text-gray-600 font-medium mb-1">Click or drag image to upload</p>
                      <p className="text-gray-400 text-sm">PNG, JPG, WebP up to 5MB</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Service / Item Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition"
                  placeholder="Enter name (e.g., Social Media Poster)"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Price (₹)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₹</span>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={e => setFormData({...formData, price: e.target.value})}
                    className="w-full bg-gray-50/50 border border-gray-200 rounded-xl pl-8 pr-4 py-3 focus:bg-white focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition"
                    placeholder="Enter price"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  rows="4"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 focus:bg-white focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition resize-none"
                  placeholder="Enter item description..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-luxury-gold text-black font-bold rounded-xl shadow-md hover:bg-yellow-500 hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  <><Loader2 className="animate-spin" size={22} /> Uploading Data...</>
                ) : (
                  <><Plus size={22} /> Add New Item</>
                )}
              </button>
            </form>
          </motion.div>

          {/* Uploaded Items List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold mb-6 text-luxury-dark border-b border-gray-100 pb-4">Manage Uploaded Items</h2>
            
            {items.length === 0 ? (
              <div className="bg-white border border-gray-100 border-dashed rounded-2xl p-16 text-center text-gray-400 mt-8">
                <p className="text-lg font-medium mb-1">No items uploaded yet</p>
                <p className="text-sm">Your uploaded services and portfolio will appear here.</p>
              </div>
            ) : (
              <div className="grid gap-4 max-h-[800px] overflow-y-auto pr-2 pb-4 scrollbar-thin">
                <AnimatePresence>
                  {items.map(item => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex gap-5 items-center group hover:shadow-md transition-shadow"
                    >
                      <div className="w-24 h-24 bg-gray-50 rounded-lg flex-shrink-0 border border-gray-100 p-1">
                         <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg text-luxury-dark truncate">{item.name}</h3>
                        <p className="text-luxury-gold font-bold text-lg mb-1">₹{item.price}</p>
                        <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                      </div>
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="p-3 text-red-500 hover:bg-red-50 hover:text-red-700 rounded-xl transition-colors shadow-sm border border-transparent hover:border-red-100 flex-shrink-0"
                        title="Delete Item"
                      >
                        <Trash2 size={20} />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
