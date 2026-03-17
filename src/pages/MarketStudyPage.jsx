import React from 'react';
import MarketStudyCharts from '../sections/MarketStudy/MarketStudyCharts';

const MarketStudyPage = () => {
  return (
    <main className="bg-brand-light min-h-screen relative overflow-hidden">
      {/* Background Texture: Data Visualization Nodes/Grid */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#505357 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
      
      {/* Faded Background Numbers/Matrix Texture */}
      <div className="absolute left-10 top-40 w-full h-full opacity-[0.02] pointer-events-none font-mono text-[8px] leading-none overflow-hidden select-none break-all text-brand-dark">
        {Array(100).fill("01101001 10110010 11100101 10101011 00110011 11001100 ").join("")}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto pt-40 pb-20 px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-brand-dark/10 pb-12">
          <div className="max-w-3xl">
            <span className="text-brand-orange font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Data Room / Inteligencia Estratégica</span>
            <h1 className="text-brand-dark text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
              Estudio de <br />
              <span className="text-brand-orange italic">Mercado.</span>
            </h1>
            <p className="text-brand-dark/70 text-lg lg:text-xl font-bold max-w-2xl border-l-4 border-brand-orange pl-6">
              Análisis cuantitativo de absorción, precios y segmentación basado en inteligencia de datos autorizada para decisiones inmobiliarias precisas.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4 px-6 py-3 bg-white border border-brand-dark/10 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-brand-orange rounded-full animate-ping" />
              <span className="text-brand-dark text-xs font-black tracking-widest uppercase">Transfiriendo Data... 100%</span>
            </div>
          </div>
        </div>

        <MarketStudyCharts />
      </div>
    </main>
  );
};

export default MarketStudyPage;
