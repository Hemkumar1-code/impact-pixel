// FILE: src/components/LoadingScreen.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-luxury-light z-[999] flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-16 h-16 border-4 border-luxury-gold/30 border-t-luxury-gold rounded-full mx-auto mb-6"
            />
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-serif text-luxury-gold"
            >
              Impact Pixel
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
