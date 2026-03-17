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
        className="bg-white p-10 rounded-[2.5rem] border border-brand-dark/5 shadow-xl relative overflow-hidden"
      >
        {/* Subtle Node Texture */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.05] pointer-events-none grayscale translate-x-1/2 -translate-y-1/2">
            <img src="https://images.unsplash.com/photo-1551288049-bbbda536ad31?q=80&w=2070&auto=format&fit=crop" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="mb-10 text-center relative z-10">
            <h3 className="text-2xl font-black text-brand-dark uppercase tracking-widest">{marketStudy.analisisOficinas.title}</h3>
            <p className="text-brand-orange font-bold text-[10px] uppercase mt-2 tracking-[0.3em]">Métricas expresadas en Pesos Mexicanos (MXN)</p>
        </div>
        
        <div className="h-[450px] w-full relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={marketStudy.analisisOficinas.data} layout="vertical" margin={{ left: 30, right: 30 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#00000008" horizontal={false} />
              <XAxis type="number" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis dataKey="corredor" type="category" stroke="#1e293b" fontSize={12} width={100} fontWeight="900" tickLine={false} axisLine={false} />
              <Tooltip 
                cursor={{ fill: '#00000003' }}
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                labelStyle={{ fontWeight: '900', color: '#1a1a1a' }}
                formatter={(value) => [`$${value} MXN/m²`, 'Precio Renta']}
              />
              <Bar dataKey="precio" name="Precio Renta" radius={[0, 10, 10, 0]}>
                   {marketStudy.analisisOficinas.data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#f25a29' : index === 1 ? '#334155' : '#1e293b'} />
                  ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-8 pt-8 border-t border-brand-dark/10 flex justify-between items-center relative z-10">
            <span className="text-[10px] text-brand-dark/50 font-bold leading-relaxed max-w-md uppercase tracking-tight">
                * El precio de renta promedio por m2 se observa en la zona nuclear, destacando el corredor Gómez Morin - Margáin como el líder histórico.
            </span>
            <div className="flex gap-2">
                <div className="w-3 h-3 bg-brand-orange shadow-lg shadow-brand-orange/20" />
                  <div className="w-3 h-3 bg-slate-400 shadow-lg shadow-slate-400/20" />
            </div>
        </div>
      </motion.div>

      {/* Numerical Highlights (Extracted from PDF) */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { label: "Proyección Poblacional 2030", value: "+159,000", sub: "Crecimiento Acumulado 14%" },
          { label: "Mercado de Renta Monterrey", value: "33.85%", sub: "Incremento en los últimos años" },
          { label: "Ocupación Promedio Juárez", value: "81%", sub: "Resiliencia Comercial" }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-10 rounded-[2rem] border border-brand-dark/5 text-center shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative"
          >
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(#f25a29 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-brand-dark/40 mb-3 font-black relative z-10">{stat.label}</div>
            <div className="text-4xl font-black text-brand-dark mb-2 tracking-tighter relative z-10">{stat.value}</div>
            <div className="text-[10px] text-brand-orange font-black uppercase tracking-widest relative z-10">{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarketStudyCharts;
