import React from 'react';
import { motion } from 'framer-motion';

const LegacyServicesGrid = () => {
  const services = [
    {
      id: "01",
      title: "Diseño Inteligente",
      desc: "Diseño inteligente bajo parámetros de negocio y/o comerciales y financieros."
    },
    {
      id: "02",
      title: "Definición de Producto",
      desc: "Definición de producto en Proforma Dinámica."
    },
    {
      id: "03",
      title: "Arquitectura y Conceptualización",
      desc: "Arquitectura y conceptualización paramétrica que optimiza tanto espacios como negocio."
    },
    {
      id: "04",
      title: "Proyección Ilimitada",
      desc: "Proyección ilimitada de diseños y proyectos."
    },
    {
      id: "05",
      title: "Análisis Financieros",
      desc: "Análisis financieros ilimitados de proyectos."
    },
    {
      id: "06",
      title: "Estrategia Comercial",
      desc: "Estrategia comercial y financiera diseñada a medida."
    },
    {
      id: "07",
      title: "Validación de Suelo",
      desc: "Conceptualización y validación del mejor y más rentable uso de suelo para el proyecto."
    }
  ];

  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
           <h2 className="text-3xl md:text-4xl font-black text-white">
             Servicios a <span className="text-brand-orange">Dueños de tierra, fondos de inversión, family offices, instituciones financieras, arquitectos e ingenieros.</span>
           </h2>
           <div className="w-full h-px bg-white/10 mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-dark/50 border border-white/5 p-8 rounded-3xl hover:border-brand-orange/30 transition-all group h-full"
            >
              <div className="text-4xl font-black text-brand-orange/20 mb-6 group-hover:text-brand-orange transition-colors">
                {s.id}
              </div>
              <p className="text-white text-lg leading-relaxed font-medium">
                {s.desc.split(' ').map((word, index) => (
                  <span key={index} className={
                    ['comerciales', 'financieros.', 'Proforma', 'Dinámica.', 'rentable', 'uso', 'suelo'].includes(word.replace(/[.,]/g,'')) 
                    ? 'font-black' : ''
                  }>
                    {word}{' '}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacyServicesGrid;
