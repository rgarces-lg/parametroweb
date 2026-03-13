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
    <section className="py-24 bg-brand-slate">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">Portafolio / Dominio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tipologías de <span className="text-brand-teal">Gran Formato.</span></h2>
          <p className="text-gray-400 max-w-2xl">Nuestra experiencia abarca todo el espectro del retail y desarrollos de usos mixtos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {typologies.map((typ, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] bg-brand-black/40 border border-white/5 h-[320px]"
            >
              {/* Image with overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={typ.image} 
                  alt={typ.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000"; }}
                />
                {/* Subtle bottom gradient only for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-orange transition-colors">{typ.title}</h3>
                <p className="text-xs text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {typ.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypologiesGrid;
