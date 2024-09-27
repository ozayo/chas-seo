import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home'; // Bileşenleri doğrudan burada import ediyoruz
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Header from './components/Header'; 
import Footer from './components/Footer';
import TrackPageView from './components/TrackPageView';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <TrackPageView /> {/* Sayfa izleme bileşeni */}
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 mt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

