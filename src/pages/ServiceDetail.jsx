// FILE: src/pages/ServiceDetail.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();

  const serviceDetails = {
    1: {
      name: 'Poster Design',
      title: 'Eye-Catching Poster Design',
      description: 'Transform your concepts into stunning visual posters that command attention and tell your story.',
      features: [
        'Custom design from concept to final print',
        'Multiple revision rounds',
        'Format: Digital & Print Ready',
        'Fast turnaround time',
        'Unlimited color options',
      ],
      pricing: '₹200 - ₹500',
    },
    2: {
      name: 'Dress Design',
      title: 'Custom Fashion Design',
      description: 'Create unique fashion pieces that reflect your style and make bold statements.',
      features: [
        'Pattern design & sketches',
        'Fabric selection guidance',
        'Virtual try-on mockups',
        'Manufacturing coordination',
        'Style consultation',
      ],
      pricing: '₹300 - ₹1000',
    },
    3: {
      name: 'Video Editing',
      title: 'Professional Video Editing',
      description: 'Turn your footage into polished, engaging content ready for any platform.',
      features: [
        'Color grading & correction',
        'Motion graphics & effects',
        'Audio synchronization',
        'Multi-format export',
        'Fast editing turnaround',
      ],
      pricing: '₹500 - ₹2000',
    },
    4: {
      name: 'Web Design',
      title: 'Modern Web Design',
      description: 'Build beautiful, responsive websites that engage visitors and drive results.',
      features: [
        'Responsive design',
        'SEO optimization',
        'Fast loading speeds',
        'Mobile-first approach',
        'CMS integration',
      ],
      pricing: '₹1000 - ₹5000',
    },
    5: {
      name: 'V Card Design',
      title: 'Premium Business Card Design',
      description: 'Make memorable first impressions with professionally designed business cards.',
      features: [
        'Digital & physical designs',
        'Premium material options',
        'Unlimited revisions',
        'Printing coordination',
        'Special finishes available',
      ],
      pricing: '₹50 - ₹200',
    },
    6: {
      name: 'Xerox Services',
      title: 'Professional Xerox Services',
      description: 'High-quality copying and printing for all your documentation needs.',
      features: [
        'Color & B&W copying',
        'Large format printing',
        'Document binding',
        'Fast service',
        'Competitive pricing',
      ],
      pricing: 'From ₹0.10 per page',
    },
  };

  const service = serviceDetails[id] || serviceDetails[1];

  return (
    <main className="min-h-screen bg-luxury-light pt-32 md:pt-48 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/services" className="flex items-center gap-2 text-luxury-gold mb-8 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> Back to Services
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-lg p-8 md:p-12"
        >
          <h1 className="text-5xl font-serif font-bold mb-2">{service.name}</h1>
          <p className="text-2xl text-luxury-gold mb-8">{service.title}</p>

          <p className="text-lg text-gray-700 mb-12">{service.description}</p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">What's Included</h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-luxury-gold text-2xl mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">Pricing</h3>
                <p className="text-3xl text-luxury-gold font-bold mb-8">{service.pricing}</p>
                <p className="text-gray-600 mb-8">
                  Custom pricing available for larger projects. Contact us for a detailed quote.
                </p>
              </div>

              <div className="space-y-4">
                <button className="w-full px-6 py-3 bg-luxury-gold text-black font-semibold rounded hover:bg-yellow-300 transition">
                  Get a Quote
                </button>
                <Link
                  to="/contact"
                  className="block w-full px-6 py-3 border border-luxury-gold text-luxury-gold font-semibold rounded text-center hover:bg-luxury-gold/10 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
