import React from 'react';
import './FinancialAnalysis.css';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const FinancialAnalysis = ({ data }) => {
    const [finRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section ref={finRef} className="fin-analysis-section">
            <div className="container">
                <header className={`fin-header reveal-on-scroll slide-up ${isVisible ? 'is-visible' : ''}`}>
                    <h2 className="fin-main-title">{data.title}</h2>
                </header>

                <div className="fin-items-wrapper">
                    {data.items.map((item, index) => (
                        <div key={item.id} id={item.anchorId} className={`fin-card reveal-on-scroll slide-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${index * 150}ms` }}>
                            <div className="fin-card-left">
                                <div className="fin-letter">{item.id}</div>
                            </div>

                            <div className="fin-card-right">
                                <div className="fin-header-row">
                                    <h3 className="fin-card-title">{item.title}</h3>
                                    <span className="fin-card-subtitle">{item.subtitle}</span>
                                </div>

                                <div className="fin-tag-box">
                                    <span className="fin-highlight-text">{item.tag.split(' ')[0]} {item.tag.split(' ')[1]}</span>
                                    {" " + item.tag.split(' ').slice(2).join(' ')}
                                </div>

                                <div className="fin-paragraphs">
                                    {item.paragraphs.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FinancialAnalysis;
