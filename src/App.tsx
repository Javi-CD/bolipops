
/*
  Este archivo es el componente raíz de la aplicación que orquesta la estructura de la landing page
  La decisión de separar cada sección en componentes individuales facilita:
  - El mantenimiento del código por diferentes desarrolladores
  - La reutilización de componentes en futuros proyectos
  - Las pruebas unitarias de cada sección de forma independiente
*/

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

    // El contenedor principal utiliza min-h-screen para asegurar que ocupe al menos el alto completo de la ventana
    <div className="min-h-screen bg-white">
      
      {/* 
        La estructura sigue un patrón estándar de landing page con navegación fija en la parte superior,
        secciones de contenido organizadas en orden de importancia y un pie de página
      */}
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