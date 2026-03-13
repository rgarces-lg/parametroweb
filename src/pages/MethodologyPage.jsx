import Methodology from '../sections/Methodology/Methodology';
import ProcesoAnalitico from '../sections/Methodology/ProcesoAnalitico';
import ProcessDiagram from '../sections/Methodology/ProcessDiagram';
import content from '../data/content.json';

const MetodologiaPage = () => {
  return (
    <main className="bg-brand-black">
      {/* 1. Planning Methodology Section (Image 1) */}
      <Methodology data={content.methodology} />
      
      {/* 2. Process Info Section (Image 3) */}
      <ProcesoAnalitico />

      {/* 3. Detailed Process Diagram (Existing) */}
      <ProcessDiagram />
    </main>
  );
};

export default MetodologiaPage;

