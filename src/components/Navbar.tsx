import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/bolipops_logo.svg'; 

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            {/* <PenTool className={`h-8 w-8 ${isScrolled ? 'text-pink-600' : 'text-white'}`} /> */}
            <a href="#home">
        <img className="h-10 w-auto" src={Logo} alt="Bolipops Logo" />
      </a>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Bolipops</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-200'}`}>Home</a>
            <a href="#products" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-200'}`}>Products</a>
            <a href="#features" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-200'}`}>Features</a>
            <a href="#testimonials" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-200'}`}>Testimonials</a>
            {/* <a href="#contact" className={`bg-pink-600 text-white py-2 px-4 rounded-lg transition-all hover:bg-pink-700 hover:shadow-lg`}>Shop Now</a> */}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#home" className="text-gray-800 hover:text-pink-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#products" className="text-gray-800 hover:text-pink-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Products</a>
          <a href="#features" className="text-gray-800 hover:text-pink-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#testimonials" className="text-gray-800 hover:text-pink-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <a href="#contact" className="bg-pink-600 text-white py-2 px-4 rounded-lg text-center hover:bg-pink-700 hover:shadow-lg" onClick={() => setIsMenuOpen(false)}>Shop Now</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;