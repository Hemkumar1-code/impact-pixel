// FILE: src/components/Hero.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden pt-32 md:pt-40">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-bold mb-6"
        >
          <span className="text-luxury-dark">Impact Pixel</span>
          <br />
          <span className="bg-gradient-to-r from-luxury-gold to-yellow-500 bg-clip-text text-transparent">
            Small Point. Big Impact.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
        >
          Premium design services for posters, apparel, videos, websites, V-cards, and more. Elevate your brand with our expert team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Link
            to="/services"
            className="px-8 py-3 bg-luxury-gold text-black font-semibold rounded hover:bg-yellow-300 transition flex items-center gap-2"
          >
            Explore Services <ArrowRight size={20} />
          </Link>
          <Link
            to="/portfolio"
            className="px-8 py-3 border border-luxury-gold text-luxury-gold font-semibold rounded hover:bg-luxury-gold/10 transition"
          >
            View Portfolio
          </Link>
        </motion.div>


      </div>
    </section>
  );
}
