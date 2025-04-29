import React from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ProductsSection from './components/ProductsSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSlider />
      <ProductsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;