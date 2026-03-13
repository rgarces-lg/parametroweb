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
    <div className="bg-brand-dark p-8 rounded-[3rem] border border-white/5 overflow-hidden">
      <div className="mb-12">
        <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Estimación de Demanda en Renta</h3>
        <p className="text-gray-500 text-sm font-medium mt-1">Capacidad de mercado vs desglose de unidades disponibles por precio de renta</p>
      </div>

      <div className="relative aspect-[1000/450] w-full">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
          {/* Grid lines (simplified) */}
          {[10, 65, 120, 175, 230, 285, 340, 395, 450, 505, 560].map((tick) => (
            <g key={tick}>
              <line 
                x1={padding} y1={getY(tick)} 
                x2={width - padding} y2={getY(tick)} 
                stroke="#ffffff10" strokeDasharray="4 4" 
              />
              <text x={padding - 10} y={getY(tick) + 4} textAnchor="end" fill="#475569" fontSize="10" fontWeight="bold">{tick}</text>
            </g>
          ))}

          {/* Bars (Oferta Disponible) */}
          {ofertaDisponible.map((val, i) => (
            <motion.rect
              key={i}
              initial={{ height: 0, y: getY(0) }}
              whileInView={{ height: (val * innerHeight) / maxVal, y: getY(val) }}
              x={getX(i) - 10}
              width="20"
              fill={i % 2 === 0 ? "#0d9488" : "#f25a29"}
              fillOpacity="0.6"
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
            stroke="#1e293b"
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
            <circle key={`zmm-${i}`} cx={getX(i)} cy={getY(val)} r="5" fill="#1e293b" stroke="#fff" strokeWidth="2" />
          ))}
          {demandaMty.map((val, i) => (
            <circle key={`mty-${i}`} cx={getX(i)} cy={getY(val)} r="5" fill="#f25a29" stroke="#fff" strokeWidth="2" />
          ))}

          {/* X Axis Labels */}
          {labels.map((label, i) => (
            <text 
              key={i} 
              x={getX(i)} y={height - 20} 
              textAnchor="middle" 
              fill="#64748b" 
              fontSize="9" 
              transform={`rotate(-45, ${getX(i)}, ${height - 20})`}
              fontWeight="bold"
            >
              {label}
            </text>
          ))}
        </svg>

        {/* Legend Overlay */}
        <div className="absolute top-0 right-0 flex flex-col gap-2 text-[10px] text-gray-400 font-bold uppercase p-6">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#1e293b] border border-white" />
                <span>Demanda ZMM</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-orange border border-white" />
                <span>Demanda Monterrey</span>
            </div>
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-brand-orange opacity-40 rounded-sm" />
                <span>Capacidad Absorbida</span>
            </div>
        </div>
      </div>

      <div className="mt-20 flex justify-end items-center gap-3 opacity-20">
          <span className="text-[10px] font-black tracking-widest uppercase text-white leading-none">Arquitectura Financiera</span>
          <div className="w-3 h-3 bg-brand-orange" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      </div>
    </div>
  );
};

export default DemandaRentaSVG;
