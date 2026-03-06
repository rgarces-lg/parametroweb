import React from 'react';
import './Services.css';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Services = ({ data }) => {
    const [servicesRef, isVisible] = useIntersectionObserver({ threshold: 0.15 });

    return (
        <section ref={servicesRef} className="services-section">
            <div className="container">

                <div className={`services-header reveal-on-scroll slide-up ${isVisible ? 'is-visible' : ''}`}>
                    <h2 className="services-title"><span>Servicios a</span> {data.targetAudience}</h2>
                </div>

                <div className="services-content">
                    <div className={`services-grid reveal-on-scroll slide-up ${isVisible ? 'is-visible delay-200' : ''}`}>
                        {data.list.map((service, idx) => {
                            const formattedService = service
                                .replace('comerciales y financieros', '<strong>comerciales y financieros</strong>')
                                .replace('Proforma Dinámica', '<em>Proforma Dinámica</em>')
                                .replace('arquitectura y conceptualización paramétrica', '<strong>arquitectura y conceptualización paramétrica</strong>')
                                .replace('rentable uso de suelo', '<strong>rentable uso de suelo</strong>');

                            return (
                                <div key={idx} className="service-card-new">
                                    <div className="service-card-number">0{idx + 1}</div>
                                    <p className="service-card-text" dangerouslySetInnerHTML={{ __html: formattedService }}></p>
                                </div>
                            )
                        })}
                    </div>

                    {/* Highly Visual Project Types Grid */}
                    <div className={`project-types-section reveal-on-scroll slide-up ${isVisible ? 'is-visible delay-400' : ''}`}>
                        <h3 className="pt-section-title">Nuestra Experiencia por <span>Tipo de Proyecto</span></h3>
                        
                        <div className="pt-image-grid">
                            {data.projectTypes.map((type, i) => {
                                // Assign distinct Unsplash images based on index for a rich portfolio look
                                const bgImages = [
                                    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop", // Vivienda
                                    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop", // Vertical
                                    "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=600&auto=format&fit=crop", // Multi
                                    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop", // Mixtos
                                    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop", // Hotel
                                    "https://images.unsplash.com/photo-1519567281023-ecff68282947?q=80&w=600&auto=format&fit=crop", // Fashion
                                    "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=600&auto=format&fit=crop", // Community
                                    "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop", // Power
                                    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop", // Strip
                                    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop", // Lifestyle
                                    "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=600&auto=format&fit=crop", // Outlets
                                    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=600&auto=format&fit=crop", // Town
                                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop", // Industrial
                                    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop", // Medico
                                    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600&auto=format&fit=crop", // Negocios
                                    "https://images.unsplash.com/photo-1586528116311-ad8ed7c15908?q=80&w=600&auto=format&fit=crop"  // CEDI
                                ];
                                
                                const bgStyle = {
                                    backgroundImage: `url(${bgImages[i % bgImages.length]})`
                                };

                                return (
                                    <div key={i} className="pt-image-card">
                                        <div className="pt-bg-image" style={bgStyle}></div>
                                        <div className="pt-card-overlay"></div>
                                        <div className="pt-card-content">
                                            <h4 className="pt-card-title">{type}</h4>
                                            <div className="pt-card-line"></div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
