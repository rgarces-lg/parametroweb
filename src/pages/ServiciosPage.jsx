import React from 'react';

// Sections
import ProductDef from '../sections/ProductDef/ProductDef';
import Services from '../sections/Services/Services';
import FinancialAnalysis from '../sections/FinancialAnalysis/FinancialAnalysis';

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Data
import data from '../data/content.json';

const ServiciosPage = () => {
    const [heroRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <main className="main-content">
            {/* Page Hero */}
            <div ref={heroRef} className="page-hero servicios-hero">
                <div className="teaser-overlay"></div>
                <div className={`container page-hero-content reveal-on-scroll slide-up ${isVisible ? 'is-visible' : ''}`}>
                    <h1 className="page-hero-title">Nuestros Servicios</h1>
                    <p className="page-hero-subtitle">Transformando análisis de datos en rentabilidad inmobiliaria.</p>
                </div>
            </div>

            <div id="servicios">
                <Services data={data.services} />
            </div>

            <div id="producto">
                <ProductDef data={data.productDefinition} />
            </div>

            <div id="analisis-financiero">
                <FinancialAnalysis data={data.financialAnalysis} />
            </div>
        </main>
    );
};

export default ServiciosPage;
