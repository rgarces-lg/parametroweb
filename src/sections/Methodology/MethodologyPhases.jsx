import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Clock, Calculator, ShieldCheck, ChevronDown } from 'lucide-react';
import content from '../../data/content.json';

// Importar doodleBg si existe, si no, usar fallback
import doodleBg from '../../assets/images/doodle_bg.jpg';

const MethodologyPhases = () => {
  const { title, subtitle, topItems, timeline } = content.methodology;
  const [activePhaseIndex, setActivePhaseIndex] = useState(null);

  const icons = [CheckCircle2, Clock, Calculator, ShieldCheck];
  const phaseImages = [
    "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1454165833767-1316b1bc107e?auto=format&fit=crop&q=80"
  ];

  // Helper para navegar al siguiente paso
  const scrollToNextPhase = (currentIndex) => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < topItems.length) {
      const element = document.getElementById(`phase-0${topItems[nextIndex].id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const timelineData = [
    { letter: 'A', label: 'Proforma Dinámica' },
    { letter: '', label: 'Definición (Concepto) Volumétrica', isInter: true },
    { letter: 'B', label: 'Modelo financiero' },
    { letter: 'C', label: 'Indicadores financieros.' },
    { letter: 'D', label: 'Modelo y estructura De Negocio' }
  ];

  return (
    <div className="bg-brand-dark min-h-screen">
      
      {/* NAVEGACIÓN FLOTANTE (INTELIGENTE) */}
      <AnimatePresence>
        {activePhaseIndex !== null && activePhaseIndex < topItems.length - 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
          >
            <button 
              onClick={() => scrollToNextPhase(activePhaseIndex)}
              className="group relative flex items-center gap-4 bg-brand-accent text-brand-light px-8 py-4 rounded-full font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all"
            >
              {/* Pulsing Red Line Border Effect */}
              <div className="absolute inset-0 rounded-full border-2 border-red-500/50 animate-pulse group-hover:border-red-400"></div>
              
              <span>Ir al {activePhaseIndex + 2}º Paso</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />

              {/* Brillo naranja central */}
              <div className="absolute inset-0 bg-brand-accent/5 rounded-full group-hover:bg-brand-accent/10 transition-all"></div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER & TIMELINE UNIFIED SECTION */}
      <motion.section 
        onViewportEnter={() => setActivePhaseIndex(null)}
        className="relative overflow-hidden border-b border-brand-light/5 pt-32 pb-20 min-h-[800px] flex flex-col justify-center"
      >
        {/* IMAGEN DE FONDO (Doodles de referencia) */}
        <div className="absolute inset-0 z-0">
          <img 
            src={doodleBg} 
            alt="Doodle Background" 
            className="w-full h-full object-cover opacity-10 blur-[4px] grayscale brightness-125"
          />
          {/* Overlay gradiente para fundir mejor */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/40 to-brand-dark"></div>
        </div>


        <div className="relative z-10 w-[94%] max-w-[1800px] mx-auto">
            {/* Cabecera Principal */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 mb-24">
                <div className="text-center lg:text-left max-w-4xl">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-brand-accent font-black tracking-[0.3em] uppercase mb-4 block"
                    >
                        {subtitle}
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl lg:text-9xl font-black text-brand-light leading-[0.9] uppercase"
                    >
                        {title}
                    </motion.h1>
                </div>

                {/* CALL TO ACTION BUTTON (Next Step) */}
                <motion.div
                    initial={{ scale: 0, rotate: -15 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    className="relative"
                >
                    <button 
                        onClick={() => scrollToNextPhase(-1)}
                        className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-brand-accent border-4 border-red-500/50 flex flex-col items-center justify-center text-brand-light font-black uppercase text-center p-4 hover:scale-110 hover:rotate-6 transition-all shadow-[0_0_50px_rgba(242,90,41,0.3)] group"
                    >
                        <span className="text-[10px] md:text-xs opacity-80 mb-1">Conoce los</span>
                        <span className="text-xl md:text-4xl leading-none mb-1">4 Pasos</span>
                        <span className="text-[10px] md:text-xs opacity-80">de nuestra</span>
                        <span className="text-[10px] md:text-xs opacity-80">metodología</span>
                        <ChevronDown className="mt-2 w-5 md:w-8 h-5 md:h-8 animate-bounce" />
                        
                        <div className="absolute inset-0 rounded-full border-2 border-white/20 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                    </button>
                </motion.div>
            </div>

            {/* Timeline Content */}
            <div className="text-center mb-12">
                <motion.h3 
                    initial={{opacity:0, y:20}} 
                    whileInView={{opacity:1, y:0}} 
                    className="text-3xl md:text-5xl font-black text-brand-light uppercase tracking-tight"
                >
                    El Flujo Paramétrico
                </motion.h3>
            </div>

            {/* Desktop Timeline - Wider and more spread */}
            <div className="hidden lg:block relative max-w-full mx-auto mt-16 mb-24 px-4">
                <div className="absolute top-[48px] left-0 right-0 h-[1px] bg-brand-light/20"></div>
                <div className="flex justify-between relative">
                    {timelineData.map((node, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative flex flex-col items-center ${node.isInter ? 'h-32 justify-end -translate-y-[83px]' : ''}`}
                            style={{ width: '10%' }}
                        >
                            {node.letter ? (
                                <>
                                    <div className="w-16 h-16 bg-brand-accent text-brand-light rounded-full flex items-center justify-center font-black text-2xl z-20 shadow-xl shadow-brand-accent/30 mb-8 relative">
                                        {node.letter}
                                        <div className="absolute top-[64px] w-[1px] h-8 bg-brand-light/20 -z-10"></div>
                                    </div>
                                    <div className={`text-center px-1 font-black text-xs md:text-sm tracking-tight uppercase ${
                                        node.label.includes('Dinámica') ? 'text-brand-accent' : 'text-brand-light'
                                    }`}>
                                        {node.label}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={`text-center mb-4 px-1 font-black text-[10px] md:text-xs tracking-tighter uppercase text-brand-light/50 max-w-[120px] leading-tight`}>
                                        {node.label}
                                    </div>
                                    {/* Flecha ondulada hacia arriba */}
                                    <div className="h-16 relative">
                                        <svg className="w-6 h-full text-brand-light/30 overflow-visible" viewBox="0 0 24 64">
                                            <path 
                                                d="M12 64 C 20 40, 4 24, 12 4" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                strokeWidth="1.5" 
                                                strokeDasharray="3 2" 
                                            />
                                            <path 
                                                d="M8 8 L12 0 L16 8" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                strokeWidth="1.5" 
                                            />
                                        </svg>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="absolute right-0 -top-12 flex items-center gap-4 bg-brand-dark/80 backdrop-blur-md pl-6 py-3 border-l-4 border-brand-accent shadow-2xl z-30"
                    >
                        <div className="text-brand-light font-black uppercase tracking-widest text-lg flex flex-col leading-none">
                            <span className="text-[10px] opacity-60">Resultados</span>
                            <span>CASHFLOW <span className="text-brand-accent">DINÁMICO</span></span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
      </motion.section>

      {/* Zig-Zag Sections */}
      {topItems.map((phase, index) => {
        const isDark = index % 2 === 0; // Dark, Light, Dark, Light
        const isImageLeft = index % 2 !== 0; // Alternando lados
        const IconComponent = icons[index % icons.length];
        const imageSrc = phaseImages[index % phaseImages.length];
        
        return (
          <motion.section 
            id={`phase-0${phase.id}`}
            key={phase.id} 
            onViewportEnter={() => setActivePhaseIndex(index)}
            viewport={{ amount: 0.6 }}
            className={`py-32 relative overflow-hidden ${isDark ? 'bg-brand-dark text-brand-light' : 'bg-brand-light text-brand-dark'}`}
          >
            {/* GRID/DOTS PATTERN (Texturas arquitectónicas y tecnológicas) */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(circle, ${isDark ? '#f8fafc' : '#0f0f0f'} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
            />

            <div className="container mx-auto px-6 relative z-10">
              <div className={`flex flex-col lg:flex-row items-center gap-16 ${isImageLeft ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Text Content */}
                <div className="lg:w-1/2">
                  <motion.div 
                    initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20">
                        <IconComponent className="w-8 h-8 text-brand-accent" />
                      </div>
                      <span className="text-4xl md:text-5xl font-black opacity-20 tracking-tighter">0{phase.id}</span>
                    </div>
                    
                    <h2 className={`text-4xl md:text-6xl font-black uppercase leading-[0.9] ${isDark ? 'text-brand-light' : 'text-brand-dark'}`}>
                      {phase.title}
                    </h2>
                    
                    <p className={`text-xl md:text-2xl font-medium leading-relaxed ${isDark ? 'text-brand-light/70' : 'text-gray-600'}`}>
                      {phase.description}
                    </p>

                    <div className="pt-8">
                       {/* Botón removido a favor del flotante */}
                    </div>
                  </motion.div>
                </div>

                {/* Image/Visual Component */}
                <div className="lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: isImageLeft ? -5 : 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    className="relative"
                  >
                    {/* Floating elements styling */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl animate-pulse delay-700"></div>
                    
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-brand-light/10">
                      <img 
                        src={imageSrc} 
                        alt={phase.title}
                        className="w-full h-[400px] md:h-[600px] object-cover hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                      />
                      
                      {/* Overlay Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-dark to-transparent">
                         <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-brand-accent animate-ping"></div>
                           <span className="text-brand-light text-xs font-black uppercase tracking-[0.2em]">Validated Phase</span>
                         </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </motion.section>
        );
      })}

    </div>
  );
};

export default MethodologyPhases;
