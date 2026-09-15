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
                  <div className="text-black/30 text-5xl font-display font-bold">
                    {value.id}
                  </div>
                  
                  <div className="mt-auto">
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
                          className="text-mid-grey text-base"
                        >
                          {value.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Abstract texture background for active */}
                <div className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-700 bg-gradient-to-tr from-black/5 to-transparent",
                  isActive && "opacity-100"
                )}></div>
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
                className="bg-white rounded-2xl border border-black/5 p-6 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <span className="text-black/30 font-display font-bold">{value.id}</span>
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
                      <p className="text-mid-grey pt-4 text-sm">
                        {value.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
