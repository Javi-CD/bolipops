
/*
  Este componente gestiona la sección de productos de la landing page
  Características principales:
  - Presentación de productos en un diseño de cuadrícula responsive
  - Sistema de modales para mostrar detalles de productos
  - Integración con componentes reutilizables (ProductCard y ProductModal)
  El objetivo es mostrar la variedad de productos de manera atractiva
  y permitir al usuario explorar detalles sin abandonar la página principal
*/

import React, { useState } from 'react';
import { products } from '../data/products'; // Datos centralizados de productos
import ProductCard from './ProductCard'; // Componente para visualización de tarjetas de productos
import ProductModal from './ProductModal'; // Componente para detalles en modal

const ProductsSection: React.FC = () => {

  // Estado para almacenar el producto seleccionado actualmente (para el modal)
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Manejador que se activa al hacer clic en una tarjeta de producto
  const handleProductClick = (product) => {
    setSelectedProduct(product); // Guarda el producto seleccionado
    setIsModalOpen(true); // Abre el modal
  };

  // Función para cerrar el modal cuando el usuario lo solicite
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    // La sección utiliza el ID "products" para permitir la navegación directa desde enlaces
    // El atributo data-aos activa la animación de entrada al hacer scroll
    <section id="products" className="py-16 md:py-24 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6">

        {/* Encabezado de la sección con título y descripción */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handcrafted boli, from tart mango to tropical mango, and indulge in the freshness.
          </p>
        </div>

        {/* Cuadrícula de productos con diseño responsive:
            - 1 columna en dispositivos pequeños
            - 2 columnas en dispositivos medianos
            - 3 columnas en dispositivos grandes 
            Esta estructura optimiza la visualización en cualquier tamaño de pantalla */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {/* Iteración sobre el array de productos para generar una tarjeta por cada uno */}
          {products.map((product, idx) => (
            <div key={product.id}>

              {/* El componente ProductCard recibe:
                  - Los datos completos del producto
                  - Una función de callback para manejar clics 
                  Esto permite que la tarjeta sea un componente "tonto" que solo
                  se encarga de la presentación y delega la lógica al padre */}
              <ProductCard
                product={product} 
                onClick={() => handleProductClick(product)} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal para detalles de productos
          Solo se muestra cuando isModalOpen es true
          Recibe el producto seleccionado y una función para cerrarse */}
      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default ProductsSection;