import React from 'react';
import { 
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Legend, Cell 
} from 'recharts';
import content from '../../data/content.json';

const PlazasComercialesChart = ({ zone = "chapultepec" }) => {
  const data = content.marketStudy.plazasComerciales[zone];

  return (
    <div className="bg-brand-dark p-6 rounded-[2rem] border border-white/5 h-full">
      <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
        Análisis de plazas comerciales: {zone}
      </h3>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
            <XAxis 
                dataKey="name" 
                stroke="#64748b" 
                fontSize={10} 
                angle={-45} 
                textAnchor="end" 
                height={80}
            />
            <YAxis 
                yAxisId="left" 
                orientation="left" 
                stroke="#f25a29" 
                fontSize={12} 
                label={{ value: 'ANC (m2)', angle: -90, position: 'insideLeft', fill: '#f25a29', fontSize: 10 }}
            />
            <YAxis 
                yAxisId="right" 
                orientation="right" 
                stroke="#0d9488" 
                fontSize={12} 
                label={{ value: 'Locales', angle: 90, position: 'insideRight', fill: '#0d9488', fontSize: 10 }}
            />
            <Tooltip 
                contentStyle={{ backgroundColor: '#000', border: '1px solid #334155', borderRadius: '8px' }}
                cursor={{ fill: '#ffffff05' }}
            />
            <Legend verticalAlign="top" align="right" wrapperStyle={{ paddingBottom: '20px' }} />
            
            <Bar 
                yAxisId="right" 
                dataKey="locales" 
                name="Locales Totales" 
                fill="#0d9488" 
                radius={[4, 4, 0, 0]} 
                barSize={30}
            />
            <Line 
                yAxisId="left" 
                type="monotone" 
                dataKey="anc" 
                name="Área Neta Comercial" 
                stroke="#f25a29" 
                strokeWidth={3} 
                dot={{ fill: '#f25a29', r: 5 }} 
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PlazasComercialesChart;
