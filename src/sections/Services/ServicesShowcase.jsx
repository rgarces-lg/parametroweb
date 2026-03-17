import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Target, 
  PieChart, 
  Palette, 
  Globe, 
  Briefcase, 
  Handshake, 
  Shapes, 
  ShieldCheck,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const ServicesShowcase = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      name: "Estudio de Mercado",
      nameEn: "Market Research",
      icon: BarChart3,
      description: "Análisis exhaustivo de oferta y demanda para identificar brechas de mercado y cuantificar la demanda insatisfecha, asegurando una estrategia clara de diferenciación.",
      deliverables: [
        "Estudios de oferta (precios, inventarios y superficies)",
        "Estudios de demanda (perfiles psicográficos, preferencias NSE)",
        "Identificación de brechas de mercado",
        "Benchmarking competitivo y enfoque en diferenciación",
        "Definición de volumetrías totales",
        "Tipologías, diferenciadores y factores de éxito",
        "Costos totales"
      ],
      color: "from-brand-orange to-orange-600"
    },
    {
      id: 2,
      name: "Definición de Producto",
      nameEn: "Product Definition",
      icon: Target,
      description: "Traducción de hallazgos de mercado en especificaciones tangibles de producto para crear una propuesta de valor irresistible alineada con las expectativas del mercado.",
      deliverables: [
        "Definición de Mix (unidades, m2, amenidades y acabados)",
        "Análisis de 'Tribus' de mercado objetivo",
        "Estrategia de precios y determinación de absorción",
        "Propuestas de aptitud y funcionalidad",
        "Estrategia de cobranza"
      ],
      color: "from-brand-teal to-emerald-600"
    },
    {
      id: 3,
      name: "Análisis Financiero",
      nameEn: "Financial Strategy",
      icon: PieChart,
      description: "Estructuración financiera sólida diseñada para maximizar retornos y minimizar riesgos de inversión mediante modelado riguroso.",
      deliverables: [
        "Definición de estructura de capital y deuda",
        "Proyecciones de flujo de caja y análisis de sensibilidad",
        "Indicadores financieros (TIR, ROE, ROI, Múltiplo)",
        "Modelado de proforma y modelo de negocio"
      ],
      color: "from-brand-emerald to-teal-600"
    },
   
    {
      id: 8,
      name: "Arquitectura Paramétrica",
      nameEn: "Financial Design",
      icon: Shapes,
      description: "Diseño arquitectónico impulsado por parámetros de negocio y rentabilidad, coordinando ingeniería y estética.",
      deliverables: [
       "Master plan a un nivel volumétrico"
      ],
      color: "from-brand-teal/60 to-brand-teal"
    },
    {
      id: 9,
      name: "Smart Contracts",
      nameEn: "Blockchain & AI",
      icon: ShieldCheck,
      description: "Innovación en financiamiento y ventas mediante la digitalización de contratos y activos utilizando tecnología blockchain.",
      deliverables: [
        "Estrategia de crowdfunding vía tokenización",
        "Planes legales y fiscales para digitalización",
        "Programación de interfaces Blockchain",
        "Análisis de ventas y ejecución impulsado por IA"
      ],
      color: "from-brand-emerald/60 to-brand-emerald"
    }
  ];

  return (
    <section className="py-24 bg-brand-light relative overflow-hidden min-h-screen border-t border-brand-dark/5">
      {/* Background Texture: Architectural Dots */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#505357 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Faded Background Reference Image */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.03] pointer-events-none grayscale">
          <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=1932&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-brand-orange font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Portfolio de Capacidades</span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark leading-[0.9] tracking-tighter uppercase">
              Servicios de <br />
              <span className="text-brand-orange italic">Inteligencia Inmobilaria.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-brand-dark/10"
          >
            <p className="text-brand-dark/70 max-w-2xl text-lg lg:text-xl font-bold leading-tight">
              Soluciones analíticas y estratégicas diseñadas para mitigar riesgos financieros y comerciales y maximizar el rendimiento de tus activos.
            </p>
            <div className="hidden lg:block">
                <div className="w-12 h-12 rounded-full border border-brand-orange/30 flex items-center justify-center">
                    <CheckCircle2 className="text-brand-orange w-5 h-5" />
                </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              layoutId={`card-${service.id}`}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              className={`group relative h-auto bg-white border border-brand-dark/5 rounded-b-[2.5rem] p-8 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-brand-orange/10 ${activeService === service.id ? 'ring-2 ring-brand-orange/20' : ''}`}
            >
              {/* Subtle Card Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange/10 group-hover:bg-brand-orange transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-brand-orange rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-orange/20 group-hover:rotate-6 transition-transform duration-500">
                  <service.icon className="text-white w-7 h-7" />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-brand-dark group-hover:text-brand-orange transition-colors leading-tight uppercase tracking-tighter">{service.name}</h3>
                  <p className="text-brand-orange/60 text-[9px] font-black tracking-widest uppercase font-mono mt-1">{service.nameEn}</p>
                </div>

                <p className="text-brand-dark/60 text-sm font-bold leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-brand-orange">
                  <span>{activeService === service.id ? "Ocultar detalles" : "Entregables"}</span>
                  <div className={`p-1.5 rounded-full border border-brand-orange/20 transition-all duration-500 ${activeService === service.id ? 'bg-brand-orange text-white rotate-90' : 'text-brand-orange'}`}>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>

                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="pt-6 border-t border-brand-dark/5 space-y-3"
                    >
                      {service.deliverables.map((item, i) => (
                        <motion.div 
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          key={i} 
                          className="flex gap-3 text-[11px] font-bold text-brand-dark/70 items-start"
                        >
                          <CheckCircle2 className="w-3 h-3 text-brand-orange shrink-0 mt-0.5" />
                          <span className="leading-tight uppercase tracking-tight">{item}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
