/*
    Este componente implementa un slider a pantalla completa para la sección principal (Hero)
    Características principales:
    - Rotación automática de diapositivas cada 5 segundos
    - Controles manuales (flechas y puntos indicadores)
    - Animaciones de transición suaves
    - Textos y llamadas a la acción superpuestos
    El objetivo de este componente es captar la atención del usuario inmediatamente
    y comunicar la esencia de la marca Bolipops con imágenes de alto impacto
*/

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Iconos para navegación
import { sliderImages } from '../data/products'; // Datos centralizados de imágenes

const HeroSlider: React.FC = () => {

  // Estado para controlar qué diapositiva está activa
  const [currentSlide, setCurrentSlide] = useState(0);

  // Estado para prevenir múltiples clics durante las animaciones
  const [isAnimating, setIsAnimating] = useState(false);

  // Función para navegar a una diapositiva específica con protección anti-rebote
  const goToSlide = (index: number) => {
    if (isAnimating) return; // Evita cambios durante una animación en curso
    setIsAnimating(true);
    setCurrentSlide(index);

    // Desbloquea la navegación después de completar la transición
    setTimeout(() => setIsAnimating(false), 500); // Coincide con la duración de la transición CSS
  };

  // Funciones de navegación con manejo de límites (rotación cíclica)
  const nextSlide = () => {
    if (isAnimating) return;
    const newIndex = (currentSlide + 1) % sliderImages.length; // Vuelve al inicio al llegar al final
    goToSlide(newIndex);
  };

  const prevSlide = () => {
    if (isAnimating) return;

    // Fórmula para manejar el caso del índice negativo al retroceder desde la primera diapositiva
    const newIndex = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
    goToSlide(newIndex);
  };

  // Efecto para rotación automática de diapositivas
  useEffect(() => {

    // Configura un intervalo para cambiar automáticamente cada 5 segundos
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    // Limpia el intervalo al desmontar el componente o cambiar de diapositiva
    // para evitar comportamientos inesperados o memory leaks
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]); // Dependencias que reinician el intervalo

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden" data-aos="fade-up">

      {/* Contenedor principal del Slider */}
      <div className="relative h-full w-full">

        {/* Mapeo de diapositivas desde los datos centralizados */}
        {sliderImages.map((slide, index) => (
          <div
            key={slide.id}

            // Cada diapositiva está posicionada absolutamente y cambia su opacidad para crear el efecto de transición
            // La diapositiva activa tiene opacidad 100%, las demás 0%
            className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Imagen de fondo con filtro para mejorar legibilidad del texto */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slide.imageUrl})`,
                filter: 'brightness(0.7)' // Oscurece ligeramente la imagen para mejorar contraste con el texto
              }}
            />
            {/* Gradiente superpuesto para mejorar la legibilidad del texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Contenido de texto centrado */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">

              {/* Título principal con animación de entrada independiente */}
              <h1 
                className={`mb-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {slide.title}
              </h1>

              {/* Subtítulo con animación de entrada independiente */}
              <p 
                className={`mb-8 text-xl md:text-2xl transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {slide.subtitle}
              </p>
              {/* Botón CTA con animación de entrada y efectos hover */}
              <a 
                href="#products" 
                className={`px-6 py-3 bg-pink-600 rounded-lg font-medium text-white transition-opacity duration-500 hover:bg-pink-700 hover:shadow-lg ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Explore Collection
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación laterales */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label="Previous slide" // Mejora accesibilidad
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label="Next slide" // Mejora accesibilidad
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicadores de diapositiva (puntos) */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            
            // El indicador activo es más ancho para destacarlo visualmente
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-white' // Indicador activo: más ancho y color sólido
                : 'bg-white/50 hover:bg-white/80' // Indicadores inactivos: semitransparentes con hover
            }`}
            aria-label={`Go to slide ${index + 1}`} // Mejora accesibilidad
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;