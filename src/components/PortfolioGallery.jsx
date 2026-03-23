// FILE: src/components/PortfolioGallery.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PortfolioGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(image)}
            className="cursor-pointer group relative overflow-hidden rounded-lg glass h-64"
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div className="text-luxury-dark">
                <h3 className="font-semibold">{image.title}</h3>
                <p className="text-sm text-gray-700">{image.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-luxury-light/90 z-50 flex items-center justify-center p-4"
        >
          <motion.img
            layoutId="expand"
            src={selectedImage.url}
            alt={selectedImage.title}
            className="max-w-3xl max-h-[90vh] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
}
