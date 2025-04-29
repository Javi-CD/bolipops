import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
      
      // Asegúrarse de que el modal sea visible en el viewport
      if (modalRef.current) {
        // Añadir un pequeño retraso para permitir que el DOM se actualice
        setTimeout(() => {
          if (modalRef.current) {
            modalRef.current.scrollIntoView({
              behavior: 'auto',
              block: 'center',
              inline: 'center'
            });
          }
        }, 50);
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!product || !isOpen) return null;

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      style={{ 
        alignItems: 'center',
        minHeight: '100vh',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)'
      }}
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl m-auto"
        style={{ maxHeight: '80vh', overflowY: 'auto' }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-gray-500 shadow-md transition-colors hover:text-gray-800"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square bg-gray-100">
            <img 
              src={product.imageUrl} 
              alt={product.name}
              className="h-full w-full object-cover" 
            />
          </div>

          <div className="p-6 md:p-8 flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <p className="mt-1 text-gray-600">{product.tagline}</p>
            
            <p className="mt-6 text-gray-700">{product.description}</p>
            
            <div className="mt-6">
              <h3 className="font-medium text-gray-800">Features:</h3>
              <ul className="mt-2 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-pink-600">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-800">{product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;