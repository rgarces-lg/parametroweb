import React from 'react';
import './Methodology.css';

const Methodology = ({ data }) => {
    return (
        <section className="methodology-section">
            <div className="container">

                {/* Header Side */}
                <div className="meth-header animate-fade-in-up">
                    <h2 className="meth-title">{data.title}</h2>
                    <p className="meth-subtitle">{data.subtitle}</p>
                </div>

                {/* Top Row: Concepts & Icons */}
                <div className="meth-top-grid">
                    {data.topItems.map((item, idx) => (
                        <div key={idx} className="meth-card animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="meth-icon-circle">
                                <i className={item.icon}></i>
                            </div>
                            <h4 className="meth-card-title">{item.title}</h4>
                            <p className="meth-card-desc">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Timeline Row */}
                <div className="meth-timeline-container animate-fade-in-up">
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
