import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, BarChart3, Building2, Gem } from 'lucide-react';

const ProcesoAnalitico = () => {
    const steps = [
        {
            title: "Diseña el Producto Ideal",
            desc: "El sistema determina el producto por estrategia o parámetros establecidos.",
            icon: Target,
            color: "text-brand-orange"
        },
        {
            title: "Conceptualiza tipologías por objetivos",
            desc: "El mix de opciones se basa en segmentos y tendencias de consumo.",
            icon: Lightbulb,
            color: "text-brand-orange"
        },
        {
            title: "Análisis de Competencia en la Zona",
            desc: "Determina áreas de oportunidad para destacar proyectos.",
            icon: BarChart3,
            color: "text-brand-orange"
        },
        {
            title: "Producto Nuclear a Meta Producto",
            desc: "Diseño volumétrico que ofrece metrajes, tipologías y precios.",
            icon: Building2,
            color: "text-brand-orange"
        },
        {
            title: "Valor Agregado",
            desc: "Métodos para definir aumentos de precios y plusvalías emocionales.",
            icon: Gem,
            color: "text-brand-orange"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Text/Watermark similar to Image 3 */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex flex-col justify-around text-brand-black font-black select-none">
                <div className="text-[15rem] leading-none -ml-20">DATA</div>
                <div className="text-[15rem] leading-none text-right -mr-20">PROCESO</div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-brand-orange text-5xl md:text-6xl font-black mb-4 uppercase"
                    >
                        PROCESO
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-orange/80 text-xl md:text-2xl font-bold max-w-3xl mx-auto text-center"
                    >
                        El Camino de Datos hacia proyectos rentables, únicos e innovadores en minutos
                    </motion.p>
                </div>

                <div className="space-y-12 max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-8 group bg-gray-50/50 p-6 rounded-3xl border border-transparent hover:border-brand-orange/20 hover:bg-white hover:shadow-2xl hover:shadow-brand-orange/5 transition-all duration-500"
                        >
                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl border-2 border-brand-orange flex items-center justify-center bg-white group-hover:bg-brand-orange transition-all duration-500 shadow-xl shadow-brand-orange/10 group-hover:shadow-brand-orange/30">
                                <step.icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-black text-brand-black mb-2 uppercase tracking-tight group-hover:text-brand-orange transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 text-lg font-medium leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Branding inside section matching style */}
                <div className="mt-20 flex justify-end items-center gap-3 opacity-30">
                    <span className="text-[10px] font-black tracking-widest uppercase text-brand-black">Arquitectura Financiera</span>
                    <div className="w-3 h-3 bg-brand-orange clip-path-triangle" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                </div>
            </div>
        </section>
    );
};

export default ProcesoAnalitico;
