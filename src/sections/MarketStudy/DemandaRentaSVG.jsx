import React from 'react';
import { motion } from 'framer-motion';
import content from '../../data/content.json';

const DemandaRentaSVG = () => {
  const { labels, demandaZMM, demandaMty, ofertaDisponible } = content.marketStudy.demandaRenta;
  
  // Chart dimensions
  const width = 1000;
  const height = 400;
  const padding = 60;
  
  const innerWidth = width - padding * 2;
  const innerHeight = height - padding * 2;
  
  const maxVal = 560; // Max Y from PDF

  // Helpers to convert data to SVG coordinates
  const getX = (index) => padding + (index * innerWidth) / (labels.length - 1);
  const getY = (value) => padding + innerHeight - (value * innerHeight) / maxVal;

  const createPath = (data) => {
    return data.map((val, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(val)}`).join(' ');
  };

  return (
    <div className="bg-white rounded-[2.5rem] border border-brand-dark/5 shadow-2xl overflow-hidden relative">
      <div className="flex flex-col lg:flex-row">
        
        {/* Left Side: Chart Section */}
        <div className="flex-1 p-10 lg:p-14 relative">
          {/* Background Texture: Data Grid Nodes */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#1e293b 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>

          <div className="mb-12 relative z-10 border-l-4 border-brand-orange pl-6">
            <h3 className="text-3xl font-black text-brand-dark uppercase tracking-tighter">Estimación de Demanda en Renta</h3>
            <p className="text-brand-dark/50 text-sm font-bold mt-1 uppercase tracking-widest leading-tight">
              Capacidad de mercado vs desglose de unidades disponibles <br className="hidden md:block" /> por precio de renta
            </p>
          </div>

          <div className="relative aspect-[16/9] w-full z-10">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
              {/* Grid lines */}
              {[10, 65, 120, 175, 230, 285, 340, 395, 450, 505, 560].map((tick) => (
                <g key={tick}>
                  <line 
                    x1={padding} y1={getY(tick)} 
                    x2={width - padding} y2={getY(tick)} 
                    stroke="#00000008" strokeDasharray="4 4" 
                  />
                  <text x={padding - 10} y={getY(tick) + 4} textAnchor="end" fill="#94a3b8" fontSize="10" fontWeight="bold">{tick}</text>
                </g>
              ))}

              {/* Bars */}
              {ofertaDisponible.map((val, i) => (
                <motion.rect
                  key={i}
                  initial={{ height: 0, y: getY(0) }}
                  whileInView={{ height: (val * innerHeight) / maxVal, y: getY(val) }}
                  x={getX(i) - 10}
                  width="20"
                  fill={i % 2 === 0 ? "#475569" : "#f25a29"}
                  fillOpacity="0.4"
                  rx="4"
                  transition={{ delay: i * 0.05, duration: 0.8 }}
                />
              ))}

              {/* Curves */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d={createPath(demandaZMM)}
                fill="none"
                stroke="#334155"
                strokeWidth="4"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                d={createPath(demandaMty)}
                fill="none"
                stroke="#f25a29"
                strokeWidth="4"
              />

              {/* Data Points */}
              {demandaZMM.map((val, i) => (
                <circle key={`zmm-${i}`} cx={getX(i)} cy={getY(val)} r="6" fill="#334155" stroke="#fff" strokeWidth="2" />
              ))}
              {demandaMty.map((val, i) => (
                <circle key={`mty-${i}`} cx={getX(i)} cy={getY(val)} r="6" fill="#f25a29" stroke="#fff" strokeWidth="2" />
              ))}

              {/* X Axis Labels */}
              {labels.map((label, i) => (
                <text 
                  key={i} 
                  x={getX(i)} y={height - 20} 
                  textAnchor="middle" 
                  fill="#1e293b" 
                  fontSize="9" 
                  transform={`rotate(-45, ${getX(i)}, ${height - 20})`}
                  fontWeight="900"
                  className="uppercase tracking-tighter"
                >
                  {label}
                </text>
              ))}
            </svg>

            {/* Legend Overlay */}
            <div className="absolute top-0 right-0 flex flex-col gap-3 text-[10px] text-brand-dark font-black uppercase tracking-widest p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-brand-dark/5">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#334155] border-2 border-white shadow-md" />
                    <span>Demanda ZMM</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-brand-orange border-2 border-white shadow-md" />
                    <span>Demanda Monterrey</span>
                </div>
                 <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-brand-orange opacity-30 rounded-sm" />
                    <span>Capacidad Absorbida</span>
                </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-between items-center opacity-30 relative z-10">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                 <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-dark">Live Market Data Room</span>
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-brand-dark">Arquitectura Financiera</span>
          </div>
        </div>

        {/* Right Side: Image & Insight Section */}
        <div className="lg:w-[400px] bg-brand-dark text-white relative flex flex-col">
          <div className="absolute inset-0">
            <img 
              src="/mty_data_viz.png" 
              alt="Monterrey Data Viz" 
              className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
          </div>
          
          <div className="relative z-10 mt-auto p-10 lg:p-14">
            <div className="w-12 h-12 bg-brand-orange rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-brand-orange/20">
               <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
               </svg>
            </div>
            <h4 className="text-2xl font-black uppercase tracking-tight mb-4 leading-none">Visión <br /> <span className="text-brand-orange italic">Estratégica.</span></h4>
            <p className="text-white/70 text-sm font-bold leading-relaxed border-l-2 border-brand-orange pl-6 lowercase">
              Nuestro análisis no se queda en números fríos. integramos la realidad urbana de Monterrey para proyectar la absorción real y mitigar riesgos en cada m2 desarrollado.
            </p>
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
               <span className="text-[10px] font-black tracking-widest text-brand-orange uppercase">Score de Fiabilidad: 98.4%</span>
               <div className="flex gap-1">
                  {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-white rounded-full opacity-30" />)}
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>


  );
};

export default DemandaRentaSVG;
