import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { coreValues } from '../data/content';
import { cn } from '../utils/cn';

const ValuesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-off-white text-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-mid-grey mb-4">How We Work</h2>
          <h3 className="text-2xl md:text-3xl font-serif text-mid-grey max-w-2xl italic">
            The principles that guide our decisions, relationships and delivery.
          </h3>
        </motion.div>

        {/* Desktop Interactive Layout */}
        <div className="hidden md:flex gap-4 h-[500px]">
          {coreValues.map((value, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={value.id}
                onMouseEnter={() => setActiveIndex(index)}
                layout
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 bg-white border border-black/5",
                  isActive ? "flex-[3]" : "flex-[1]"
                )}
              >
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className={cn(
                    "text-5xl font-display font-bold transition-colors duration-500",
                    isActive ? "text-white/50" : "text-black/30"
                  )}>
                    {value.id}
                  </div>
                  
                  <div className={cn(
                    "mt-auto transition-colors duration-500",
                    isActive ? "text-white" : "text-black"
                  )}>
                    <h4 className="text-2xl font-display font-bold mb-4 whitespace-nowrap">
                      {value.title}
                    </h4>
                    
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-white/80 text-base"
                        >
                          {value.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Image background for active */}
                <div className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-700 z-0",
                  isActive && "opacity-100"
                )}>
                  <img src={(value as any).image} alt={value.title} className="w-full h-full object-cover filter brightness-[0.4] grayscale-[30%]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {coreValues.map((value, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={value.id}
                onClick={() => setActiveIndex(isActive ? -1 : index)}
                className="relative bg-white rounded-2xl border border-black/5 p-6 cursor-pointer overflow-hidden transition-colors duration-500"
              >
                {/* Mobile Image Background */}
                <div className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-700 z-0",
                  isActive && "opacity-100"
                )}>
                  <img src={(value as any).image} alt={value.title} className="w-full h-full object-cover filter brightness-[0.4] grayscale-[30%]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="relative z-10">
                  <div className={cn(
                    "flex justify-between items-center transition-colors duration-500",
                    isActive ? "text-white" : "text-black"
                  )}>
                    <div className="flex items-center gap-4">
                      <span className={cn(
                        "font-display font-bold transition-colors duration-500",
                        isActive ? "text-white/50" : "text-black/30"
                      )}>{value.id}</span>
                      <h4 className="text-lg font-display font-bold">{value.title}</h4>
                    </div>
                    <div className={cn("transform transition-transform duration-300", isActive ? "rotate-45" : "")}>
                      +
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/80 pt-4 text-sm">
                          {value.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
