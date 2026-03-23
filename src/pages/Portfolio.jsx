// FILE: src/pages/Portfolio.jsx

import React from 'react';
import { motion } from 'framer-motion';
import PortfolioGallery from '../components/PortfolioGallery';

export default function Portfolio() {
  const portfolioImages = [
    {
      id: 1,
      title: 'Modern Poster Design',
      category: 'Poster Design',
      url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
    },
    {
      id: 2,
      title: 'Fashion Collection',
      category: 'Dress Design',
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    },
    {
      id: 3,
      title: 'Video Production',
      category: 'Video Editing',
      url: 'https://images.unsplash.com/photo-1522869635100-ce11f625a53f?w=500&h=500&fit=crop',
    },
    {
      id: 4,
      title: 'Web Interface Design',
      category: 'Web Design',
      url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
    },
    {
      id: 5,
      title: 'Business Card Collection',
      category: 'V Card Design',
      url: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=500&fit=crop',
    },
    {
      id: 6,
      title: 'Print Materials',
      category: 'Xerox Services',
      url: 'https://images.unsplash.com/photo-1599080871399-112235f13310?w=500&h=500&fit=crop',
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
            Our <span className="text-luxury-gold">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of our finest work across all design disciplines. Click any image to view in detail.
          </p>
        </motion.div>

        <PortfolioGallery images={portfolioImages} />
      </div>
    </main>
  );
}
