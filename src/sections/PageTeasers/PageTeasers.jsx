import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Layers, LayoutGrid, Briefcase } from 'lucide-react';

const PageTeasers = () => {
  const teasers = [
    {
      title: "Servicios",
      desc: "Portafolio completo de soluciones: desde investigación hasta Smart Contracts.",
      path: "/servicios",
      icon: Briefcase,
      color: "bg-brand-orange"
    },
    {
      title: "Metodología",
      desc: "El rigor científico detrás de nuestra asesoría estratégica en 4 fases.",
      path: "/metodologia",
      icon: Layers,
      color: "bg-brand-teal"
    },
    {
      title: "Tipologías",
      desc: "Dominio de formatos: desde Strip Malls hasta Fashion Malls de gran escala.",
      path: "/tipologias",
      icon: LayoutGrid,
      color: "bg-brand-emerald"
    },
    {
      title: "Estudio de Mercado",
      desc: "Data Room analítico con inteligencia de absorción y precios en tiempo real.",
      path: "/estudio-mercado",
      icon: BarChart3,
      color: "bg-brand-orange/70"
    }
  ];

  return (
    <section className="py-24 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Explora nuestras verticales</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Selecciona el área de interés para profundizar en nuestra inteligencia inmobiliaria.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {teasers.map((teaser, index) => (
            <motion.div
              key={teaser.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group h-full"
            >
              <Link to={teaser.path} className="block h-full bg-brand-light p-8 rounded-[2rem] transition-all hover:shadow-2xl hover:shadow-brand-orange/20 relative overflow-hidden flex flex-col border border-brand-orange/10 group-hover:border-brand-orange/30">
                {/* Accent Orange Line at top - always visible, but grows on hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-orange group-hover:h-2 transition-all duration-300" />
                
                <div className="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-brand-orange/20">
                  <teaser.icon className="text-white w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-black text-brand-dark mb-3 flex items-center justify-between">
                  {teaser.title}
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-orange" />
                </h3>
                
                <p className="text-brand-dark/70 leading-relaxed mb-6 font-medium text-sm">
                  {teaser.desc}
                </p>
                
                <div className="mt-auto flex items-center gap-2">
                  <span className="text-brand-orange font-black text-[10px] uppercase tracking-[0.2em]">Explorar concepto</span>
                  <div className="h-[1px] flex-grow bg-brand-orange/20" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageTeasers;
