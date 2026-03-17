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
        <section className="process-section py-24 bg-white relative">
            <div className="max-w-[1400px] mx-auto px-6 relative">
                
                {/* Left Side "DATA" Label */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-4 z-20 pointer-events-none">
                     <span className="text-brand-orange font-black uppercase text-xl tracking-[0.5em]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>DATA</span>
                     <div className="w-[1px] h-24 bg-brand-orange/30"></div>
                </div>

                <div className="process-horizontal-container relative overflow-x-auto no-scrollbar ml-12" 
                    ref={scrollContainerRef} 
                    onScroll={handleScroll}
                >
                    {/* Visual hint for mobile horizontal scroll */}
                    {showHint && (
                        <div className="scroll-hint-mobile">
                            <span>Desliza lateralmente</span>
                        </div>
                    )}

                    {/* Stage Headers (Etapa 1 / Etapa 2) */}
                    <div className="flex mb-8 relative pr-20">
                        <div className="flex-1 text-right pr-28">
                            <span className="text-brand-orange font-black uppercase tracking-widest text-sm">Etapa 1</span>
                        </div>
                        <div className="w-[20%] text-center border-l-2 border-dashed border-brand-orange/30">
                            <span className="text-brand-orange font-black uppercase tracking-widest text-sm">Etapa 2</span>
                        </div>
                    </div>

                    <div className="horizontal-content flex gap-0 min-w-[1200px] pb-32 pr-20 relative">
                        {etapas.map((etapa, index) => (
                            <div key={etapa.id} className="process-column flex-1 px-4 relative flex flex-col items-center">
                                
                                {/* Dashed Divider between 5 and 6 */}
                                {index === 5 && (
                                    <div className="absolute left-0 top-0 bottom-0 w-[1px] border-l-2 border-dashed border-brand-orange/30 -ml-[2px] h-[120%] -translate-y-[10%] z-0" />
                                )}

                                {/* Header Step Title */}
                                <div className="column-header h-24 flex flex-col justify-end items-center text-center mb-6">
                                    <span className="text-[11px] font-black text-brand-dark/40 uppercase tracking-tighter mb-2 leading-tight max-w-[140px]">
                                        {etapa.name}
                                    </span>
                                    <h3 className="text-5xl font-black text-[#0f0f0f] leading-none opacity-80">{etapa.id}</h3>
                                </div>

                                {/* Card */}
                                <div className={`process-main-card w-full border border-brand-orange/20 bg-white min-h-[440px] flex flex-col relative transition-transform hover:-translate-y-2 duration-300 ${index >= 3 && index <= 4 ? 'bg-orange-50/20' : ''} ${etapa.isSpecial ? 'border-dashed border-brand-dark/10 bg-transparent' : ''}`}>
                                    
                                    <div className="flex-grow flex items-center justify-center p-8">
                                        {etapa.isSpecial ? (
                                            <div className="flex flex-col items-center text-center gap-6">
                                                <p className="text-brand-dark/70 text-sm font-black uppercase leading-relaxed max-w-[160px]">
                                                    {etapa.description}
                                                </p>
                                                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                                                    <i className="fa-solid fa-key text-brand-orange"></i>
                                                </div>
                                            </div>
                                        ) : etapa.verticalTexts ? (
                                            <div className="flex gap-6 h-full items-center">
                                                {etapa.verticalTexts.map((vt, i) => (
                                                    <span key={i} className="vertical-text text-brand-orange font-black uppercase text-lg tracking-widest whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                                                        {vt}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : (
                                            <span className="vertical-text text-brand-orange font-black uppercase text-xl tracking-widest" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                                                {etapa.verticalText}
                                            </span>
                                        )}
                                    </div>

                                    {!etapa.isSpecial && (
                                        <div className="p-6 border-t border-brand-orange/10 bg-white z-10">
                                            {etapa.descriptions ? (
                                                <div className="space-y-4">
                                                    {etapa.descriptions.map((desc, i) => (
                                                        <p key={i} className="text-[9px] font-black text-brand-dark/50 leading-tight uppercase tracking-tighter">
                                                            {desc}
                                                        </p>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-[9px] font-black text-brand-dark/50 leading-tight uppercase tracking-tighter">
                                                    {etapa.description}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Bottom Indicator (A, B, C, D) */}
                                {etapa.letter && (
                                    <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center w-40 text-center">
                                        <div className="w-16 h-16 bg-[#0f0f0f] text-white rounded-full flex items-center justify-center font-black text-xl mb-3 shadow-2xl transition-transform hover:scale-110">
                                            <span>{etapa.letter}</span>
                                        </div>
                                        <span className="text-[10px] font-black text-[#0f0f0f] uppercase leading-tight tracking-widest">
                                            {etapa.letterLabel}
                                        </span>
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
