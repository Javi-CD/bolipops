
/*
  Este archivo centraliza todos los datos de productos y elementos visuales del slider
  La centralización permite:
  - Mantener la consistencia de datos en toda la aplicación
  - Facilitar cambios en productos sin modificar componentes de UI
  - Simular una API hasta implementar un backend real
*/

// Importación de imágenes para los productos y el slider
import kolaImg from "../assets/images/products/kola_con_leche.png";
import mangoImg from "../assets/images/products/mango_biche_2.png";
import maniImg from "../assets/images/products/mani.png";
import nucitaImg from "../assets/images/products/nucita.png";
import kolaSliderImg from "../assets/images/slider/kola_slider.png";
import maniSliderImg from "../assets/images/slider/mani_slider.png";
import nucitaSliderImg from "../assets/images/slider/nucita_slider.png";

/*
  Interface Product define el contrato para todos los productos
  Esto garantiza que todos los productos tengan la misma estructura
  y facilita la detección de errores durante el desarrollo
*/

export interface Product {
  id: number;            // Identificador único para cada producto
  name: string;          // Nombre del producto para mostrar en la UI
  tagline: string;       // Descripción corta para tarjetas y vistas previas
  description: string;   // Descripción completa para modales y páginas de detalle
  price: string;         // Precio como string para permitir formatos como "$1.500"
  colors: string[];      // Colores disponibles en formato HEX para personalización visual
  features: string[];    // Características principales para destacar en la UI
  imageUrl: string;      // Ruta a la imagen principal del producto
}

// Array de productos que alimenta las secciones de productos de la landing
// Cada producto sigue la estructura definida en la interfaz Product
export const products: Product[] = [

  // Producto: Boli de Kola con leche
  {
    id: 1,
    name: "Kola Pop",
    tagline: "A sweet and exquisite cola con leche boli for $1,500 COP",
    description: "Bolipops feature a classic yet vibrant vanilla flavor, making you enjoy every bite.",
    price: "$1.500",
    colors: [
      "#FF5757", // Rojo vibrante que representa el sabor cola
      "#3A86FF", // Azul para variante refrescante
      "#4CC9F0", // Celeste para variante light
      "#000000"  // Negro para la versión clásica
    ],
    features: [
      "Vanilla flavor",
      "Refreshing",
      "Delicious"
    ],
    imageUrl:  kolaImg
  },

  // Producto: Boli de mango biche
  {
    id: 2,
    name: "Mango Pop",
    tagline: "Green mango boli with a sweet and sour and exquisite flavor for a price of $2000 COP",
    description:  "Boli Mango Biche is a delightful treat that combines the sweetness of ripe mangoes with a refreshing twist.",
    price: "$2.000",
    colors: [
      "#FFD6FF", // Rosa suave para la versión básica
      "#E7C6FF", // Lila para variante especial
      "#C8B6FF", // Púrpura para edición limitada
      "#B8C0FF"  // Azul claro para versión tropical
    ],
    features: [
      "Natural flavor",
      "exquisite",
      "healthy"
    ],
    imageUrl: mangoImg
  },

  // Producto: Boli de maní
  {
    id: 3,
    name: "Peanut Pop",
    tagline: "Peanut boli with a unique and exquisite flavor for a price of $2,000 COP",
    description: "Peanuts are a good source of protein, our popsicles combine that source of protein with a delicious and refreshing flavor.",
    price: "$2.000",
    colors: [
      "#B76E79", // Rosa antiguo para la versión clásica
      "#C0C0C0", // Plateado para versión premium
      "#B87333", // Cobre para edición especial
      "#D4AF37"  // Dorado para versión ultra
    ],
    features: [
      "healthy",
      "nutritious",
      "natural"

    ],
    imageUrl: maniImg
  },
  
  // Producto: Boli de Nucita
  {
    id: 4,
    name: "Nucita Pop",
    tagline: "A unique and delicious nutty boli for $2,000.",
    description: "Boli Nucita is a delightful treat that combines the richness of chocolate with a creamy texture.",
    price: "$2.000",
    colors: [
      "#FFD6FF", // Rosa para versión estándar
      "#E7C6FF", // Lila para versión con más chocolate
      "#C8B6FF", // Púrpura para versión con avellanas extras
      "#B8C0FF"  // Azul para versión con leche
    ],
    features: [
      "Chocolatey goodness",
      "Creamy",
      "Delicious"
    ],
    imageUrl: nucitaImg
  },
];

// Imágenes y textos para el slider principal de la página
// Cada elemento contiene la información necesaria para una diapositiva
export const sliderImages = [
  {
    id: 1,
    title: "Fresh and Fun",
    subtitle: "artisanal bolis that awaken your senses",
    imageUrl: kolaSliderImg
  },
  {
    id: 2,
    title: "Explosion of Flavors",
    subtitle: "Vibrant frozen routes for your palate",
    imageUrl: nucitaSliderImg
  },
  {
    id: 3,
    title: "Refresh Your Day",
    subtitle: "icy sweetness that sings of summer",
    imageUrl: maniSliderImg
  },
];