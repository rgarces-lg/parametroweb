import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const title = "Determinación y validación del mejor y más rentable uso de suelo.";
  const subtitle = "Inteligencia de datos, volumetría paramétrica y arquitectura financiera en un día. Toma decisiones respaldadas por el mercado, no por la intuición.";
  const cta = "Validar el más rentable uso de suelo";
  
  const WhatsAppLink = "https://wa.me/528112777073";

  const scrollToNext = () => {
    const nextSection = document.getElementById('servicios');
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Image with CSS Overlay */}
      <div className="absolute inset-0 z-0 scale-105">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Arquitectura Financiera Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-16">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-2xl"
          >
            {title}
          </h1>
          
          <p 
            className="text-base md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            {subtitle}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href={WhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-[#f25a29] hover:bg-[#ff7a4d] text-white px-10 py-4 rounded-full text-lg font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-[0_15px_30px_rgba(242,90,41,0.3)]">
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/40 hover:text-white transition-colors"
      >
        <ChevronDown size={40} strokeWidth={1} />
      </motion.button>
    </section>
  );
};

export default Hero;
