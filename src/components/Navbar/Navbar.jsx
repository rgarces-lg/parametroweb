import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Metodología', path: '/metodologia' },
    { name: 'Tipologías', path: '/tipologias' },
    { name: 'Estudio de Mercado', path: '/estudio-mercado' },
  ];

  const WhatsAppLink = "https://wa.me/528112777073";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl shadow-brand-orange/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center group relative z-50">
          <div className="w-24 h-12 transform group-hover:scale-105 transition-all duration-500">
             <img src="/logo.png" alt="Parámetro Logo" className="w-full h-full object-contain object-left" />
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-white ${
                  isActive ? 'text-brand-orange' : 'text-gray-400'
                }`
              }
            >
              <div className="flex flex-col items-center group">
                {link.name}
                <motion.div 
                  initial={false}
                  animate={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="h-[2px] bg-brand-orange mt-1 transition-all"
                />
              </div>
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-50">
          <a 
            href={WhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <button className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white px-7 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-orange/20">
              Validar Proyecto
            </button>
          </a>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center text-white bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 h-screen bg-brand-black flex flex-col items-center justify-center gap-8 z-40 lg:hidden p-6"
            >
              <div className="flex flex-col items-center gap-8 w-full max-w-xs">
                {navLinks.map((link, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={link.path}
                    className="w-full text-center"
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => 
                        `text-3xl font-black uppercase tracking-tighter block transition-colors ${
                          isActive ? 'text-brand-orange' : 'text-white hover:text-brand-orange'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="w-full mt-8"
                >
                  <a 
                    href={WhatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <button className="w-full bg-brand-orange text-white py-5 rounded-2xl text-lg font-black uppercase tracking-widest shadow-2xl shadow-brand-orange/30 flex items-center justify-center gap-3">
                      <MessageSquare size={24} />
                      Validar Proyecto
                    </button>
                  </a>
                </motion.div>
              </div>

              {/* Decorative backgrounds for mobile menu */}
              <div className="absolute top-1/4 -left-20 w-64 h-64 bg-brand-orange/10 blur-[100px] rounded-full" />
              <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-brand-teal/10 blur-[100px] rounded-full" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

