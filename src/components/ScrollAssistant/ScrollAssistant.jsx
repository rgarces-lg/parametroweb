import React, { useState, useEffect } from 'react';
import './ScrollAssistant.css';

const ScrollAssistant = () => {
    const [scrolled, setScrolled] = useState(false);

    // Ordered list of section IDs for navigation
    const sections = ['inicio', 'soluciones', 'etapas', 'servicios', 'producto', 'proceso', 'metodologia', 'analisis-financiero'];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (direction) => {
        const viewportHeight = window.innerHeight;
        const currentScroll = window.scrollY;

        if (direction === 'up') {
            // Find the section that is CURRENTLY in view or just above it
            let targetId = 'inicio';
            // Reverse search for first section whose top is substantially above the viewport top
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // If the section top is more than 100px above current view, it's a candidate for "prev"
                    if (rect.top < -100) {
                        targetId = sections[i];
                        break;
                    }
                }
            }
            const targetEl = document.getElementById(targetId);
            if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Find the first section whose top is substantially below the viewport top
            let targetId = sections[sections.length - 1];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top > 100) {
                        targetId = id;
                        break;
                    }
                }
            }
            const targetEl = document.getElementById(targetId);
            if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="scroll-assistant-container">
            {/* UP BUTTON */}
            <button
                className={`scroll-btn btn-up ${scrolled ? 'visible' : 'hidden'}`}
                onClick={() => scrollToSection('up')}
                aria-label="Subir sección"
            >
                <i className="fa-solid fa-chevron-up"></i>
                <span className="btn-text">SUBIR</span>
            </button>

            {/* DOWN BUTTON */}
            <button
                className="scroll-btn btn-down"
                onClick={() => scrollToSection('down')}
                aria-label="Bajar sección"
            >
                <span className="btn-text">BAJAR</span>
                <div className="mouse-anim">
                    <div className="wheel"></div>
                </div>
                <i className="fa-solid fa-chevron-down"></i>
            </button>
        </div>
    );
};

export default ScrollAssistant;
