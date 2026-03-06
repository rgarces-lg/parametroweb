import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="nav-logo">
                    <img src="/logo.png" alt="Parámetro Logo" className="logo-img" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                    <span className="logo-text" style={{ display: 'none' }}>PARÁMETRO</span>
                </div>

                {/* Simple desktop menu for aesthetic purposes */}
                <div className="nav-links">
                    <a href="#soluciones" className="nav-link">Soluciones</a>
                    <a href="#etapas" className="nav-link">Etapas</a>
                    <a href="#servicios" className="nav-link">Servicios</a> <a href="#producto" className="nav-link">Producto</a>
                    <a href="#proceso" className="nav-link">Proceso</a>
                    <a href="#metodologia" className="nav-link">Metodología</a>
                    <a href="#analisis-financiero" className="nav-link">Análisis</a>
                </div>

                <div className="nav-cta">
                    <button className="btn-primary"><a href="https://www.facebook.com/profile.php?id=61580770139641">Contacto</a></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
