import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const texts = [
    "Creating places that support people, families and communities.",
    "We are a trusted Bumiputera property developer."
  ];
  
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Initial delay to match previous animation timing
    if (!hasStarted) {
      const startTimer = setTimeout(() => {
        setHasStarted(true);
      }, 1200);
      return () => clearTimeout(startTimer);
    }

    const currentText = texts[textIndex];
    let typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && displayText === currentText) {
      typingSpeed = 5000; // Pause at end of sentence
      setIsDeleting(true);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      typingSpeed = 500; // Pause before new sentence
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting 
          ? currentText.substring(0, displayText.length - 1)
          : currentText.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, hasStarted]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black flex items-center">
      {/* Background Image / Video Placeholder */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6"
        >
          <p className="text-white/80 text-xs font-semibold tracking-[0.2em] uppercase">IMR Development Sdn. Bhd.</p>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] md:text-[8rem] lg:text-[10rem] leading-[0.85] font-display font-bold text-white tracking-tighter"
        >
          My Home<br/>My Paradise
        </motion.h1>

        <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.p 
            className="text-white/80 max-w-sm text-sm md:text-base leading-relaxed min-h-[48px]"
          >
            {displayText}
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block w-[2px] h-[1em] bg-white/80 ml-[2px] align-middle"
            />
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex gap-4"
          >
            <a 
              href="#approach" 
              className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Explore IMR
            </a>
            <a 
              href="#company" 
              className="border border-white/30 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Our Approach
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
