import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import ServicesShowcase from '../sections/Services/ServicesShowcase';
import LegacyServicesGrid from '../sections/Services/LegacyServicesGrid';
import ProductDef from '../sections/ProductDef/ProductDef';
import contentData from '../data/content.json';

const ServiciosPage = () => {
  return (
    <div className="bg-brand-black pt-20">
      {/* 1. SECCIÓN HERO SERVICIOS (FONDO CLARO TEXTURIZADO) */}
      <section className="py-32 bg-brand-light relative overflow-hidden font-sans border-b border-brand-orange/10">
        {/* Texture Overlay: Architectural Dotted Pattern */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#505357 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
        
        {/* Decorative Background Image (Architectural Plan) - Faded */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none grayscale">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-light z-10" />
            <img src="/blueprint_texture.jpg" alt="" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <span className="text-brand-orange font-black tracking-[0.2em] uppercase text-xs block mb-4">
                  CAPABILITIES 2026
              </span>
              <h1 className="text-brand-dark text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-8">
                Portafolio de <br />
                <span className="text-brand-orange">Soluciones.</span>
              </h1>
              <div className="max-w-md">
                <p className="text-brand-dark/70 text-xl font-bold leading-tight border-l-4 border-brand-orange pl-6">
                  Desde la investigación de mercado hasta la conceptualización del más rentable proyecto para tu <span className="text-brand-orange underline decoration-2 underline-offset-4">terreno.</span>
                </p>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="lg:w-1/2 relative"
            >
                {/* Visual support: Clean glass-styled card or image */}
                <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl shadow-brand-orange/10 rotate-2">
                    <div className="aspect-video bg-gray-100 rounded-[2rem] overflow-hidden relative group">
                        <img 
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                            alt="Architecture" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
                {/* Floating Tech Badge */}
                <div className="absolute -bottom-6 -left-6 bg-brand-orange text-white p-6 rounded-3xl shadow-xl flex flex-col -rotate-3">
                    <span className="text-3xl font-black">15+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Años de Expertis</span>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy Services Grid (The info requested by user) */}
      <LegacyServicesGrid />

      {/* Product Definition (Recreated component) */}
      <ProductDef data={contentData.productDefinition} />

      {/* Deep Dive Services (The PDF-extracted ones) */}
      <ServicesShowcase />

      {/* 5. SECCIÓN CTA FINAL (FONDO CLARO CON TEXTURA) */}
      <section className="py-32 bg-brand-light relative overflow-hidden border-t border-brand-orange/10">
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#505357 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-1 bg-brand-orange mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-10 tracking-tighter uppercase leading-tight">
              ¿Listo para validar tu <br />
              <span className="text-brand-orange italic">próximo desarrollo?</span>
            </h2>
            <p className="text-brand-dark/60 text-xl font-bold mb-12 max-w-2xl">
              Agenda una sesión estratégica y descubre cómo nuestra inteligencia paramétrica puede potenciar el valor de tu proyecto.
            </p>
            <a 
              href="https://wa.me/528112777073"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <button className="bg-brand-dark hover:bg-brand-orange text-white px-12 py-5 rounded-full text-xl font-black transition-all transform hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-4">
                Agendar Consultoría Ejecutiva
                <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiciosPage;

