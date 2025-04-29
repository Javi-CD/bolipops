import React from 'react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-600">{product.tagline}</p>
        
        <div className="mt-3">
          <span className="font-medium text-pink-600">{product.price}</span>
        </div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </div>
  );
};

export default ProductCard;