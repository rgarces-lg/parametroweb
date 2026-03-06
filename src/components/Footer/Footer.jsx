import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-container">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src="/logo.png" alt="Parámetro Logo" className="footer-logo-img" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'inline-block'; }} />
                        <span style={{ display: 'none' }}><span className="logo-icon">▲</span> PARÁMETRO</span>
                    </div>
                    <p className="footer-desc">Arquitectura Paramétrica y Financiera.</p>
                </div>

                <div className="footer-copy">
                    &copy; {new Date().getFullYear()} Parámetro. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
