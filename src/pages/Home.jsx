import React from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Sections
import Hero from '../sections/Hero/Hero';
import ValueProposal from '../sections/ValueProposal/ValueProposal';

// Data
import data from '../data/content.json';

const Home = () => {
    const [serviciosRef, isServiciosVisible] = useIntersectionObserver({ threshold: 0.2 });
    const [metodologiaRef, isMetodologiaVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <main className="main-content">
            <div id="inicio">
                <Hero data={data.hero} />
            </div>

            <div id="soluciones">
                <ValueProposal data={data.valueProposition} />
            </div>

            {/* Teaser for Servicios */}
            <section ref={serviciosRef} className="home-teaser-section servicios-teaser">
                <div className="teaser-overlay"></div>
                <div className={`container teaser-content reveal-on-scroll slide-up ${isServiciosVisible ? 'is-visible' : ''}`}>
                    <h2 className="teaser-title">Conoce Nuestros Servicios</h2>
                    <p className="teaser-desc">Descubre cómo nuestra Proforma Dinámica y el análisis paramétrico maximizan la rentabilidad de tu proyecto inmobiliario.</p>
                    <Link to="/servicios" className="btn-primary teaser-btn">Ver Servicios Completos</Link>
                </div>
            </section>

            {/* Teaser for Metodologia */}
            <section ref={metodologiaRef} className="home-teaser-section metodologia-teaser">
                <div className="teaser-overlay"></div>
                <div className={`container teaser-content reveal-on-scroll slide-up ${isMetodologiaVisible ? 'is-visible' : ''}`}>
                    <h2 className="teaser-title">Nuestra Metodología</h2>
                    <p className="teaser-desc">Explora el Camino de Datos. Validamos el uso de suelo más rentable mediante un proceso ágil y basado en datos reales.</p>
                    <Link to="/metodologia" className="btn-primary teaser-btn">Explorar Metodología</Link>
                </div>
            </section>
        </main>
    );
};

export default Home;
