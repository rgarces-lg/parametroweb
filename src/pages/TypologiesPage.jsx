import React from 'react';
import TypologiesGrid from '../sections/Typologies/TypologiesGrid';

const TypologiesPage = () => {
  return (
    <main className="bg-brand-black">
      {/* Page Hero - Minimal */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
          Dominio de <span className="text-brand-teal">Formatos.</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl">
          Nuestra capacidad analítica se adapta a las particularidades de cada activo comercial y residencial.
        </p>
      </section>

      <TypologiesGrid />
    </main>
  );
};

export default TypologiesPage;
