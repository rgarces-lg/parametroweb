import React from 'react';
import './Services.css';

const Services = ({ data }) => {
    return (
        <section className="services-section">
            <div className="container">

                <div className="services-header animate-fade-in-up">
                    <h2 className="services-title"><span>Servicios a</span> {data.targetAudience}</h2>
                </div>

                <div className="services-content">
                    <ol className="services-list animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {data.list.map((service, idx) => {
                            // The second item mentions "Proforma Dinámica" in italic, we can roughly parse or just render styling
                            // We will bold important financial keywords for aesthetics
                            const formattedService = service
                                .replace('comerciales y financieros', '<strong>comerciales y financieros</strong>')
                                .replace('Proforma Dinámica', '<em>Proforma Dinámica</em>')
                                .replace('arquitectura y conceptualización paramétrica', '<strong>arquitectura y conceptualización paramétrica</strong>')
                                .replace('rentable uso de suelo', '<strong>rentable uso de suelo</strong>');

                            return (
                                <li key={idx} className="service-item">
                                    <span className="service-number">{idx + 1}.</span>
                                    <p dangerouslySetInnerHTML={{ __html: formattedService }}></p>
                                </li>
                            )
                        })}
                    </ol>

                    {/* Decorative visual for list */}
                    <div className="project-types-grid animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="pt-title">Tipo de proyectos:</div>
                        <div className="pt-columns">
                            {data.projectTypes.map((type, i) => (
                                <div key={i} className="pt-item">- {type}</div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
