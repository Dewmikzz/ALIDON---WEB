import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Company', href: '#company' },
    { name: 'Business', href: '#business' },
    { name: 'Approach', href: '#approach' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // For smooth scrolling to sections
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
          isScrolled 
            ? 'py-4 bg-white/80 backdrop-blur-md border-b border-gray-100/50 shadow-sm' 
            : 'py-6 bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex flex-col leading-none z-50">
            <span className={cn("font-display font-bold tracking-tight transition-colors duration-300", isMobileMenuOpen ? "text-white" : "text-black text-xl")}>
              IMR
            </span>
            <span className={cn("text-[0.65rem] font-medium tracking-[0.2em] transition-colors duration-300", isMobileMenuOpen ? "text-white/80" : "text-gray-500")}>
              DEVELOPMENT
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center bg-black/5 backdrop-blur-sm rounded-full px-6 py-2 border border-black/5">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm font-medium text-black/70 hover:text-black transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black/80 transition-colors flex items-center gap-2"
            >
              Get in Touch
              <span className="w-1.5 h-1.5 rounded-full bg-warm-yellow"></span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-30 bg-deep-navy flex flex-col justify-center px-6"
          >
            <ul className="flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-4xl font-display font-medium text-white hover:text-warm-yellow transition-colors block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 pt-12 border-t border-white/10"
            >
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-white text-deep-navy px-8 py-4 rounded-full text-sm font-medium hover:bg-white/90 transition-colors inline-block"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
