import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const MethodologyPage = lazy(() => import('./pages/MethodologyPage'));
const TypologiesPage = lazy(() => import('./pages/TypologiesPage'));
const MarketStudyPage = lazy(() => import('./pages/MarketStudyPage'));
const ServiciosPage = lazy(() => import('./pages/ServiciosPage'));


function App() {
  return (
    <Router>
      <ScrollToTop />
      <LoadingScreen />
      <div className="app-container font-sans bg-brand-black min-h-screen">
        <Navbar />
        
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/metodologia" element={<MethodologyPage />} />
            <Route path="/tipologias" element={<TypologiesPage />} />
            <Route path="/estudio-mercado" element={<MarketStudyPage />} />
          </Routes>
        </Suspense>


        <Footer />
      </div>
    </Router>
  );
}

export default App;
