import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Legend, Cell 
} from 'recharts';
import { motion } from 'framer-motion';
import content from '../../data/content.json';

const ViviendaVerticalChart = () => {
  const { viviendaVertical } = content.marketStudy;

  return (
    <div className="bg-white p-10 rounded-[2.5rem] border border-brand-dark/5 shadow-xl relative overflow-hidden">
       {/* Background Grid Texture */}
       <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#f25a29 0.5px, transparent 0.5px), linear-gradient(90deg, #f25a29 0.5px, transparent 0.5px)', backgroundSize: '50px 50px' }}></div>

      <div className="mb-10 text-center relative z-10">
        <h3 className="text-3xl font-black text-brand-dark uppercase tracking-tighter">
            {viviendaVertical.title}
        </h3>
        <p className="text-brand-orange font-black uppercase tracking-[0.3em] text-[10px] mt-2">
            {viviendaVertical.subtitle}
        </p>
      </div>
      
      <div className="h-[450px] w-full relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={viviendaVertical.data} 
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#00000008" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#94a3b8" 
              fontSize={10} 
              tick={{ fill: '#1e293b', fontWeight: '800' }} 
              angle={-45} 
              textAnchor="end"
              interval={0}
              axisLine={false}
              tickLine={false}
            />
            <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} tick={{ fill: '#1e293b', fontWeight: '800' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              itemStyle={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '10px' }}
              labelStyle={{ fontWeight: '900', color: '#f25a29', marginBottom: '8px' }}
              cursor={{ fill: '#00000003' }}
            />
            <Legend verticalAlign="top" align="center" iconType="circle" wrapperStyle={{ paddingBottom: '30px', fontWeight: '900', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }} />
            
            <Bar 
              dataKey="vendidas" 
              name="Unidades Vendidas" 
              fill="#f25a29" 
              radius={[6, 6, 0, 0]} 
              animationDuration={1500}
            />
            <Bar 
              dataKey="inventario" 
              name="Unidades en Inventario" 
              fill="#334155" 
              radius={[6, 6, 0, 0]} 
              animationDuration={2000}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 pt-8 border-t border-brand-dark/10 flex flex-wrap justify-between items-center gap-4 relative z-10">
          <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-brand-orange shadow-lg shadow-brand-orange/20" />
                  <span className="text-[10px] text-brand-dark/60 font-black uppercase tracking-widest">Consolidado</span>
              </div>
              <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-slate-500 shadow-lg shadow-slate-500/20" />
                  <span className="text-[10px] text-brand-dark/60 font-black uppercase tracking-widest">Disponible</span>
              </div>
          </div>
          <p className="text-[9px] text-brand-dark/40 font-black uppercase tracking-widest leading-none">Fuente: CC ADVISORS GROUPS Intelligence Library (Pág 180-183)</p>
      </div>
    </div>
  );
};

export default ViviendaVerticalChart;
