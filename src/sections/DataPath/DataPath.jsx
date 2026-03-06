import React from 'react';
import './DataPath.css';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const DataPath = ({ data }) => {
    const [dpRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section ref={dpRef} className="datapath-section">
            <div className="container">

                <div className={`dp-header reveal-on-scroll slide-up ${isVisible ? 'is-visible' : ''}`}>
                    <h2 className="dp-title">{data.title}</h2>
                    <p className="dp-subtitle" dangerouslySetInnerHTML={{ __html: data.subtitle }}></p>
                </div>

                <div className="dp-steps-container">
                    {data.steps.map((step, index) => (
                        <div key={index} className={`dp-step-row reveal-on-scroll slide-in-left ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${index * 150}ms` }}>

                            <div className="dp-icon-col">
                                <div className="dp-icon-circle">
                                    <i className={step.icon}></i>
                                </div>
                                {index < data.steps.length - 1 && <div className="dp-line"></div>}
                            </div>

                            <div className="dp-content-col">
                                <h4 className="dp-step-title">{step.title}</h4>
                                <p className="dp-step-desc">{step.description}</p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default DataPath;
