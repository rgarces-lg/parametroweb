import React from 'react';

// Sections
import Process from '../sections/Process/Process';
import DataPath from '../sections/DataPath/DataPath';
import Methodology from '../sections/Methodology/Methodology';

// Data
import data from '../data/content.json';

const MetodologiaPage = () => {
    return (
        <main className="main-content" style={{ paddingTop: '80px' }}>
            <div id="etapas">
                <Process data={data.process} />
            </div>

            <div id="proceso">
                <DataPath data={data.dataPath} />
            </div>

            <div id="metodologia">
                <Methodology data={data.methodology} />
            </div>
        </main>
    );
};

export default MetodologiaPage;
