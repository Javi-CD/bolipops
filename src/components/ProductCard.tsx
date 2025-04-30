
/*
  Este componente renderiza una tarjeta individual para cada producto
  Características principales:
  - Diseño atractivo con sombras y bordes redondeados
  - Efectos de hover para mejorar la interactividad
  - Estructura consistente para todos los productos
  - Delegación de eventos al componente padre
  El objetivo es presentar información básica del producto de forma atractiva
  y animar al usuario a hacer clic para ver más detalles
*/

import React from 'react';
import { Product } from '../data/products';

// Define la estructura de props que el componente espera recibir
interface ProductCardProps {
  product: Product;      // Datos completos del producto a mostrar
  onClick: () => void;   // Función a ejecutar cuando el usuario hace clic en la tarjeta
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 

      // Utilizamos group para aplicar estilos a elementos hijos cuando se hace hover en la tarjeta
      // La sombra aumenta en hover para dar sensación de elevación
      // cursor-pointer indica que este elemento es interactivo
      className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer"
      onClick={onClick} // Propaga el evento de clic al padre (ProductsSection)
    >
      {/* Contenedor de imagen con ratio 1:1 (cuadrado) */}
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} // Mejora accesibilidad

          // La imagen se amplía ligeramente al hacer hover para crear efecto de zoom
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      
      {/* Contenedor de información textual del producto */}
      <div className="p-4">

        {/* Nombre del producto con estilo destacado */}
        <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
        
        {/* Descripción corta (tagline) con estilo más sutil */}
        <p className="mt-1 text-sm text-gray-600">{product.tagline}</p>
        
        {/* Precio destacado con color de marca */}
        <div className="mt-3">
          <span className="font-medium text-pink-600">{product.price}</span>
        </div>
      </div>
      
      {/* Barra de acento inferior que se anima al hacer hover
          Esta técnica de scale-x crea un efecto de "revelación" desde el centro */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </div>
  );
};

export default ProductCard;