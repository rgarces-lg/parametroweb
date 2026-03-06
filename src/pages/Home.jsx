import React from 'react';

// Components
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollAssistant from '../components/ScrollAssistant/ScrollAssistant';

// Sections
import Hero from '../sections/Hero/Hero';
import ValueProposal from '../sections/ValueProposal/ValueProposal';
import Process from '../sections/Process/Process';
import ProductDef from '../sections/ProductDef/ProductDef';
import Services from '../sections/Services/Services';
import FinancialAnalysis from '../sections/FinancialAnalysis/FinancialAnalysis';
import DataPath from '../sections/DataPath/DataPath';
import Methodology from '../sections/Methodology/Methodology';

// Data
import data from '../data/content.json';

const Home = () => {
    return (
        <div className="home-wrapper">
            <Navbar />

            <main className="main-content">
                <div id="inicio">
                    <Hero data={data.hero} />
                </div>

                <div id="soluciones">
                    <ValueProposal data={data.valueProposition} />
                </div>

                <div id="etapas">
                    <Process data={data.process} />
                </div>

                <div id="servicios">
                    <Services data={data.services} />
                </div>

                <div id="producto">
                    <ProductDef data={data.productDefinition} />
                </div>

                <div id="proceso">
                    {/* New DataPath Section equivalent to "PROCESO El camino de datos..." */}
                    <DataPath data={data.dataPath} />
                </div>

                <div id="metodologia">
                    <Methodology data={data.methodology} />
                </div>

                <div id="analisis-financiero">
                    {/* New FinancialAnalysis Section (A, B, C, D) */}
                    <FinancialAnalysis data={data.financialAnalysis} />
                </div>
            </main>

            <ScrollAssistant />
            <Footer />
        </div>
    );
};

export default Home;
