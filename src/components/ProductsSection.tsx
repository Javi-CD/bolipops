import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const ProductsSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our handcrafted popsicles, from tart raspberry to tropical mango, and indulge in the freshness.          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => handleProductClick(product)} 
            />
          ))}
        </div>
      </div>

      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default ProductsSection;