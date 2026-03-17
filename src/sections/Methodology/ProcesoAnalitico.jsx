import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Search, Building2, Gem } from 'lucide-react';
import phase2Img from '../../assets/images/methodology/phase2.png';

const ProcesoAnalitico = () => {
    const steps = [
        {
            title: "Diseña el Producto Ideal",
            desc: "El sistema determina el producto por tipo de desarrollo, zona, por estrategia o parámetros establecidos por el profesional.",
            icon: Target
        },
        {
            title: "Conceptualiza y determina las tipologías de los productos por objetivos",
            desc: "Se determinan las características del mix de opciones volumétricas por tipo de proyecto, segmentos objetivos, tendencias de consumo, necesidades que influyen, desde la velocidad de venta hasta la rentabilidad del proyecto.",
            icon: Users
        },
        {
            title: "Análisis de Competencia y Ofertados en la Zona",
            desc: "El sistema localiza y determina áreas de oportunidad para destacar los tipos de proyectos y sus conceptos volumétricos para el mix de opciones, y los valores de venta o renta a proyectar.",
            icon: Search
        },
        {
            title: "Propuesta de Producto Nuclear a Meta Producto",
            desc: "Proponemos las características dentro del proyecto que los prospectos buscan. El diseño volumétrico en proforma ofrece metrajes, tipologías, rango de precios a venta, renta, costos, e indicadores de negocio propuesto y financieros del tipo de proyecto definido.",
            icon: Building2
        },
        {
            title: "Propuesta de Producto Ampliado o Valor Agregado",
            desc: "El sistema diseña métodos para definir lista y aumentos de precios, plusvalías; acordes a estrategias comerciales, o de cobranza, que a su vez detonen en estrategias de urgencia emocional o sentido de pertenencia por un lado y por el otro estrategia de flujos.",
            icon: Gem
        }
    ];

    return (
        <section id="proceso-analitico" className="py-32 bg-[#ffffff] relative overflow-hidden font-sans border-t border-[#f25a29]/5">
            {/* Texture Overlay: Architectural Dotted Pattern */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#505357 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>

            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-5 pointer-events-none">
                <img src={phase2Img} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    
                    {/* LEFT COLUMN: Header */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="sticky top-40"
                        >
                            <h2 className="text-[#f25a29] text-6xl md:text-7xl font-black mb-10 tracking-tighter uppercase">
                                PROCESO
                            </h2>
                            <div className="max-w-xs">
                                <p className="text-[#505357]/80 text-xl font-bold leading-tight">
                                    El Camino de Datos hacia proyectos rentables, únicos e innovadores en <span className="text-[#f25a29]">minutos</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Steps */}
                    <div className="lg:w-2/3 flex flex-col">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex items-start gap-8 py-10 group border-t border-[#505357]/10 first:border-t-0 transition-all duration-500 hover:bg-white/40 px-4 rounded-xl`}
                            >
                                {/* Icon Container with specific image-like circle style */}
                                <div className="flex-shrink-0 w-16 h-16 rounded-full border border-[#f25a29]/30 flex items-center justify-center bg-white shadow-sm transition-all duration-500 group-hover:bg-[#f25a29] group-hover:border-[#f25a29] group-hover:shadow-[0_10px_20px_rgba(242,90,41,0.2)]">
                                    <step.icon className="w-7 h-7 text-[#f25a29] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                                </div>

                                <div className="flex flex-col">
                                    <h3 className="text-[#505357] text-2xl font-black mb-3 group-hover:text-[#f25a29] transition-colors duration-500 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#505357]/70 text-lg leading-relaxed font-medium transition-colors duration-500 group-hover:text-[#505357]">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Vertical Decorative Divider (Tech lines) */}
                <div className="mt-24 border-t border-[#f25a29]/10 pt-10 flex justify-between items-center opacity-40">
                    <div className="flex gap-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-2 h-2 rounded-full bg-[#f25a29]" />
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#505357]">Arquitectura Paramétrica</span>
                        <div className="w-10 h-[1px] bg-[#f25a29]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcesoAnalitico;

