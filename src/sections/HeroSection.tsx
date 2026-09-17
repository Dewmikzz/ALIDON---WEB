import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const texts = [
    "Take creating places all"
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

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
      {/* Background Video */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <video
          autoPlay
          muted
          playsInline
          onEnded={() => setIsVideoEnded(true)}
          className="w-full h-full object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Reveal Image at end of video with split animation */}
      <motion.div
        initial={{ clipPath: "inset(0 50% 0 50%)" }}
        animate={isVideoEnded ? { clipPath: "inset(0 0% 0 0%)" } : { clipPath: "inset(0 50% 0 50%)" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <img src="/wisma-pahlawan.jpg" alt="Wisma Pahlawan Building Exterior - IMR Development Headquarters" className="w-full h-full object-cover" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80 z-10 pointer-events-none"></div>

      <div className="relative z-20 h-full flex flex-col justify-center px-6 lg:px-12 w-full max-w-7xl mx-auto pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >

          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] md:text-[6rem] lg:text-[8rem] leading-[0.9] font-display font-bold text-white tracking-tighter"
          >
            My Home<br />My Paradise.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-display italic text-white/90 mt-2 md:mt-4"
          >
            "Rumahku syurgaku"
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 md:mt-8 text-white/90 max-w-2xl text-lg md:text-xl lg:text-2xl leading-relaxed min-h-[64px] md:min-h-[80px] font-light"
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block w-[3px] h-[1em] bg-white ml-[4px] align-middle"
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#approach"
              className="bg-white text-black px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-white/90 hover:scale-105 transition-all shadow-lg"
            >
              Explore IMR
            </a>
            <a
              href="#company"
              className="border border-white/30 text-white px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
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
