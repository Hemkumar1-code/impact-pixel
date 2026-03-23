// FILE: src/pages/Services.jsx

import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const services = [
    {
      id: 1,
      name: 'Poster Design',
      description: 'Create stunning, high-impact posters that grab attention and convey your message with style.',
      image: null,
    },
    {
      id: 2,
      name: 'Dress Design',
      description: 'Custom apparel designs that blend fashion, comfort, and personal expression.',
      image: null,
    },
    {
      id: 3,
      name: 'Video Editing',
      description: 'Transform raw footage into compelling visual stories with professional editing.',
      image: null,
    },
    {
      id: 4,
      name: 'Web Design',
      description: 'Beautiful, functional websites optimized for user experience and conversion.',
      image: null,
    },
    {
      id: 5,
      name: 'V Card Design',
      description: 'Professional business cards that leave a lasting impression on every contact.',
      image: null,
    },
    {
      id: 6,
      name: 'Xerox Services',
      description: 'High-quality copying and printing services for all your documentation needs.',
      image: null,
    },
    {
      id: 7,
      name: 'Web Development',
      description: 'Custom, high-performance websites built with modern technologies.',
      image: null,
    },
    {
      id: 8,
      name: 'Application Development',
      description: 'Robust and scalable mobile and web applications for your business.',
      image: null,
    },
  ];

  return (
    <main className="min-h-screen bg-luxury-light pt-32 md:pt-48 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Our <span className="text-luxury-gold">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive design solutions for every aspect of your brand. From visual content to digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
