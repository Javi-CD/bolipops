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
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!product || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div 
        ref={modalRef}
        className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden animate-fadeIn"
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
            
            {/* <div className="mt-4 flex space-x-2">
              {product.colors.map((color, index) => (
                <div 
                  key={index}
                  className="h-6 w-6 rounded-full border-2 border-white shadow-sm cursor-pointer transition-transform hover:scale-110"
                  style={{ backgroundColor: color }}
                  aria-label={`Color option ${index + 1}`}
                />
              ))}
            </div> */}
            
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
              <button className="bg-pink-600 px-6 py-2 rounded-lg text-white font-medium transition-all hover:bg-pink-700 hover:shadow-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;