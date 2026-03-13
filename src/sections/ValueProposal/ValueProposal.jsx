import React from 'react';
import { motion } from 'framer-motion';
import valueImage from '../../assets/value_proposal.png';

const ValueProposal = () => {
  return (
    <section className="py-24 bg-brand-slate text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">Propuesta de Valor</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Diseños validados por el mercado, <span className="text-brand-teal">respaldados por datos.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            No solo diseñamos proyectos inmobiliarios; construimos modelos de negocio rentables. Nuestra metodología integra el análisis financiero profundo con la arquitectura estratégica para asegurar el éxito de tu inversión.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 relative shadow-2xl">
            <img 
              src={valueImage} 
              alt="Architectural Value" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-60"></div>
            
            {/* Overlay Metric */}
            <div className="absolute bottom-10 left-10">
              <div className="text-5xl font-black text-white mb-1">+35%</div>
              <div className="text-brand-orange text-xs font-bold uppercase tracking-[0.25em]">ROI Promedio Optimizado</div>
            </div>
          </div>
          
          {/* Abstract geometric decoration */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange/10 blur-[80px] rounded-full group-hover:bg-brand-orange/20 transition-colors"></div>
        </motion.div>
      </div>
    </section>

  );
};

export default ValueProposal;
