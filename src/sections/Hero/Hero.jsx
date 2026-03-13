import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const title = "Determinación y validación del mejor y mas rentable uso de suelo.";
  const subtitle = "Inteligencia de datos, volumetría paramétrica y arquitectura financiera en un día. Toma decisiones respaldadas por el mercado, no por la intuición.";
  const cta = "Validar el más rentable uso de suelo";
  
  const WhatsAppLink = "https://wa.me/528112777073";

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Architecture Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight px-4"
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed px-4"
          >
            {subtitle}
          </motion.p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href={WhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto"
            >
              <button className="w-full md:w-auto bg-brand-orange hover:bg-white hover:text-brand-orange text-white px-10 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-brand-orange/20">
                {cta}
              </button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Button */}
      <motion.button
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-brand-orange transition-colors"
      >
        <ChevronDown size={40} strokeWidth={1.5} />
      </motion.button>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-brand-orange"></div>
        <div className="flex-1 bg-brand-slate"></div>
        <div className="flex-1 bg-brand-teal"></div>
      </div>
    </section>
  );
};

export default Hero;


