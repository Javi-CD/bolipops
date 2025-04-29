import { StaticImageData } from 'next/image';

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
  {
    id: 1,
    name: "Classic Pop",
    tagline: "A classic flavor, but loved by all",
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
    imageUrl: "src\\public\\img\\Paleta_vainilla.png"
  },
  {
    id: 2,
    name: "Mango Pop",
    tagline: "A delicious natural mango flavor",
    description:  "Boli Lemon is an explosion of citrus flavor that will leave you feeling refreshed and revitalized.",
    price: "$1.500",
    colors: [
      "#FFD6FF", 
      "#E7C6FF", 
      "#C8B6FF", 
      "#B8C0FF"
    ],
    features: [
      "Citrusy and refreshing",
      "Refreshing",
      "Delicious"
    ],
    imageUrl: "src\\public\\img\\paleta_mango.png"
  },
  {
    id: 3,
    name: "Bolipop lemon",
    tagline: "A citrus flavor that will make you feel fresh",
    description: "Boli Lemon is an explosion of citrus flavor that will leave you feeling refreshed and revitalized.",
    price: "$1.500",
    colors: [
      "#B76E79", 
      "#C0C0C0", 
      "#B87333", 
      "#D4AF37"
    ],
    features: [
      "Citrusy and refreshing",
      "Refreshing",
      "Delicious"

    ],
    imageUrl: "src\\public\\img\\paleta_limon.png"
  },
  
  {
    id: 4,
    name: "Mango Pop",
    tagline: "A delicious natural mango flavor",
    description: "Boli Lemon is an explosion of citrus flavor that will leave you feeling refreshed and revitalized.",
    price: "$1.500",
    colors: [
      "#FFD6FF", 
      "#E7C6FF", 
      "#C8B6FF", 
      "#B8C0FF"
    ],
    features: [
      "Citrusy and refreshing",
      "Refreshing",
      "Delicious"
    ],
    imageUrl: "src\\public\\img\\paleta_mango.png"
  },
  {
    id: 5,
    name: "Mango Pop",
    tagline: "A delicious natural mango flavor",
    description: "Boli Lemon is an explosion of citrus flavor that will leave you feeling refreshed and revitalized.",
    price: "$1.500",
    colors: [
      "#FFD6FF", 
      "#E7C6FF", "#C8B6FF", 
      "#B8C0FF"
    ],
    features: [
      "Citrusy and refreshing",
      "Refreshing",
      "Delicious"
    ],
    imageUrl: "src\\public\\img\\paleta_mango.png"
  },
  {
    id: 6,
    name: "Mango Pop",
    tagline: "A delicious natural mango flavor",
    description: "Boli Lemon is an explosion of citrus flavor that will leave you feeling refreshed and revitalized.",
    price: "$1.500",
    colors: [
      "#FFD6FF", 
      "#E7C6FF", 
      "#C8B6FF", 
      "#B8C0FF"],
    features: [
      "Citrusy and refreshing",
      "Refreshing",
      "Delicious"
    ],
    imageUrl: "src\\public\\img\\paleta_mango.png"
  },
];

export const sliderImages = [
  {
    id: 1,
    title: "Fresh and Fun",
    subtitle: "artisanal olis that awaken your senses",
    imageUrl: "src/public/img/paleta_mango.png"
  },
  {
    id: 2,
    title: "Explosion of Flavors",
    subtitle: "Vibrant frozen routes for your palate",
    imageUrl:"src/public/img/paleta_limon.png"
  },
  {
    id: 3,
    title: "Refresh Your Day",
    subtitle: "icy sweetness that sings of summer",
    imageUrl: "src/public/img/paleta_limon.png"
  }
];