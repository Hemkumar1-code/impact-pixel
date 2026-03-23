// FILE: src/components/Footer.jsx

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-luxury-light border-t border-luxury-gold/30 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              <span className="text-luxury-gold font-serif">Impact Pixel</span>
            </h3>
            <p className="text-gray-600">
              Premium design services for brands that demand excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-luxury-dark font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/" className="hover:text-luxury-gold transition">Home</a></li>
              <li><a href="/services" className="hover:text-luxury-gold transition">Services</a></li>
              <li><a href="/portfolio" className="hover:text-luxury-gold transition">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-luxury-gold transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-luxury-dark font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-luxury-gold" />
                <span>hello@impactpixel.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-luxury-gold" />
                <span>+91 84388 75850</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-luxury-gold" />
                <span>Thirupur</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
          
        </div>
      </div>
    </motion.footer>
  );
}
