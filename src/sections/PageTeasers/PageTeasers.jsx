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
              className="group"
            >
              <Link to={teaser.path} className="block h-full bg-brand-dark border border-white/5 p-8 rounded-3xl transition-all hover:border-brand-orange/30 hover:bg-brand-dark/80">
                <div className={`w-14 h-14 ${teaser.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform`}>
                  <teaser.icon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  {teaser.title}
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-orange" />
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {teaser.desc}
                </p>
                <span className="text-brand-orange font-bold text-sm uppercase tracking-widest">Ver más</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageTeasers;
