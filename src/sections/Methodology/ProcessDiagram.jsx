import React from 'react';
import { motion } from 'framer-motion';
import { Key } from 'lucide-react';

const ProcessDiagram = () => {
  const steps = [
    {
      id: 1,
      name: "Investigación de Mercado",
      verticalText: "Producto y Mercado Meta",
      description: "Estudio de Mercado: Oferta y Demanda",
      color: "bg-white"
    },
    {
      id: 2,
      name: "Conceptualización",
      verticalText: "Idea + Disruptividad.",
      description: "Innovación y Definición de Producto",
      color: "bg-white",
      letter: "A",
      letterLabel: "Análisis y Modelo Financiero"
    },
    {
      id: 3,
      name: "Modelo",
      verticalText: "Modelo",
      description: "Revisión de Producto",
      color: "bg-white"
    },
    {
      id: 4,
      name: "Proyecto Final",
      verticalText: "Proyecto Final",
      description: "Validación de Producto, preventa simulada",
      color: "bg-[#FFF5E6]", // Light cream as in slide
      letter: "B",
      letterLabel: "Concepto Creativo Central"
    },
    {
      id: 5,
      name: "Estrategia e Implementación",
      verticalText: "Estrategia e Implementación",
      description: "Plan de Aceleración Comercial, Lanzamiento, PAC - Ejecución",
      color: "bg-[#FFF5E6]",
      letter: "C",
      letterLabel: "Aplicaciones de Marketing"
    },
    {
      id: 6,
      name: "Comercialización",
      verticalText: "Comercialización",
      description: "Dirección y Operación Comercial",
      color: "bg-white",
      letter: "D",
      letterLabel: "Ecosistema Digital Inteligente"
    }
  ];

  return (
    <section className="py-24 bg-[#F5F5F7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-brand-orange uppercase tracking-tighter">
            Nuevos Proyectos
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-end gap-0 relative">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-1 w-full lg:w-auto flex flex-col items-center"
            >
              {/* Header Info */}
              <div className="text-center mb-4">
                 <span className="text-4xl md:text-6xl font-black text-brand-black/90">{step.id}</span>
              </div>

              {/* Main Card */}
              <div className={`relative w-full min-h-[400px] border border-brand-orange/20 ${step.color} p-6 flex flex-col justify-between shadow-sm`}>
                <div className="flex justify-center items-center h-full">
                  <span className="[writing-mode:vertical-rl] rotate-180 text-brand-orange font-bold text-xl md:text-2xl tracking-tighter">
                    {step.verticalText}
                  </span>
                </div>

                <div className="mt-8 text-[12px] leading-tight text-gray-600 font-medium">
                  {step.description}
                </div>

                {/* Letter Pointers */}
                {step.letter && (
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center w-32">
                    <div className="w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center font-bold mb-2 shadow-xl">
                      {step.letter}
                    </div>
                    <span className="text-[10px] uppercase font-bold text-gray-800 text-center leading-none tracking-tighter">
                      {step.letterLabel}
                    </span>
                  </div>
                )}
              </div>

              {/* Connector for last step */}
              {index === 5 && (
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-4">
                   <div className="h-0.5 w-12 bg-gray-300"></div>
                   <div className="w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center shadow-2xl">
                    <Key size={20} />
                   </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Market research labels */}
        <div className="hidden lg:grid grid-cols-6 gap-0 mt-2 text-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
           <div className="col-span-3 border-t border-gray-200 pt-2">Market Research</div>
           <div className="col-span-2 border-t border-gray-200 pt-2">Go-to Market</div>
           <div className="col-span-1 border-t border-gray-200 pt-2">Sales</div>
        </div>
      </div>
    </section>
  );
};

export default ProcessDiagram;
