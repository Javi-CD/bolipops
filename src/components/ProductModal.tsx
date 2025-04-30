/* 
  Este componente implementa un modal para mostrar detalles ampliados de productos
  Características principales:
  - Se activa al hacer clic en una tarjeta de producto
  - Presenta información detallada del producto seleccionado
  - Implementa múltiples métodos de cierre (X, clic fuera, tecla ESC)
  - Bloquea el scroll del fondo para mejorar la experiencia del usuario
  - Se adapta a diferentes tamaños de pantalla con diseño responsive
  El objetivo es proporcionar información detallada sin redireccionar a otra página
*/

import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react'; // Icono para botón de cierre
import { Product } from '../data/products';

// Define la estructura de props que el componente espera recibir
interface ProductModalProps {
  product: Product | null;  // Producto a mostrar en el modal (null cuando no hay selección)
  isOpen: boolean;          // Controla si el modal debe mostrarse
  onClose: () => void;      // Función para cerrar el modal
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {

  // Referencias para manejar clics fuera del modal y ajustar la posición
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Efecto para manejar eventos y ajustes cuando el modal está abierto
  useEffect(() => {

    // Cierra el modal cuando se hace clic fuera de él
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    // Cierra el modal cuando se presiona la tecla Escape (Mejora accesibilidad)
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {

      // Añade listeners de eventos cuando el modal está abierto
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);

      // Bloquea el scroll del body para evitar la interacción con contenido detrás del modal
      document.body.style.overflow = 'hidden';
      
      // Asegura que el modal esté visible y centrado en el viewport
      if (modalRef.current) {

        // Pequeño retraso para permitir que el DOM se actualice completamente
        // antes de intentar el scrollIntoView
        setTimeout(() => {
          if (modalRef.current) {
            modalRef.current.scrollIntoView({
              behavior: 'auto',     // Inmediato, sin animación
              block: 'center',      // Centra verticalmente
              inline: 'center'      // Centra horizontalmente
            });
          }
        }, 50);
      }
    }

    // Limpieza cuando el componente se desmonta o el modal se cierra
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);

      // Restaura el scroll del body
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]); // Dependencias que provocan la re-ejecución del efecto

  // No renderiza nada si el modal está cerrado o no hay producto seleccionado
  if (!product || !isOpen) return null;

  return (
    // Overlay que cubre toda la pantalla con fondo semitransparente y efecto de desenfoque
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      style={{ 
        alignItems: 'center',
        minHeight: '100vh',

        // Respeta las áreas seguras en dispositivos móviles (notch, barras de navegación, etc.)
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)'
      }}
    >
      {/* Contenedor principal del modal con límites de tamaño y scroll interno */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl m-auto"
        style={{ maxHeight: '80vh', overflowY: 'auto' }} // Permite scroll interno si el contenido es muy alto
      >
        {/* Botón de cierre posicionado absolutamente en la esquina superior derecha */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-gray-500 shadow-md transition-colors hover:text-gray-800"
          aria-label="Close modal" // Mejora accesibilidad
        >
          <X className="h-5 w-5" />
        </button>

        {/* Estructura de dos columnas (una sola en móvil) para contenido del producto */}
        <div className="grid grid-cols-1 md:grid-cols-2">
      
          {/* Columna izquierda: imagen del producto en formato cuadrado */}
          <div className="aspect-square bg-gray-100">
            <img 
              src={product.imageUrl} 
              alt={product.name} // Accesibilidad
              className="h-full w-full object-cover" 
            />
          </div>

          {/* Columna derecha: información detallada del producto */}
          <div className="p-6 md:p-8 flex flex-col">
            
            {/* Título y tagline del producto */}
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <p className="mt-1 text-gray-600">{product.tagline}</p>
            
            {/* Descripción detallada */}
            <p className="mt-6 text-gray-700">{product.description}</p>
            
            {/* Lista de características del producto */}
            <div className="mt-6">
              <h3 className="font-medium text-gray-800">Features:</h3>
              <ul className="mt-2 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-pink-600">•</span> {/* Bullet point personalizado */}
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Precio en posición destacada */}
            <div className="mt-8 flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-800">{product.price}</span>
              {/* Potencial ubicación para botón de compra u otras acciones */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;