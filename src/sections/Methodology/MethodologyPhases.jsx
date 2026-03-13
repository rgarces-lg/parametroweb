import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database, Ruler, Landmark, BarChart4, ArrowRight } from 'lucide-react';

const MethodologyPhases = () => {
  const phases = [
    {
      id: "01",
      title: "Investigación y Data",
      icon: Database,
      items: [
        "Análisis del entorno y plaza",
        "Tasas de absorción de la zona",
        "Definición de productos ancla",
        "Segmentación psicográfica"
      ],
      desc: "Demostramos dominio total del entorno mediante inteligencia de datos real."
    },
    {
      id: "02",
      title: "Volumetría y Geometría",
      icon: Ruler,
      items: [
        "Validación arquitectónica física",
        "Coeficientes de uso de suelo",
        "Reglamentos municipales",
        "Maximización de m2 vendibles"
      ],
      desc: "Determinamos el mejor uso físico del terreno bajo criterios comerciales y legales."
    },
    {
      id: "03",
      title: "Estrategia y Estructura",
      icon: Landmark,
      items: [
        "Ingeniería financiera de negocios",
        "Estructura de Capital (Equity vs Deuda)",
        "Cascada de pagos y participaciones",
        "Apalancamiento inteligente"
      ],
      desc: "Estructuramos el capital para asegurar la viabilidad y rentabilidad del proyecto."
    },
    {
      id: "04",
      title: "Análisis Financiero",
      icon: BarChart4,
      items: [
        "Cashflow dinámico en el tiempo",
        "Creación de proformas complejas",
        "Cálculo de TIR y ROI",
        "Periodo de Payback definitivo"
      ],
      desc: "La proyección final que valida matemáticamente el éxito del desarrollo."
    }
  ];

  return (
    <section className="py-24 bg-brand-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Rigor Científico
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Nuestra Metodología en <span className="text-brand-teal">4 Fases Estratégicas.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-20">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group bg-brand-dark border border-white/5 p-8 rounded-[2.5rem] hover:border-brand-orange/30 transition-all flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-orange/10 transition-colors">
                  <phase.icon className="text-brand-orange w-8 h-8" />
                </div>
                <span className="text-5xl font-black text-white/5 group-hover:text-brand-orange/10 transition-colors uppercase font-mono">
                  {phase.id}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {phase.desc}
              </p>

              <div className="mt-auto space-y-3">
                {phase.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-teal"></div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* New CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-brand-dark/50 border border-white/5 p-12 rounded-[3rem] text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Complementamos nuestra metodología con un <br />
            <span className="text-brand-orange">Portafolio Integral de Servicios.</span>
          </h3>
          <Link 
            to="/servicios" 
            className="inline-flex items-center gap-3 bg-white text-brand-black px-8 py-4 rounded-full font-bold hover:bg-brand-orange hover:text-white transition-all transform hover:scale-105"
          >
            Ver catálogo completo de servicios
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologyPhases;
