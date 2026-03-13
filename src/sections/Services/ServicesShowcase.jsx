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
        "Benchmarking competitivo y enfoque en diferenciación"
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
        "Propuestas de aptitud y funcionalidad"
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
      id: 4,
      name: "Concepto Creativo",
      nameEn: "Branding & Concept",
      icon: Palette,
      description: "Desarrollo de una identidad de marca poderosa y un concepto central que otorga propósito y diferenciación a los proyectos inmobiliarios.",
      deliverables: [
        "Diseño de Naming y Logotipo",
        "Pitch creativo y Mood Boards",
        "Identidad gráfica completa (papelería, redes, publicidad)",
        "Definición de Memory Hook y Amenidad Estrella",
        "Diseño de la experiencia de compra"
      ],
      color: "from-brand-orange/80 to-brand-orange"
    },
    {
      id: 5,
      name: "Marketing Digital",
      nameEn: "Digital Structure",
      icon: Globe,
      description: "Infraestructura digital para la generación de leads de alto rendimiento y posicionamiento de marca en la era actual.",
      deliverables: [
        "Estrategia de Paid Media (Google Ads, Meta Ads)",
        "Gestión de redes sociales y creación de contenido",
        "Landing pages con formularios de captura",
        "Implementación de CRM y gestión de leads",
        "Reportes mensuales de performance (ROAS, conversiones)"
      ],
      color: "from-brand-teal/80 to-brand-teal"
    },
    {
      id: 6,
      name: "Dirección de Proyectos",
      nameEn: "Project Management",
      icon: Briefcase,
      description: "Administración profesional del ciclo de vida del proyecto, asegurando el cumplimiento de objetivos de alcance, costo y tiempo.",
      deliverables: [
        "WBS (Work Breakdown Structure) y Acta de Constitución",
        "Estimación de costos y control presupuestario",
        "Mapeo de riesgos y planes de mitigación",
        "Gestión de ciclo: Planeación, Ejecución, Control y Cierre"
      ],
      color: "from-brand-emerald/80 to-brand-emerald"
    },
    {
      id: 7,
      name: "Comercialización",
      nameEn: "Specialized Sales",
      icon: Handshake,
      description: "Estrategias integrales de venta y renta para todo tipo de proyectos inmobiliarios, incluyendo preventas y auditorías comerciales.",
      deliverables: [
        "Diseño de sistema de ventas y procedimientos",
        "Auditorías y dirección comercial",
        "Gestión de relaciones con grandes marcas y franquicias",
        "Estrategia publicitaria ATL y BTL"
      ],
      color: "from-brand-orange/60 to-brand-orange"
    },
    {
      id: 8,
      name: "Arquitectura Paramétrica",
      nameEn: "Financial Design",
      icon: Shapes,
      description: "Diseño arquitectónico impulsado por parámetros de negocio y rentabilidad, coordinando ingeniería y estética.",
      deliverables: [
        "Master Plan y proyectos ejecutivos",
        "Diseño de paisaje e interiores",
        "Visualizaciones 3D Renders y video",
        "Estudios bioclimáticos y solares",
        "Coordinación de ingenierías interdisciplinarias"
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
    <section className="py-24 bg-brand-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-orange font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Capabilities Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white leading-tight"
          >
            Servicios de <span className="text-brand-teal italic">Inteligencia Inmobilaria.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg"
          >
            Soluciones analíticas y estratégicas diseñadas para mitigar riesgos financieros y maximizar la plusvalía de tus activos.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              layoutId={`card-${service.id}`}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              className={`group relative h-[400px] bg-brand-dark/40 border border-white/5 rounded-[2.5rem] p-8 overflow-hidden cursor-pointer transition-all hover:border-brand-orange/30 ${activeService === service.id ? 'ring-2 ring-brand-orange/40' : ''}`}
            >
              {/* Background Glow */}
              <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="text-white w-7 h-7" />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">{service.name}</h3>
                  <p className="text-brand-teal/60 text-xs font-mono tracking-widest uppercase mt-1">{service.nameEn}</p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>

                <div className="mt-auto flex items-center justify-between text-xs font-bold uppercase tracking-widest text-brand-orange/80">
                  <span>{activeService === service.id ? "Ocultar detalles" : "Ver entregables"}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeService === service.id ? 'rotate-90' : ''}`} />
                </div>

                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-white/5 space-y-3"
                    >
                      {service.deliverables.map((item, i) => (
                        <div key={i} className="flex gap-3 text-xs text-gray-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                          <span>{item}</span>
                        </div>
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
