import React, { useRef, useState } from 'react';
import { motion, useScroll, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import phase1Img from '../../assets/images/methodology/phase1.jpg';
import phase2Img from '../../assets/images/methodology/phase2.png';
import phase3Img from '../../assets/images/methodology/phase3.png';
import phase4Img from '../../assets/images/methodology/phase4.png';

const phaseImages = [phase1Img, phase2Img, phase3Img, phase4Img];

import doodleBg from '../../assets/images/methodology/doodle_bg.jpg';

const Methodology = ({ data }) => {
    const sectionRef = useRef(null);
    const [showButton, setShowButton] = useState(false);
    
    // Track scroll progress within the methodology section for the sticky tech line
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Show button if we are meaningfully inside the zig-zag section
        if (latest > 0.15 && latest < 0.85) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    });
    
    // Validamos que existan datos (Data Freeze)
    if (!data || !data.topItems || !data.timeline) return null;

    return (
        <React.Fragment>
            {/* 1. SECCIÓN TIMELINE (COPIA FIEL DE LA IMAGEN - FONDO OSCURO TOTAL + DOODLE SUBTLE) */}
            <section className="bg-[#0a0a0a] w-full pt-44 pb-48 font-sans relative overflow-hidden">
                {/* Technical Doodle Background - Extremely subtle for depth */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-10 blur-[4px] transition-opacity duration-1000">
                    <img src={doodleBg} alt="" className="w-full h-full object-cover scale-110" />
                </div>

                {/* Texture Overlay: Architectural Dotted Pattern */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-1" 
                     style={{ backgroundImage: 'radial-gradient(#f7f5ef 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>

                <div className="container mx-auto px-10 lg:px-20 max-w-7xl relative z-10">
                    
                    {/* Header: METODOLOGÍA -> Planeación y estrategia financiera */}
                    {/* Header: METODOLOGÍA -> Planeación y estrategia financiera + CTA Button */}
                    <div className="mb-32 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
                        <div>
                            <span className="text-[#f25a29] font-black tracking-[0.2em] uppercase text-xs block mb-4">
                                METODOLOGÍA
                            </span>
                            <h2 className="text-[#f7f5ef] text-5xl lg:text-7xl font-black leading-tight max-w-3xl tracking-tight drop-shadow-sm">
                                Planeación y estrategia<br/>financiera
                            </h2>
                        </div>
                        <motion.button 
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => sectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
                            className="flex-shrink-0 w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-[#f25a29] text-white flex items-center justify-center p-6 text-center text-base lg:text-lg font-black uppercase leading-[1.1] shadow-[0_20px_50px_rgba(242,90,41,0.4)] hover:bg-[#ff7a4d] transition-all duration-300 border-4 border-white/10"
                        >
                            conocer los<br/>4 pasos clave
                        </motion.button>
                    </div>

                    {/* Timeline Container */}
                    <div className="w-full relative px-0 lg:px-12">
                        <h3 className="text-center text-[#f7f5ef] font-black text-2xl lg:text-3xl uppercase tracking-wide mb-24 drop-shadow-sm">
                            EL FLUJO PARAMÉTRICO
                        </h3>

                        {/* Flex Row para los Nodos */}
                        <div className="relative flex justify-between items-start w-full">
                            
                            {/* Línea Horizontal Principal */}
                            <div className="absolute top-[20px] left-0 right-0 h-[1px] bg-[#f7f5ef]/20 z-0 hidden md:block"></div>

                            {/* NODO A */}
                            <div className="relative z-10 flex flex-col items-center w-32 md:w-auto -ml-4 md:-ml-0">
                                <div className="w-10 h-10 rounded-full bg-[#f25a29] flex items-center justify-center text-white font-black text-lg mb-6 shadow-lg shadow-[#f25a29]/30">
                                    A
                                </div>
                                <div className="text-center">
                                    <span className="text-[#f25a29] font-bold text-xs block leading-tight">Proforma</span>
                                    <span className="text-[#f25a29] font-bold text-xs block leading-tight">Dinámica</span>
                                </div>
                            </div>

                            {/* NODO INTER: Definición Volumétrica */}
                            <div className="relative z-10 flex flex-col items-center w-32 md:w-auto hidden md:flex">
                                <div className="absolute top-[20px] w-[1px] h-14 bg-[#f7f5ef]/20 z-0"></div>
                                <div className="text-center mt-20">
                                    <span className="text-[#f7f5ef]/40 font-semibold text-[11px] block leading-snug uppercase tracking-wider">Definición</span>
                                    <span className="text-[#f7f5ef]/40 font-semibold text-[11px] block leading-snug uppercase tracking-wider">(Concepto)</span>
                                    <span className="text-[#f7f5ef]/40 font-semibold text-[11px] block leading-snug uppercase tracking-wider">Volumétrica</span>
                                </div>
                            </div>

                            {/* NODO B */}
                            <div className="relative z-10 flex flex-col items-center w-32 md:w-auto">
                                <div className="w-10 h-10 rounded-full bg-[#f25a29] flex items-center justify-center text-white font-black text-lg mb-6 shadow-lg shadow-[#f25a29]/30">
                                    B
                                </div>
                                <div className="text-center">
                                    <span className="text-[#f7f5ef] font-bold text-xs block leading-tight uppercase tracking-wide">Modelo financiero</span>
                                </div>
                            </div>

                            {/* NODO C */}
                            <div className="relative z-10 flex flex-col items-center w-32 md:w-auto">
                                <div className="w-10 h-10 rounded-full bg-[#f25a29] flex items-center justify-center text-white font-black text-lg mb-6 shadow-lg shadow-[#f25a29]/30">
                                    C
                                </div>
                                <div className="text-center">
                                    <span className="text-[#f7f5ef] font-bold text-xs block leading-snug uppercase tracking-wide">Indicadores</span>
                                    <span className="text-[#f7f5ef] font-bold text-xs block leading-snug uppercase tracking-wide">financieros.</span>
                                </div>
                            </div>

                            {/* NODO D */}
                            <div className="relative z-10 flex flex-col items-center w-32 md:w-auto -mr-6 md:-mr-0">
                                <div className="absolute bottom-full mb-3 w-max text-center left-1/2 -translate-x-1/2">
                                    <span className="text-[#f7f5ef]/40 font-black text-[10px] tracking-widest uppercase">CASHFLOW </span>
                                    <span className="text-[#f25a29] font-black text-[10px] tracking-widest uppercase">DINÁMICO</span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-[#f25a29] flex items-center justify-center text-white font-black text-lg mb-6 shadow-lg shadow-[#f25a29]/30 leading-none">
                                    D
                                </div>
                                <div className="text-center">
                                    <span className="text-[#f7f5ef] font-bold text-[11px] block leading-snug uppercase tracking-wide">Modelo y</span>
                                    <span className="text-[#f7f5ef] font-bold text-[11px] block leading-snug uppercase tracking-wide">estructura De</span>
                                    <span className="text-[#f7f5ef] font-bold text-[11px] block leading-snug uppercase tracking-wide">Negocio</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 2. ZIG-ZAG FASES DESIGN - FONDO CLARO TEXTURIZADO */}
            <section 
                ref={sectionRef} 
                className="bg-brand-light relative w-full py-32 min-h-screen font-sans selection:bg-[#f25a29] selection:text-white overflow-hidden border-t border-brand-light/10 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]"
            >
                {/* Subtle Grid Texture */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                     style={{ backgroundImage: 'linear-gradient(#505357 1px, transparent 1px), linear-gradient(90deg, #505357 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

                <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex flex-col gap-24 lg:gap-32 relative z-10">
                    
                    {/* Header Puntos */}
                    <div className="text-center mb-10">
                        <span className="text-[#f25a29] font-black tracking-[0.3em] uppercase text-sm mb-4 block">
                            Fases del Flujo
                        </span>
                        <h2 className="text-[#505357] text-4xl lg:text-6xl font-black uppercase tracking-tight">
                            Pasos Paramétricos
                        </h2>
                    </div>

                    {/* Zig-Zag Map */}
                    {data.topItems.map((phase, index) => {
                        const isEven = index % 2 === 0;
                        const imageSrc = phaseImages[index] || phaseImages[0];
                        
                        return (
                            <motion.div 
                                key={phase.id}
                                id={`phase-${phase.id}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-10% 0px -10% 0px", once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Image Side */}
                                <div className="w-full lg:w-1/2 relative h-[350px] lg:h-auto min-h-[400px]">
                                    <div className="absolute inset-0 bg-[#f25a29] rounded-[2.5rem] translate-x-4 translate-y-4 opacity-5 hidden lg:block"></div>
                                    <img 
                                        src={imageSrc} 
                                        alt={phase.title} 
                                        className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] shadow-xl z-10"
                                    />
                                </div>

                                {/* Text Side */}
                                <div className="w-full lg:w-1/2 bg-white rounded-[2.5rem] p-10 lg:p-16 shadow-xl relative overflow-hidden group flex flex-col justify-center border border-[#505357]/5">
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="bg-[#505357]/5 border border-[#505357]/10 rounded-2xl w-16 h-16 flex items-center justify-center transition-all duration-500 group-hover:border-[#f25a29]/30 group-hover:bg-[#f25a29]/5 shadow-sm">
                                            <i className={`${phase.icon} text-[#f25a29] text-2xl`}></i>
                                        </div>
                                        <span className="text-[#505357]/10 font-black text-7xl lg:text-8xl leading-none tracking-tighter transition-colors duration-500 group-hover:text-[#505357]/20">
                                            0{phase.id}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-[#505357] text-3xl lg:text-5xl font-black mb-6 leading-tight tracking-tight group-hover:text-[#f25a29] transition-colors duration-500">
                                        {phase.title}
                                    </h3>
                                    
                                    <div className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-[#f25a29] mt-3 flex-shrink-0"></div>
                                        <p className="text-[#505357]/70 text-lg lg:text-xl leading-relaxed font-medium transition-colors duration-500 group-hover:text-[#505357]">
                                            {phase.description}
                                        </p>
                                    </div>
                                    
                                    {/* Tech Accent Line */}
                                    <div className="absolute bottom-0 left-0 h-1.5 bg-[#f25a29] w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Floating Action Button (Visible only in this section) */}
            <AnimatePresence>
                {showButton && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 100 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 100 }}
                        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-full max-w-xs px-6"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{ 
                                y: [0, -4, 0],
                            }}
                            transition={{ 
                                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                            onClick={() => {
                                const phases = [1, 2, 3, 4];
                                for (const id of phases) {
                                    const el = document.getElementById(`phase-${id}`);
                                    if (el) {
                                        const rect = el.getBoundingClientRect();
                                        if (rect.top > 300) { // Check if the step is below the current view
                                            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                            return;
                                        }
                                    }
                                }
                                // If at the last step, go to next section
                                const nextSec = document.getElementById('proceso-analitico');
                                if (nextSec) nextSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                            className="w-full bg-[#f25a29] text-white px-6 py-4 rounded-2xl flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(242,90,41,0.4)] border border-white/20 font-black uppercase text-[11px] tracking-[0.25em] group backdrop-blur-sm"
                        >
                            Siguiente Paso
                            <div className="bg-white/10 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                                <ChevronDown size={14} />
                            </div>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
};


export default Methodology;
