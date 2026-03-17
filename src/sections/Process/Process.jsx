import React, { useState, useEffect, useRef } from 'react';
import './Process.css';

const Process = ({ data }) => {
    const etapas = data.etapas || [];
    const scrollContainerRef = useRef(null);
    const [showHint, setShowHint] = useState(true);

    const handleScroll = () => {
        if (scrollContainerRef.current && scrollContainerRef.current.scrollLeft > 20) {
            setShowHint(false);
        }
    };

    return (
        <section className="process-section py-24 bg-[#f8f8f8]">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-[#f25a29] text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">ETAPAS</h2>
                    <p className="text-gray-600 text-lg md:text-xl font-medium max-w-3xl mx-auto">
                        El Camino de Datos hacia proyectos rentables, únicos e innovadores en minutos
                    </p>
                </div>

                <div 
                    className="process-horizontal-container relative overflow-x-auto no-scrollbar" 
                    ref={scrollContainerRef} 
                    onScroll={handleScroll}
                >
                    {/* Visual hint for mobile horizontal scroll */}
                    {showHint && (
                        <div className="scroll-hint-mobile">
                            <span>Desliza lateralmente</span>
                        </div>
                    )}

                    <div className="etapas-labels flex mb-4 border-b border-gray-200">
                        <div className="w-[83%] text-right pr-10 font-black text-brand-accent uppercase tracking-widest text-sm py-2">Etapa 1</div>
                        <div className="w-[17%] text-center font-black text-brand-accent uppercase tracking-widest text-sm py-2">Etapa 2</div>
                    </div>

                    <div className="horizontal-content flex gap-0 min-w-[1200px] pb-24">
                        {etapas.map((etapa, index) => (
                            <div key={etapa.id} className="process-column flex-1 px-4 relative flex flex-col items-center">

                                {/* Header Step Info */}
                                <div className="column-header h-28 flex flex-col justify-end items-center text-center mb-6">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter mb-1 leading-tight max-w-[120px]">
                                        {etapa.name}
                                    </span>
                                    <h3 className="text-5xl font-black text-[#0f0f0f] leading-none">{etapa.id}</h3>
                                </div>

                                {/* Card with Vertical Text */}
                                <div className={`process-main-card w-full border border-brand-accent/30 bg-white min-h-[480px] flex flex-col relative transition-transform hover:-translate-y-2 duration-300 ${index >= 3 && index <= 4 ? 'bg-orange-50/30' : ''}`}>
                                    <div className="flex-grow flex items-center justify-center py-10">
                                        <span className="vertical-text text-brand-accent font-black uppercase text-xl tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                                            {etapa.verticalText}
                                        </span>
                                    </div>

                                    <div className="p-6 border-t border-brand-accent/10 bg-white/50 backdrop-blur-sm">
                                        <div className="text-brand-accent text-xl mb-3">
                                            <i className={etapa.icon}></i>
                                        </div>
                                        <p className="text-xs font-medium text-gray-500 leading-relaxed uppercase tracking-tight">
                                            {etapa.description}
                                        </p>
                                    </div>

                                    {/* Mapped Letters A, B, C, D */}
                                    {etapa.letter && (
                                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center w-32 text-center">
                                            <div className="w-12 h-12 bg-[#0f0f0f] text-white rounded-full flex items-center justify-center font-black text-lg mb-2 shadow-xl">
                                                <span>{etapa.letter}</span>
                                            </div>
                                            <span className="text-[10px] font-black text-[#0f0f0f] uppercase leading-tight">
                                                {etapa.letterLabel}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Dotted Line between stages */}
                                {index === 4 && <div className="absolute right-0 top-1/2 -translate-y-1/2 h-4/5 border-r-2 border-dashed border-brand-accent/20"></div>}
                                
                                {/* Key Icon at end of 6 */}
                                {index === 5 && (
                                    <div className="absolute -right-8 top-1/2 -translate-y-1/2 p-3 bg-brand-dark rounded-full shadow-xl">
                                        <i className="fa-solid fa-key text-white text-xl"></i>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
