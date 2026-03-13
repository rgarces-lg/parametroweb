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
    <div className="bg-brand-dark p-8 rounded-[2rem] border border-white/5">
      <div className="mb-10 text-center">
        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">
            {viviendaVertical.title}
        </h3>
        <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mt-2">
            {viviendaVertical.subtitle}
        </p>
      </div>
      
      <div className="h-[450px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={viviendaVertical.data} 
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#64748b" 
              fontSize={11} 
              tick={{ fill: '#94a3b8' }} 
              angle={-45} 
              textAnchor="end"
              interval={0}
            />
            <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#000', border: '1px solid #ffffff10', borderRadius: '12px' }}
              cursor={{ fill: '#ffffff05' }}
            />
            <Legend verticalAlign="top" align="center" wrapperStyle={{ paddingBottom: '30px' }} />
            
            <Bar 
              dataKey="vendidas" 
              name="Unidades Vendidas" 
              fill="#f25a29" 
              radius={[4, 4, 0, 0]} 
              animationDuration={1500}
            />
            <Bar 
              dataKey="inventario" 
              name="Unidades en Inventario" 
              fill="#0d9488" 
              radius={[4, 4, 0, 0]} 
              animationDuration={2000}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-brand-orange rounded-full" />
                  <span className="text-xs text-gray-400 font-bold uppercase">Consolidado</span>
              </div>
              <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-brand-teal rounded-full" />
                  <span className="text-xs text-gray-400 font-bold uppercase">Disponible</span>
              </div>
          </div>
          <p className="text-[10px] text-gray-600 italic">* Fuente: CC ADVISORS GROUPS Intelligence Library (Pág 180-183)</p>
      </div>
    </div>
  );
};

export default ViviendaVerticalChart;
