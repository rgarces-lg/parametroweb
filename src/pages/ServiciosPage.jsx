import React from 'react';

// Sections
import ProductDef from '../sections/ProductDef/ProductDef';
import Services from '../sections/Services/Services';
import FinancialAnalysis from '../sections/FinancialAnalysis/FinancialAnalysis';

// Data
import data from '../data/content.json';

const ServiciosPage = () => {
    return (
        <main className="main-content" style={{ paddingTop: '80px' }}>
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
