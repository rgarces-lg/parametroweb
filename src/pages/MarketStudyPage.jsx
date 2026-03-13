import React from 'react';
import MarketStudyCharts from '../sections/MarketStudy/MarketStudyCharts';

const MarketStudyPage = () => {
  return (
    <main className="bg-brand-black min-h-screen">
      {/* Page Hero - Minimal */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">Data Room / Inteligencia</span>
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
              Estudio de <span className="text-brand-emerald">Mercado.</span>
            </h1>
            <p className="text-gray-400 text-xl">
              Análisis cuantitativo de absorción, precios y segmentación basado en inteligencia de datos autorizada.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="px-4 py-2 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full text-brand-emerald text-sm font-mono animate-pulse">
              ● Transfiriendo Data... 100%
            </div>
          </div>
        </div>

        <MarketStudyCharts />
      </section>
    </main>
  );
};

export default MarketStudyPage;
