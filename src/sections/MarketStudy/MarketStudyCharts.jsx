import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell
} from 'recharts';
import content from '../../data/content.json';

// Specialized components
import PlazasComercialesChart from './PlazasComercialesChart';
import ViviendaVerticalChart from './ViviendaVerticalChart';
import DemandaRentaSVG from './DemandaRentaSVG';

const MarketStudyCharts = () => {
  const { marketStudy } = content;
  const COLORS = ['#f25a29', '#0d9488', '#059669', '#334155', '#4b5563', '#94a3b8', '#1e293b'];

  return (
    <div className="space-y-16">
      
      {/* 1. Demanda de Renta - Custom High-Fidelity SVG (Pag 215) */}
      <DemandaRentaSVG />

      {/* 2. Vivienda Vertical - Vendidas vs Inventario (Pag 180) */}
      <ViviendaVerticalChart />

      {/* 3. Plazas Comerciales - Dual Axis (Pag 117-118) */}
      <div className="grid lg:grid-cols-2 gap-8">
          <PlazasComercialesChart zone="chapultepec" />
          <PlazasComercialesChart zone="obispado" />
      </div>

      {/* 4. Análisis de Oficinas - Explicitly MXN */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-brand-dark p-10 rounded-[3rem] border border-white/10"
      >
        <div className="mb-10 text-center">
            <h3 className="text-2xl font-black text-white uppercase tracking-widest">{marketStudy.analisisOficinas.title}</h3>
            <p className="text-brand-orange font-bold text-xs uppercase mt-2 tracking-[0.3em]">Métricas expresadas en Pesos Mexicanos (MXN)</p>
        </div>
        
        <div className="h-[450px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={marketStudy.analisisOficinas.data} layout="vertical" margin={{ left: 30, right: 30 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" horizontal={false} />
              <XAxis type="number" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis dataKey="corredor" type="category" stroke="white" fontSize={12} width={100} fontWeight="700" tickLine={false} axisLine={false} />
              <Tooltip 
                cursor={{ fill: '#ffffff02' }}
                contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '12px' }}
                formatter={(value) => [`$${value} MXN/m²`, 'Precio Renta']}
              />
              <Bar dataKey="precio" name="Precio Renta" radius={[0, 10, 10, 0]}>
                   {marketStudy.analisisOficinas.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#f25a29' : index === 1 ? '#0d9488' : '#1e3a8a'} />
                  ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center opacity-50">
            <span className="text-[10px] text-gray-500 font-medium leading-relaxed max-w-md">
                * El precio de renta promedio por m2 se observa en la zona nuclear, destacando el corredor Gómez Morin - Margáin como el líder histórico.
            </span>
            <div className="flex gap-2">
                <div className="w-2 h-2 bg-brand-orange" />
                <div className="w-2 h-2 bg-brand-teal" />
            </div>
        </div>
      </motion.div>

      {/* Numerical Highlights (Extracted from PDF) */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { label: "Proyección Poblacional 2030", value: "+159,000", sub: "Crecimiento Acumulado 14%" },
          { label: "Mercado de Renta Monterrey", value: "33.85%", sub: "Incremento 2010 - 2015" },
          { label: "Ocupación Promedio Juárez", value: "81%", sub: "Resiliencia Comercial" }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 p-8 rounded-3xl border border-white/5 text-center"
          >
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2 font-black">{stat.label}</div>
            <div className="text-4xl font-black text-brand-orange mb-1 tracking-tighter">{stat.value}</div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarketStudyCharts;
