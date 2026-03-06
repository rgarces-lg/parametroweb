import React from 'react';
import './Hero.css';

const Hero = ({ data }) => {
    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>

            <div className="hero-content container animate-fade-in-up">
                <div className="hero-brand-logo">
                    <img src="/logo.png" alt="Parámetro Logo" className="hero-logo-img" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                    <div className="triangle-logo" style={{ display: 'none' }}>
                        <svg viewBox="0 0 100 100" className="logo-svg">
                            <polygon points="50,15 90,85 10,85" fill="none" stroke="var(--color-primary)" strokeWidth="12" strokeLinejoin="miter" />
                            <polygon points="50,45 70,85 30,85" fill="var(--color-primary)" />
                        </svg>
                    </div>
                </div>

                <div className="hero-text">
                    <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: data.title.replace('\n', '<br/>') }}></h1>
                </div>
            </div>

            {/* Decorative footer bar reflecting the slide design */}
            <div className="hero-bottom-bar">
                <div className="bar-orange"></div>
                <div className="bar-dark"></div>
            </div>
        </section>
    );
};

export default Hero;
