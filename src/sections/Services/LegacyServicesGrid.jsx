import React from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text }) => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const childVariants = {
    visible: {
      opacity: 1,
      display: "inline",
    },
    hidden: {
      opacity: 0,
      display: "none",
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      className="inline-block"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={childVariants}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[3px] h-[0.7em] bg-brand-orange ml-1 align-middle"
      />
    </motion.span>
  );
};

const LegacyServicesGrid = () => {
  const targetText = "Dueños de tierra, fondos de inversión, family office, financieras, arquitectos e ingenieros.";
  
  const services = [
    {
      id: "01",
      title: "Diseño Inteligente",
      desc: "Diseño inteligente bajo parámetros de negocios comerciales y financieros."
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
      desc: "Proyección limitada de diseños e ingenieras financieras. "
    },
    {
      id: "05",
      title: "Análisis Financieros",
      desc: "Análisis financieros y estructuras de participación."
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
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative Grid for depth */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(#f7f5ef 1px, transparent 1px), linear-gradient(90deg, #f7f5ef 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
           <span className="text-brand-orange font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">SERVICIOS CORE</span>
           <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] max-w-5xl tracking-tighter">
             Inteligencia estratégica para: <br />
             <span className="text-brand-orange text-2xl md:text-4xl block mt-4 min-h-[1.5em]" style={{ fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace", fontStyle: "normal" }}>
               <Typewriter text={targetText} />
             </span>
           </h2>
           <div className="w-20 h-1 bg-brand-orange mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="h-full bg-brand-light p-10 rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:shadow-brand-orange/20 relative overflow-hidden border border-brand-orange/5 flex flex-col">
                {/* Visual Accent: Orange line that grows on hover */}
                <div className="absolute top-0 left-0 w-full h-[6px] bg-brand-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                
                <div className="text-5xl font-black text-brand-orange/10 mb-8 group-hover:text-brand-orange/80 transition-colors">
                  {s.id}
                </div>
                
                <h3 className="text-2xl font-black text-brand-dark mb-6 leading-tight group-hover:translate-x-1 transition-transform">
                  {s.title}
                </h3>

                <p className="text-brand-dark/70 text-lg leading-relaxed font-bold">
                  {s.desc.split(' ').map((word, index) => (
                    <span key={index} className={
                      ['comerciales', 'financieros.', 'Proforma', 'Dinámica.', 'rentable', 'uso', 'suelo'].includes(word.replace(/[.,]/g,'')) 
                      ? 'text-brand-orange' : ''
                    }>
                      {word}{' '}
                    </span>
                  ))}
                </p>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacyServicesGrid;
