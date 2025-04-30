
/*
  Este componente implementa la barra de navegación con dos comportamientos:
  1. Cambia de apariencia (transparente a sólida) cuando el usuario hace scroll
  2. Se adapta a dispositivos móviles con un menú hamburguesa
  Este diseño mejora la experiencia de usuario al:
  - Permitir ver más contenido al inicio (barra transparente)
  - Mantener la navegación accesible al hacer scroll (barra sólida)
  - Adaptarse a todo tipo de dispositivos
*/

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Iconos para menú hamburguesa
import Logo from '../assets/bolipops_logo.svg'; 

const Navbar: React.FC = () => {

  // Estado para controlar la apariencia de la barra según el desplazamiento
  const [isScrolled, setIsScrolled] = useState(false);

  // Estado para controlar la visibilidad del menú en dispositivos móviles
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efecto que detecta el scroll y actualiza el estado
  useEffect(() => {
    const handleScroll = () => {

      // Cambiamos a modo sólido cuando hay más de 10px de scroll
      // Este valor bajo asegura una transición rápida para no confundir al usuario
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Añadimos el listener al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Limpieza del listener al desmontar para evitar memory leaks
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 

      // La clase fixed asegura que la barra esté siempre visible
      // z-50 coloca la barra por encima de otros elementos
      // La transición suaviza los cambios de estilo al hacer scroll
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">

          {/* Logo y nombre de la marca */}
          <a href="#" className="flex items-center gap-2">
            <a href="#home">
              <img className="h-10 w-auto" src={Logo} alt="Bolipops Logo" />
            </a>

            {/* El color del texto cambia según el scroll para mantener contraste */}
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Bolipops</span>
          </a>

          {/* Navegación para escritorio - visible solo en pantallas medianas y grandes */}
          <div className="hidden md:flex items-center space-x-8">

            {/* Links de navegación con colores adaptados según scroll */}
            <a href="#home" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-200'}`}>Home</a>
            <a href="#products" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-200'}`}>Products</a>
            <a href="#features" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-200'}`}>Features</a>
            <a href="#testimonials" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-200'}`}>Testimonials</a>
            <a href="#contact" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-200'}`}>Contact</a>

            {/* Botón de llamada a la acción desactivado
            <a href="#contact" className={`bg-pink-600 text-white py-2 px-4 rounded-lg transition-all hover:bg-pink-700 hover:shadow-lg`}>Shop Now</a> */}
          </div>

          {/* Botón del menú móvil - visible solo en pantallas pequeñas */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} // Mejora de accesibilidad
          >
            {/* Icono que cambia entre X y hamburguesa según estado */}
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Menú de navegación móvil - aparece como overlay */}
      <div 
        // Animación de altura y opacidad para entrada/salida suave
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">

          {/* Links con separadores para mejor visualización */}
          <a href="#home" className="text-gray-800 hover:text-pink-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#products" className="text-gray-800 hover:text-pink-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Products</a>
          <a href="#features" className="text-gray-800 hover:text-pink-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#testimonials" className="text-gray-800 hover:text-pink-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Testimonials</a>

          {/* Botón CTA más prominente en móvil para aumentar conversiones */}
          <a href="#contact" className="text-gray-800 hover:text-pink-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;