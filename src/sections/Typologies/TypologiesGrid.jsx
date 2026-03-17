import React from 'react';
import { motion } from 'framer-motion';

const TypologiesGrid = () => {
  const typologies = [
    {
      title: "Vivienda Horizontal",
      desc: "Lotificación y master plan de comunidades planeadas. Proyecto: Granados del Mediterráneo.",
      image: "/assets/img/viviendahorizaontal.png",
      reference: "Granados del Mediterráneo"
    },
    {
      title: "Vivienda Vertical",
      desc: "Torres residenciales de alta densidad con optimización de áreas vendibles.",
      image: "/assets/img/VIVIENDAVERTICAL.png",
      reference: "Densificación Urbana"
    },
    {
      title: "Multifamiliar",
      desc: "Desarrollos departamentales con amenidades integradas. Proyecto: Stanza.",
      image: "/assets/img/multifamiliar.jpg",
      reference: "Departamentos Stanza"
    },
    {
      title: "Usos Mixtos",
      desc: "Complejos con torres de oficinas, vivienda y comercio. Proyecto: Micrópolis.",
      image: "/assets/img/usosmixtos.png",
      reference: "Micrópolis (Torres B&N)"
    },
    {
      title: "Hotel",
      desc: "Proyectos de hospitality y turismo con enfoque en experiencia y rentabilidad.",
      image: "/assets/img/hotel.avif",
      reference: "Sector Hospitality"
    },
    {
      title: "Fashion Mall",
      desc: "Centros comerciales de gran formato orientados a marcas globales de lujo.",
      image: "/assets/img/FASHOONMALL.png",
      reference: "Retail de Lujo"
    },
    {
      title: "Community Center",
      desc: "Plazas de servicio vecinal ancladas por supermercados.",
      image: "/assets/img/communitycenter.webp",
      reference: "Servicios de Proximidad"
    },
    {
      title: "Power Center",
      desc: "Grandes superficies comerciales con tiendas ancla. Proyecto: Sun Mall.",
      image: "/assets/img/sunmall.png",
      reference: "Sun Mall Montemorelos"
    },
    {
      title: "Street Mall",
      desc: "Plazas de conveniencia con oficinas integradas. Proyecto: Uptown Cumbres.",
      image: "/assets/img/streetmall.png",
      reference: "Uptown Cumbres"
    },
    {
      title: "Life Style Center",
      desc: "Retail de experiencia, gastronomía y entretenimiento al aire libre.",
      image: "/assets/img/communitycenter.webp",
      reference: "Retail Experience"
    },
    {
      title: "Outlets",
      desc: "Centros comerciales de descuento con alto flujo transaccional.",
      image: "/assets/img/outlet.png",
      reference: "Plazas Outlets MTY"
    },
    {
      title: "Town Center",
      desc: "Ecosistemas urbanos integrales que simulan el centro de una ciudad.",
      image: "/assets/img/towncenter.png",
      reference: "Urbanismo Social"
    },
    {
      title: "Industrial",
      desc: "Naves industriales y parques de manufactura.",
      image: "/assets/img/INDUSTRIAL.png",
      reference: "Producción"
    },
    {
      title: "Centros Médicos",
      desc: "Infraestructura especializada para salud y bienestar.",
      image: "/assets/img/CENTROMEDICO.png",
      reference: "Salud"
    },
    {
      title: "Centros de Negocios",
      desc: "Espacios corporativos y de coworking de alto nivel.",
      image: "/assets/img/CENTROSDENEGOCIOS.png",
      reference: "Corporate"
    },
    {
      title: "CEDI",
      desc: "Centros de distribución logística de última generación.",
      image: "/assets/img/CEDIS.png",
      reference: "Logística"
    }
  ];

  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#505357 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <span className="text-brand-orange font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Portafolio / Dominio</span>
          <h2 className="text-5xl md:text-7xl font-black text-brand-dark mb-6 leading-none tracking-tighter uppercase leading-[0.9]">
            Tipologías de <br />
            <span className="text-brand-orange italic">Gran Formato.</span>
          </h2>
          <p className="text-brand-dark/70 text-lg lg:text-xl font-bold max-w-2xl border-l-4 border-brand-orange pl-6">
            Nuestra experiencia abarca todo el espectro del retail y desarrollos de usos mixtos, adaptándonos a cada activo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {typologies.map((typ, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
              className="relative overflow-hidden rounded-[10px] bg-white border border-brand-dark/5 h-auto shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="h-[240px] relative overflow-hidden">
                <img 
                  src={typ.image} 
                  alt={typ.title} 
                  className="w-full h-full object-cover transition-transform duration-700 pointer-events-none" 
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000"; }}
                />
                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange" />
              </div>

              {/* Content - Always Visible */}
              <div className="p-8">
                <h3 className="text-xl font-black text-brand-dark mb-3 uppercase tracking-tighter">{typ.title}</h3>
                <p className="text-brand-dark/60 text-sm font-bold leading-relaxed border-l-2 border-brand-orange/30 pl-4 mb-4">
                  {typ.desc}
                </p>
                <div className="flex items-center gap-2 text-[9px] font-black text-brand-orange uppercase tracking-widest">
                   <div className="w-4 h-[1px] bg-brand-orange/40" />
                   <span>{typ.reference}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypologiesGrid;
