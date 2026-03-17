import React from 'react';
import { 
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Legend, Cell 
} from 'recharts';
import content from '../../data/content.json';

const PlazasComercialesChart = ({ zone = "chapultepec" }) => {
  const data = content.marketStudy.plazasComerciales[zone];

  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-brand-dark/5 shadow-lg h-full relative overflow-hidden">
       {/* Dot Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1e293b 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>

      <h3 className="text-xl font-black text-brand-dark mb-6 uppercase tracking-tighter relative z-10 border-l-4 border-brand-orange pl-4 leading-none">
        Análisis comercial: <span className="text-brand-orange font-black italic">{zone}</span>
      </h3>
      <div className="h-[400px] w-full relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#00000008" vertical={false} />
            <XAxis 
                dataKey="name" 
                stroke="#94a3b8" 
                fontSize={9} 
                tick={{ fill: '#1e293b', fontWeight: '800' }}
                angle={-45} 
                textAnchor="end" 
                height={80}
                axisLine={false}
                tickLine={false}
            />
            <YAxis 
                yAxisId="left" 
                orientation="left" 
                stroke="#f25a29" 
                fontSize={11} 
                tick={{ fill: '#f25a29', fontWeight: '900' }}
                label={{ value: 'ANC (m2)', angle: -90, position: 'insideLeft', fill: '#f25a29', fontSize: 10, fontWeight: '900', textTransform: 'uppercase' }}
                axisLine={false}
                tickLine={false}
            />
            <YAxis 
                yAxisId="right" 
                orientation="right" 
                stroke="#334155" 
                fontSize={11} 
                tick={{ fill: '#334155', fontWeight: '900' }}
                label={{ value: 'Locales', angle: 90, position: 'insideRight', fill: '#334155', fontSize: 10, fontWeight: '900', textTransform: 'uppercase' }}
                axisLine={false}
                tickLine={false}
            />
            <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                labelStyle={{ fontWeight: '900', color: '#1a1a1a', marginBottom: '8px' }}
                itemStyle={{ fontWeight: '900', textTransform: 'uppercase', fontSize: '10px' }}
                cursor={{ fill: '#00000003' }}
            />
            <Legend verticalAlign="top" align="right" wrapperStyle={{ paddingBottom: '20px', fontWeight: '900', fontSize: '9px', textTransform: 'uppercase' }} />
            
            <Bar 
                yAxisId="right" 
                dataKey="locales" 
                name="Locales Totales" 
                fill="#334155" 
                radius={[4, 4, 0, 0]} 
                barSize={30}
            />
            <Line 
                yAxisId="left" 
                type="monotone" 
                dataKey="anc" 
                name="Área Neta Comercial" 
                stroke="#f25a29" 
                strokeWidth={4} 
                dot={{ fill: '#f25a29', r: 6, strokeWidth: 0 }} 
                activeDot={{ r: 8, strokeWidth: 0 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PlazasComercialesChart;
