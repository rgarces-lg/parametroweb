import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import ServiciosPage from './pages/ServiciosPage';
import MetodologiaPage from './pages/MetodologiaPage';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollAssistant from './components/ScrollAssistant/ScrollAssistant';
import ScrollToTop from './components/ScrollToTop'; // Utility to scroll to top on route change

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/metodologia" element={<MetodologiaPage />} />
        </Routes>

        <ScrollAssistant />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
