// FILE: src/components/ServiceCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Link to={`/service/${service.id}`}>
        <div className="glass rounded-lg overflow-hidden h-full hover:glass-hover transition-all duration-300">
          {/* Image */}
          {service.image && (
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-serif font-bold mb-3 text-luxury-dark">
              {service.name}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              {service.description}
            </p>

            <div className="flex items-center text-luxury-gold group-hover:gap-3 transition-all duration-300">
              <span className="text-sm font-semibold">Learn More</span>
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
