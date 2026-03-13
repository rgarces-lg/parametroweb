import React from 'react';
import { motion } from 'framer-motion';
import ServicesShowcase from '../sections/Services/ServicesShowcase';
import LegacyServicesGrid from '../sections/Services/LegacyServicesGrid';
import ProductDef from '../sections/ProductDef/ProductDef';
import contentData from '../data/content.json';

const ServiciosPage = () => {
  return (
    <div className="bg-brand-black pt-20">
      {/* Minimal Hero for Services Page */}
      <section className="py-20 bg-brand-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Portafolio de <br />
              <span className="text-brand-orange italic">Soluciones.</span>
            </h1>
            <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
              Desde la investigación de mercado inicial hasta la tokenización de activos, 
              cubrimos cada fase del ciclo de vida inmobiliario comercial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy Services Grid (The info requested by user) */}
      <LegacyServicesGrid />

      {/* Product Definition (Recreated component) */}
      <ProductDef data={contentData.productDefinition} />

      {/* Deep Dive Services (The PDF-extracted ones) */}
      <ServicesShowcase />

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">¿Listo para validar tu próximo desarrollo?</h2>
          <a 
            href="https://wa.me/528112777073"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-brand-orange hover:bg-white hover:text-brand-orange text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-brand-orange/20">
              Agendar Consultoría Estratégica
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServiciosPage;

