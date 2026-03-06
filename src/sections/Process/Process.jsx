import React, { useState, useEffect, useRef } from 'react';
import './Process.css';

const Process = ({ data }) => {
    const scrollContainerRef = useRef(null);
    const [showHint, setShowHint] = useState(true);

    const handleScroll = () => {
        if (scrollContainerRef.current.scrollLeft > 20) {
            setShowHint(false);
        }
    };
    return (
        <section className="process-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">ETAPAS</h2>
                    <p className="process-subtitle">El Camino de Datos hacia proyectos rentables, únicos e innovadores en minutos</p>
                </div>

                <div className="process-horizontal-container" ref={scrollContainerRef} onScroll={handleScroll}>
                    {/* Visual hint for mobile horizontal scroll */}
                    {showHint && (
                        <div className="scroll-hint-mobile">
                            <span>Desliza lateralmente</span>
                            <i className="fa-solid fa-hand-pointer"></i>
                        </div>
                    )}

                    <div className="etapas-labels">
                        <div className="label-item stage-1">Etapa 1</div>
                        <div className="label-item stage-2">Etapa 2</div>
                    </div>
                    <div className="horizontal-content">
                        {data.etapas.map((etapa, index) => (
                            <div key={etapa.id} className={`process-column ${index === 5 ? 'step-final' : ''}`}>

                                {/* Header Step Info */}
                                <div className="column-header">
                                    <span className="step-label">{etapa.name}</span>
                                    <h3 className="step-big-number">{etapa.id}</h3>
                                </div>

                                {/* Card with Vertical Text */}
                                <div className={`process-main-card ${index >= 3 && index <= 4 ? 'bg-cream' : ''}`}>
                                    <div className="vertical-text-container">
                                        <span className="vertical-text">{etapa.verticalText}</span>
                                    </div>

                                    <div className="card-bottom-info">
                                        <div className="mini-icon">
                                            <i className={etapa.icon}></i>
                                        </div>
                                        <p className="column-desc">{etapa.description}</p>
                                    </div>

                                    {/* Mapped Letters A, B, C, D as in the slide */}
                                    {etapa.letter && (
                                        <a href={`#fin-${etapa.letter.toLowerCase()}`} className="process-letter-anchor">
                                            <div className="letter-circle">
                                                <span>{etapa.letter}</span>
                                            </div>
                                            <span className="letter-full-text">{etapa.letterLabel}</span>
                                        </a>
                                    )}

                                    {/* Special case for B which is between 3 and 4 in the slide, 
                                        I'll put it on 4 with a "pre" logic if needed, 
                                        but in the provided image 3, A is on 2, B is on 4, C is on 5, D is on 6. 
                                        Wait, let me look closer at Image 3.
                                        A is under 2.
                                        B is under 4.
                                        C is under 5.
                                        D is under 6.
                                        Okay, I will map them directly.
                                    */}
                                </div>

                                {/* Connective Key Icon after step 6 */}
                                {index === 5 && (
                                    <div className="step-connector-final">
                                        <div className="key-icon-wrapper">
                                            <i className="fa-solid fa-key"></i>
                                        </div>
                                    </div>
                                )}

                                {/* Dotted Line between 5 and 6 */}
                                {index === 4 && <div className="step-divider-dotted"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
