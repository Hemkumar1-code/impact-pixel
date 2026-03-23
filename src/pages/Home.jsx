// FILE: src/pages/Home.jsx

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      id: 1,
      name: 'Poster Design',
      description: 'Eye-catching posters that tell your story and captivate audiences.',
      image: null,
    },
    {
      id: 2,
      name: 'Dress Design',
      description: 'Custom fashion design that reflects your unique style and personality.',
      image: null,
    },
    {
      id: 3,
      name: 'Video Editing',
      description: 'Professional video editing services for films, commercials, and content.',
      image: null,
    },
    {
      id: 4,
      name: 'Web Design',
      description: 'Modern, responsive websites that drive engagement and conversions.',
      image: null,
    },
    {
      id: 5,
      name: 'V Card Design',
      description: 'Digital and printed business cards that make lasting impressions.',
      image: null,
    },
    {
      id: 6,
      name: 'Xerox Services',
      description: 'Professional copying and printing solutions for all your needs.',
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
    <main>
      <Hero />

      {/* Services Preview */}
      <section className="py-20 bg-luxury-light">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-serif font-bold mb-4">
              Our <span className="text-luxury-gold">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of premium design services tailored to elevate your brand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-16"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3 border border-luxury-gold text-luxury-gold font-semibold rounded hover:bg-luxury-gold/10 transition"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-serif font-bold text-center mb-12"
          >
            Why Choose <span className="text-luxury-gold">Impact Pixel</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Team', desc: 'Experienced professionals dedicated to excellence' },
              { title: 'Custom Solutions', desc: 'Tailored designs for your unique brand identity' },
              { title: 'Premium Quality', desc: 'Luxury-grade output for discerning clients' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white shadow-lg border border-gray-100 p-8 rounded-lg text-center"
              >
                <h3 className="text-2xl font-semibold text-luxury-gold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
