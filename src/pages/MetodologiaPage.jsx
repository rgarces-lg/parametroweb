import React from 'react';

// Sections
import Process from '../sections/Process/Process';
import DataPath from '../sections/DataPath/DataPath';
import Methodology from '../sections/Methodology/Methodology';

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Data
import data from '../data/content.json';

const MetodologiaPage = () => {
    const [heroRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <main className="main-content">
            {/* Page Hero */}
            <div ref={heroRef} className="page-hero metodologia-hero">
                <div className="teaser-overlay"></div>
                <div className={`container page-hero-content reveal-on-scroll slide-up ${isVisible ? 'is-visible' : ''}`}>
                    <h1 className="page-hero-title">Metodología Paramétrica</h1>
                    <p className="page-hero-subtitle">Validación cuantitativa, certera y ágil para el uso de suelo óptimo.</p>
                </div>
            </div>

            <div id="etapas" style={{ paddingTop: '2rem' }}>
                <Process data={data.process} />
            </div>

            <div id="proceso">
                <DataPath data={data.dataPath} />
            </div>

            <div id="metodologia">
                <Methodology data={data.methodology} />
            </div>
        </main>
    );
};

export default MetodologiaPage;
