import React from 'react';
import './Methodology.css';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Methodology = ({ data }) => {
    const [methRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section ref={methRef} className="methodology-section">
            <div className="container">

                {/* Header Side */}
                <div className={`meth-header reveal-on-scroll slide-up ${isVisible ? 'is-visible' : ''}`}>
                    <h2 className="meth-title">{data.title}</h2>
                    <p className="meth-subtitle">{data.subtitle}</p>
                </div>

                {/* Top Row: Concepts & Icons */}
                <div className="meth-top-grid">
                    {data.topItems.map((item, idx) => (
                        <div key={idx} className={`meth-card reveal-on-scroll slide-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                            <div className="meth-icon-circle">
                                <i className={item.icon}></i>
                            </div>
                            <h4 className="meth-card-title">{item.title}</h4>
                            <p className="meth-card-desc">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Timeline Row */}
                <div className={`meth-timeline-container reveal-on-scroll scale-up ${isVisible ? 'is-visible delay-300' : ''}`}>
                    <div className="timeline-line"></div>

                    <div className="timeline-items">
                        {data.timeline.map((point, pidx) => (
                            <div key={pidx} className={`timeline-node ${point.isInter ? 'inter-node' : ''}`}>

                                {/* Vertical Marker Line */}
                                <div className="node-marker"></div>

                                {/* Content Circle (A, B, C, D) or empty for inter */}
                                {point.letter && (
                                    <div className="node-letter">{point.letter}</div>
                                )}

                                {/* Label Below Line */}
                                <div className="node-label">
                                    <span className={point.label.includes('Dinámica') || point.label.includes('Dinámico') ? 'highlight-orange' : ''}>
                                        {point.label.split(' ').map((word, wi) => (
                                            <React.Fragment key={wi}>
                                                {word === 'Dinámica' || word === 'Dinámico' ? <strong>{word}</strong> : word}
                                                {' '}
                                            </React.Fragment>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {/* Final Tip: Cashflow Dinámico */}
                        <div className="timeline-end-label">
                            Cashflow <span className="highlight-orange">Dinámico</span>
                        </div>
                    </div>
                </div>

                {/* Footer Branding */}
                <div className="meth-footer">
                    <span>ARQUITECTURA FINANCIERA</span>
                    <div className="mini-logo-triangle"></div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
