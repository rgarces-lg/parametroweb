import React from 'react';
import './FinancialAnalysis.css';

const FinancialAnalysis = ({ data }) => {
    return (
        <section className="fin-analysis-section">
            <div className="container">
                <header className="fin-header animate-fade-in-up">
                    <h2 className="fin-main-title">{data.title}</h2>
                </header>

                <div className="fin-items-wrapper">
                    {data.items.map((item, index) => (
                        <div key={item.id} id={item.anchorId} className="fin-card animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
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
