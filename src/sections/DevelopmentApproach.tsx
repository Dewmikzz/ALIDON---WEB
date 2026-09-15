import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { developmentApproach } from '../data/content';

const DevelopmentApproach: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="approach" className="py-24 md:py-40 bg-black text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 md:mb-40"
        >
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-8">Places For Life</h2>
          <h3 className="text-[10vw] md:text-8xl lg:text-[9rem] leading-[0.85] font-display font-bold tracking-tighter">
            LIVE.<br />GROW.<br />CONNECT.
          </h3>
        </motion.div>

        <div className="space-y-32 md:space-y-48">
          {developmentApproach.map((approach, index) => {
            const isEven = index % 2 === 0;
            const images = [
              "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop"
            ];
            
            return (
              <div 
                key={approach.id}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative">
                  <motion.div 
                    initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' }}
                    whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className={`aspect-[4/5] md:aspect-square overflow-hidden bg-white/5 ${isEven ? 'rounded-tr-[100px]' : 'rounded-tl-[100px]'}`}
                  >
                    <motion.img 
                      style={{ y }}
                      src={images[index]} 
                      alt={approach.title}
                      className="w-full h-[120%] object-cover object-center grayscale-[20%]"
                    />
                  </motion.div>
                  {/* Floating Number */}
                  <div className={`absolute ${isEven ? '-right-6 -bottom-6' : '-left-6 -bottom-6'} text-[15vw] md:text-[10rem] font-display font-bold text-white/10 leading-none select-none z-10 mix-blend-difference`}>
                    {approach.id}
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <h4 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                      {approach.title}
                    </h4>
                    <p className="text-white/60 text-lg md:text-xl font-serif max-w-md">
                      {approach.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentApproach;
