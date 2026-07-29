import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="bg-[#0f0f1a] min-h-screen">
      {/* Hero */}
      <HeroSection />
      {/* Features */}
      <FeaturesSection />
      {/* Contact */}
      <ContactSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
