import React from 'react';
import './ValueProposal.css';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const ValueProposal = ({ data }) => {
    const [vpRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section ref={vpRef} className="vp-section">
            <div className="vp-container container">

                {/* Left column */}
                <div className={`vp-left reveal-on-scroll slide-in-left ${isVisible ? 'is-visible' : ''}`}>
                    <div className="vp-header">
                        <h3 className="vp-subtitle">
                            <span className="brand-text">PARÁMETRO</span>
                        </h3>
                        <h2 className="vp-title">{data.title}</h2>
                    </div>

                    <h4 className="vp-question">{data.question}</h4>
                </div>

                {/* Right column with the large circle */}
                <div className={`vp-right reveal-on-scroll scale-up ${isVisible ? 'is-visible delay-200' : ''}`}>
                    <div className="vp-circle-container">
                        <div className="vp-circle">
                            <p className="vp-highlight">
                                Contamos con la <strong>metodología</strong> adecuada para diseñar y <strong>Validar</strong> el más <strong>Rentable</strong> Uso de Suelo de tu <strong>Proyecto</strong> en minutos
                            </p>
                        </div>
                        {/* Abstract decorative elements */}
                        <div className="vp-decoration"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ValueProposal;
