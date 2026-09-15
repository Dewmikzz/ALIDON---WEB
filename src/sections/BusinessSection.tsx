import React from 'react';
import { motion } from 'framer-motion';
import { businessAreas } from '../data/content';

const BusinessSection: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop", // Construction
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop" // Engineering
  ];

  return (
    <section id="business" className="py-24 md:py-32 px-6 lg:px-12 bg-off-white text-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-mid-grey mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight">CORE BUSINESS</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {businessAreas.map((area, index) => (
            <motion.div 
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl bg-white aspect-[4/3] lg:aspect-[3/2] flex flex-col justify-end p-8 cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={images[index]} 
                  alt={area.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500 group-hover:opacity-90"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-white/60 text-sm font-semibold mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {area.id}
                </div>
                <h4 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {area.title}
                </h4>
                <div className="overflow-hidden">
                  <p className="text-white/80 text-sm transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {area.description}
                  </p>
                </div>
              </div>

              {/* Conceptual Label */}
              <div className="absolute top-6 left-6 z-10">
                <div className="bg-black/30 backdrop-blur-md border border-white/20 text-white/80 text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-full">
                  Conceptual Visual
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
