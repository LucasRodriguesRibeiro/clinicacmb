import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Home } from './pages/Home';
import { Especialidade } from './pages/Especialidade';
import { SEOManager } from './seo/components/SEOManager';
import { ScrollToSection } from './seo/components/ScrollToSection';
import { Analytics } from './seo/components/Analytics';

const App: React.FC = () => {
  return (
    <Router>
      <SEOManager />
      <ScrollToSection />
      <Analytics />
      <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/corpo-clinico" element={<Home />} />
            <Route path="/exames" element={<Home />} />
            <Route path="/contato" element={<Home />} />
            <Route path="/especialidades/:slug" element={<Especialidade />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
};

export default App;