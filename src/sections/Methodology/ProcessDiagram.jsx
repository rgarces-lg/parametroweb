import React from 'react';
import { motion } from 'framer-motion';
import { Key } from 'lucide-react';

const ProcessDiagram = () => {
  const steps = [
    {
      id: 1,
      title: "Producto y Mercado Meta",
      subtitle: "Estudio de Mercado: Oferta y Demanda",
      category: "Market research",
      color: "bg-white"
    },
    {
      id: 2,
      title: "Idea + Disruptividad.",
      subtitle: "Innovación y Definición de Producto",
      category: "Market research",
      color: "bg-white",
      afterNode: {
        letter: "A",
        label: "Análisis y Modelo Financiero"
      }
    },
    {
      id: 3,
      title: "Modelo",
      subtitle: "Revisión de Producto",
      category: "Market research",
      color: "bg-white",
      afterNode: {
        letter: "B",
        label: "Concepto Creativo Central"
      }
    },
    {
      id: 4,
      title: "Proyecto Final",
      subtitle: "Validación de Producto, preventa simulada",
      category: "Go-to Market",
      color: "bg-[#fdfdf7ff]", // brand-light
      afterNode: {
        letter: "C",
        label: "Aplicaciones de Marketing"
      }
    },
    {
      id: 5,
      title: "Estrategia e Implementación",
      subtitle: "Plan de Aceleración Comercial, PAC + Ejecución",
      category: "Go-to Market",
      color: "bg-[#fdfdf7ff]" // brand-light
    },
    {
      id: 6,
      title: "Comercialización",
      subtitle: "Dirección y Operación Comercial",
      category: "Sales",
      color: "bg-white",
      underNode: {
        letter: "D",
        label: "Ecosistema Digital Inteligente"
      }
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden font-sans border-t border-gray-100">
      {/* Background Texture: Subtle architectural dots */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#505357 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <h2 className="text-[#f25a29] text-3xl font-black uppercase tracking-tight">
            NUEVOS PROYECTOS
          </h2>
        </div>

        {/* Categories Header */}
        <div className="flex w-full mb-6 text-center">
            <div className="w-[50%] border-b-2 border-[#505357]/10 pb-2">
                <span className="text-[#505357] text-[10px] lg:text-xs font-black uppercase tracking-[0.2em]">Market research</span>
            </div>
            <div className="w-[33.33%] border-b-2 border-[#505357]/10 pb-2 mx-2">
                <span className="text-[#505357] text-[10px] lg:text-xs font-black uppercase tracking-[0.2em]">Go-to Market</span>
            </div>
            <div className="w-[16.66%] border-b-2 border-[#505357]/10 pb-2">
                <span className="text-[#505357] text-[10px] lg:text-xs font-black uppercase tracking-[0.2em]">Sales</span>
            </div>
        </div>

        {/* Main Diagram Container */}
        <div className="relative pt-10 pb-24">
          
          {/* Main Connecting Line - Runs behind cards */}
          <div className="absolute top-[55%] left-0 w-full h-[2px] bg-[#505357]/10 z-0 hidden lg:block" />

          {/* Left Accessory: Terreno */}
          <div className="absolute left-[-60px] top-[55%] -translate-y-1/2 flex items-center hidden xl:flex z-10">
             <span className="[writing-mode:vertical-rl] rotate-180 text-[#505357]/40 font-black text-[10px] uppercase tracking-widest mr-2">Terreno</span>
             <div className="w-3 h-3 rounded-full border-2 border-[#505357]/20 bg-white" />
          </div>

          {/* Right Accessory: Key */}
          <div className="absolute right-[-60px] top-[55%] -translate-y-1/2 flex items-center hidden xl:flex z-10">
             <div className="w-3 h-3 rounded-full border-2 border-[#505357]/20 bg-white mr-2" />
             <div className="w-10 h-10 border border-[#505357]/10 rounded-full flex items-center justify-center text-[#505357]/40">
                <Key size={16} />
             </div>
          </div>

          {/* Cards Container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-3 relative z-10">
            {steps.map((step) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col rounded-2xl border border-[#505357]/10 ${step.color} shadow-sm relative group overflow-visible`}
              >
                {/* Number */}
                <div className="p-4 text-center border-b border-[#505357]/5">
                    <span className="text-3xl lg:text-4xl font-black text-[#505357]/20 group-hover:text-[#505357] transition-colors">{step.id}</span>
                </div>

                {/* Vertical Text Title Area */}
                <div className="flex-grow flex items-center justify-center py-10 min-h-[300px] lg:min-h-[350px]">
                    <span className="[writing-mode:vertical-rl] rotate-180 text-[#f25a29] font-black text-lg lg:text-xl text-center uppercase tracking-tighter leading-none whitespace-nowrap">
                        {step.title}
                    </span>
                </div>

                {/* Subtitle / Description */}
                <div className="p-4 border-t border-[#505357]/5 min-h-[80px] flex items-center justify-center bg-black/5 rounded-b-2xl">
                    <p className="text-[9px] lg:text-[10px] font-bold text-[#505357]/60 text-center uppercase leading-tight">
                        {step.subtitle}
                    </p>
                </div>

                {/* Floating Node (Linked to card, but positioned out) */}
                {step.afterNode && (
                    <div className="absolute right-[-14px] lg:right-[-10px] bottom-[-20px] translate-y-1/2 z-30 flex flex-col items-center pointer-events-none">
                        <div className="w-10 h-10 lg:w-11 lg:h-11 bg-[#313233] text-white rounded-full flex items-center justify-center font-black text-sm lg:text-base shadow-xl border-4 border-white pointer-events-auto transition-transform hover:scale-110">
                            {step.afterNode.letter}
                        </div>
                        <div className="mt-2 w-24 text-center">
                            <span className="text-[7px] lg:text-[8px] font-black text-[#505357] uppercase tracking-wider leading-none block">
                                {step.afterNode.label}
                            </span>
                        </div>
                    </div>
                )}

                {/* Under Node */}
                {step.underNode && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] translate-y-1/2 z-30 flex flex-col items-center pointer-events-none">
                        <div className="w-10 h-10 lg:w-11 lg:h-11 bg-[#313233] text-white rounded-full flex items-center justify-center font-black text-sm lg:text-base shadow-xl border-4 border-white pointer-events-auto transition-transform hover:scale-110">
                            {step.underNode.letter}
                        </div>
                        <div className="mt-2 w-28 text-center">
                            <span className="text-[7px] lg:text-[8px] font-black text-[#505357] uppercase tracking-wider leading-none block">
                                {step.underNode.label}
                            </span>
                        </div>
                    </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Brand Footer */}
        <div className="mt-16 flex flex-col items-center">
            <div className="flex flex-col items-center border-r-4 border-[#f25a29] pr-4">
                <span className="text-[#f25a29] font-black text-[10px] tracking-[0.3em] uppercase opacity-60">Metodología</span>
                <span className="text-[#505357] font-black text-xl tracking-tighter uppercase whitespace-nowrap">Parámetro</span>
            </div>
            <div className="w-16 h-1 bg-[#f25a29]/10 mt-4" />
        </div>
      </div>
    </section>
  );
};

export default ProcessDiagram;

