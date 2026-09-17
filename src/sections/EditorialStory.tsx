import React from 'react';
import { motion } from 'framer-motion';

const EditorialStory: React.FC = () => {
  return (
    <section className="py-32 md:py-48 px-6 lg:px-12 bg-white text-black flex items-center justify-center min-h-[70vh]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold tracking-tight leading-[1.1] uppercase">
            We don't just<br />create spaces.
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="h-[2px] bg-black max-w-xs mx-auto my-12"
          />
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold tracking-tight leading-[1.1] uppercase text-mid-grey">
            We create<br />places  for<br /> empty land to future development.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default EditorialStory;
