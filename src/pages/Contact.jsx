// FILE: src/pages/Contact.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send to a backend or email service
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-luxury-light pt-32 md:pt-48 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Get In <span className="text-luxury-gold">Touch</span>
          </h1>
          <p className="text-xl text-gray-600">
            Let's discuss your next premium design project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Mail, title: 'Email', value: 'hello@impactpixel.com' },
            { icon: Phone, title: 'Phone', value: '+91 84388 75850' },
            { icon: MapPin, title: 'Location', value: 'Thirupur' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-lg p-6 text-center"
            >
              <item.icon className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="glass rounded-lg p-8 max-w-2xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-luxury-dark font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/70 shadow-sm border border-luxury-gold/40 rounded px-4 py-2 text-luxury-dark focus:outline-none focus:border-luxury-gold"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-luxury-dark font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/70 shadow-sm border border-luxury-gold/40 rounded px-4 py-2 text-luxury-dark focus:outline-none focus:border-luxury-gold"
                placeholder="Your Email"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-luxury-dark font-semibold mb-2">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-white/70 shadow-sm border border-luxury-gold/40 rounded px-4 py-2 text-luxury-dark focus:outline-none focus:border-luxury-gold"
            >
              <option value="">Select a service</option>
              <option value="poster">Poster Design</option>
              <option value="dress">Dress Design</option>
              <option value="video">Video Editing</option>
              <option value="web">Web Design</option>
              <option value="vcard">V Card Design</option>
              <option value="xerox">Xerox Services</option>
              <option value="webdev">Web Development</option>
              <option value="appdev">Application Development</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-luxury-dark font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full bg-white/70 shadow-sm border border-luxury-gold/40 rounded px-4 py-2 text-luxury-dark focus:outline-none focus:border-luxury-gold resize-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-luxury-gold text-black font-semibold rounded hover:bg-yellow-300 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </main>
  );
}
