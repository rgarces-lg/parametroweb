import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const ProductDef = ({ data }) => {
    const [pdRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const differentiators = [
        { icon: "fa-solid fa-mountain-sun", text: "Tendencia y Tribus" },
        { icon: "fa-solid fa-city", text: "Producto a Diseñar" },
        { icon: "fa-solid fa-chart-line", text: "Mercado Meta" },
        { icon: "fa-solid fa-tools", text: "Base para Arquitectos" }
    ];

    return (
        <section ref={pdRef} className="py-24 bg-[#1a1a1a] relative overflow-hidden font-sans border-t border-white/5">
            {/* Texture Overlay: Architectural Doodles (Chalk style) */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none grayscale transition-opacity duration-1000">
                <img 
                    src="/doodle_texture.jpg" 
                    alt="" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-transparent to-[#1a1a1a]" />
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    
                    {/* LEFT COLUMN: Content */}
                    <div className="lg:w-[45%] pt-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-brand-orange text-5xl lg:text-7xl font-black mb-12 leading-[0.9] uppercase tracking-tight">
                                Definición de<br />Producto
                            </h2>

                            <div className="space-y-6 mb-16 max-w-lg">
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    No puede existir una lectura clara del mercado si ésta no se transforma en un producto que resuelva adecuadamente las oportunidades que se detectan.
                                </p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    En ese sentido, tampoco se concibe un producto como un elemento rígido sin capacidad de perfeccionarse. PARÁMETRO aporta una nueva visión en la que la clave es lograr iterar en múltiples ocasiones ante el mercado. Para lograr esta visión de trabajo iterativa, el desarrollo de producto comprende las siguientes etapas:
                                </p>
                            </div>

                            <div className="mt-12">
                                <span className="text-brand-orange text-xs font-bold uppercase tracking-widest block mb-8">Producto Diferenciador</span>
                                <div className="grid grid-cols-2 gap-y-10 gap-x-6">
                                    {differentiators.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <div className="text-white text-xl w-6 flex justify-center">
                                                <i className={item.icon}></i>
                                            </div>
                                            <span className="text-white font-medium text-[11px] uppercase tracking-wide">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: The Diagram */}
                    <div className="lg:w-[55%] pt-10 relative flex justify-center">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 1 }}
                            className="relative w-[340px] h-[340px] md:w-[540px] md:h-[540px]"
                        >
                            {/* Circles Container */}
                            <div className="absolute inset-0 border border-white/20 rounded-full flex flex-col items-center">
                                {/* Outer Label */}
                                <span className="text-white font-bold text-xs uppercase tracking-widest mt-12">Meta Producto</span>
                                
                                {/* Inner Circles */}
                                <div className="absolute inset-[10%] border border-white/20 rounded-full flex flex-col items-center">
                                    <span className="text-white font-bold text-xs uppercase tracking-widest mt-10">Producto Ampliado</span>
                                    
                                    {/* Middle Ring Icons */}
                                    <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 text-white/40 text-2xl">
                                        <i className="fa-solid fa-atom"></i>
                                    </div>
                                    <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 text-white/40 text-2xl">
                                        <i className="fa-solid fa-up-right-from-square"></i>
                                    </div>

                                    {/* Nucleo */}
                                    <div className="absolute inset-[24%] border-4 border-white rounded-full flex flex-col items-center justify-center">
                                        <span className="text-white font-bold text-xs md:text-sm uppercase tracking-widest mb-2">Producto Nuclear</span>
                                        <div className="text-gray-400 text-[10px] md:text-xs text-center font-bold">
                                            <p>• Distribuciones</p>
                                            <p>• Metrajes</p>
                                            <p>• Funcionalidad</p>
                                        </div>
                                    </div>

                                    {/* Ampliado Bottom Text */}
                                    <div className="absolute bottom-10 text-center w-full px-4">
                                        <p className="text-gray-400 text-[8px] md:text-[10px] font-bold tracking-tighter uppercase whitespace-nowrap">
                                            Amenidades • Áreas de Servicio • Estacionamiento
                                        </p>
                                    </div>
                                </div>

                                {/* Outer Bottom Text */}
                                <div className="absolute bottom-12 text-center w-full px-4">
                                    <h4 className="text-white text-[9px] md:text-xs font-bold uppercase mb-1">Fuera del Inmueble Dentro del Proyecto</h4>
                                    <p className="text-gray-400 text-[8px] md:text-[10px] font-bold uppercase tracking-tighter">
                                        Intangibles • Plusvalía • Diseño
                                    </p>
                                </div>

                                {/* Vertical Label */}
                                <div className="absolute right-[-30px] md:right-[-40px] top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] flex flex-col items-center gap-2">
                                    <span className="text-white/60 font-bold text-[10px] uppercase tracking-[0.3em]">Elementos de valoración cuantitativa</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Branding bottom right */}
                        <div className="absolute bottom-0 right-0 flex items-center gap-3 opacity-60">
                            <span className="text-white font-bold text-[9px] tracking-[0.2em] uppercase">Arquitectura Financiera</span>
                            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-brand-orange"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDef;




