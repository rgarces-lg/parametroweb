import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

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
                    <NavLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/logo.png" alt="Parámetro Logo" className="logo-img" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                        <span className="logo-text" style={{ display: 'none' }}>PARÁMETRO</span>
                    </NavLink>
                </div>

                {/* Multipage routed navigation */}
                <div className="nav-links">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} end>Inicio</NavLink>
                    <NavLink to="/servicios" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Servicios</NavLink>
                    <NavLink to="/metodologia" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Metodología</NavLink>
                </div>

                <div className="nav-cta">
                    <a href="https://www.facebook.com/profile.php?id=61580770139641" target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-block', lineHeight: 'normal' }}>Contacto</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
