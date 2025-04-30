// import { StaticImageData } from 'next/image';

import kolaImg from "../assets/images/products/kola_con_leche.png";
import mangoImg from "../assets/images/products/mango_biche_2.png";
import maniImg from "../assets/images/products/mani.png";
import nucitaImg from "../assets/images/products/nucita.png";
import kolaSliderImg from "../assets/images/slider/kola_slider.png";
import maniSliderImg from "../assets/images/slider/mani_slider.png";
import nucitaSliderImg from "../assets/images/slider/nucita_slider.png";


export interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  price: string;
  colors: string[];
  features: string[];
  imageUrl: string;
}

export const products: Product[] = [

  // TODO Boli de Kola con leche
  {
    id: 1,
    name: "Kola Pop",
    tagline: "A sweet and exquisite cola con leche boli for $1,500 COP",
    description: "Bolipops feature a classic yet vibrant vanilla flavor, making you enjoy every bite.",
    price: "$1.500",
    colors: [
      "#FF5757", 
      "#3A86FF", 
      "#4CC9F0", 
      "#000000"
    ],
    features: [
      "Vanilla flavor",
      "Refreshing",
      "Delicious"
    ],
    imageUrl:  kolaImg
  },

  // TODO Boli de mango biche
  {
    id: 2,
    name: "Mango Pop",
    tagline: "Green mango boli with a sweet and sour and exquisite flavor for a price of $2000 COP",
    description:  "Boli Mango Biche is a delightful treat that combines the sweetness of ripe mangoes with a refreshing twist.",
    price: "$2.000",
    colors: [
      "#FFD6FF", 
      "#E7C6FF", 
      "#C8B6FF", 
      "#B8C0FF"
    ],
    features: [
      "Natural flavor",
      "exquisite",
      "healthy"
    ],
    imageUrl: mangoImg
  },

  // TODO Boli de mani
  {
    id: 3,
    name: "Peanut Pop",
    tagline: "Peanut boli with a unique and exquisite flavor for a price of $2,000 COP",
    description: "Peanuts are a good source of protein, our popsicles combine that source of protein with a delicious and refreshing flavor.",
    price: "$2.000",
    colors: [
      "#B76E79", 
      "#C0C0C0", 
      "#B87333", 
      "#D4AF37"
    ],
    features: [
      "healthy",
      "nutritious",
      "natural"

    ],
    imageUrl: maniImg
  },
  
  // TODO Boli de Nucita
  {
    id: 4,
    name: "Nucita Pop",
    tagline: "A unique and delicious nutty boli for $2,000.",
    description: "Boli Nucita is a delightful treat that combines the richness of chocolate with a creamy texture.",
    price: "$2.000",
    colors: [
      "#FFD6FF", 
      "#E7C6FF", 
      "#C8B6FF", 
      "#B8C0FF"
    ],
    features: [
      "Chocolatey goodness",
      "Creamy",
      "Delicious"
    ],
    imageUrl: nucitaImg
  },
];

export const sliderImages = [
  {
    id: 1,
    title: "Fresh and Fun",
    subtitle: "artisanal olis that awaken your senses",
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