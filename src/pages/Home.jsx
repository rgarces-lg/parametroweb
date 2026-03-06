import React from 'react';

// Sections
import Hero from '../sections/Hero/Hero';
import ValueProposal from '../sections/ValueProposal/ValueProposal';

// Data
import data from '../data/content.json';

const Home = () => {
    return (
        <main className="main-content">
            <div id="inicio">
                <Hero data={data.hero} />
            </div>

            <div id="soluciones">
                <ValueProposal data={data.valueProposition} />
            </div>
        </main>
    );
};

export default Home;
