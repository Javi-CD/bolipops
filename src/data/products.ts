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
    colors: ["#FF5757", "#3A86FF", "#4CC9F0", "#000000"],
    features: ["Sabor a vainilla", "Refrescante", "Delicioso"],
    imageUrl: "src\\public\\img\\Paleta_vainilla.png"
  },
  {
    id: 2,
    name: "Boli Lemon",
    tagline: "A citrus flavor that will make you feel fresh",
    description: "El Boli Lemon es una explosión de sabor cítrico que te hará sentir fresco y revitalizado. Con su diseño colorido y divertido, este bolígrafo es perfecto para aquellos que buscan un toque de alegría en su escritura. Su tinta de secado rápido garantiza que tus notas se mantengan limpias y ordenadas.",
    price: "$1.500",
    colors: ["#FFD6FF", "#E7C6FF", "#C8B6FF", "#B8C0FF"],
    features: ["Cítrico y refrescante", "Diseño colorido", "Tinta de secado rápido", "Ideal para estudiantes"],
    imageUrl: "src\\public\\img\\paleta_limon.png"
  },
  {
    id: 3,
    name: "Bolipop lemon",
    tagline: "A citrus flavor that will make you feel fresh",
    description: "The Bolipops Metallic Edge series brings a touch of luxury to your writing instruments. Featuring stunning metallic finishes and precision-engineered tips, these pens make a statement while delivering exceptional performance. The weighted balance provides ultimate control for precise writing.",
    price: "$18.99",
    colors: ["#B76E79", "#C0C0C0", "#B87333", "#D4AF37"],
    features: ["Metallic finish", "Weighted balance", "Ultra-smooth ink flow", "Premium gift packaging"],
    imageUrl: "src\\public\\img\\paleta_limon.png"
  },
  {
    id: 4,
    name: "Eco Writer",
    tagline: "Sustainable writing for a greener future",
    description: "The Bolipops Eco Writer combines environmental responsibility with exceptional performance. Made from recycled materials and featuring plant-based inks, these pens help reduce your environmental footprint without compromising on quality. The natural finish provides a unique tactile experience.",
    price: "$15.99",
    colors: ["#A7C957", "#6A994E", "#386641", "#BC4749"],
    features: ["Recycled materials", "Plant-based ink", "Biodegradable components", "Carbon-neutral production"],
    imageUrl: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    name: "Artist Pro",
    tagline: "Precision tools for creative minds",
    description: "Designed for artists and designers, the Bolipops Artist Pro series offers precision and control for detailed work. The fine-point tip allows for intricate lines, while the specialized ink ensures consistent flow and vibrant colors. Unleash your creativity with these professional-grade pens.",
    price: "$24.99",
    colors: ["#2D3142", "#4F5D75", "#BFC0C0", "#EF8354"],
    features: ["Ultra-fine 0.4mm tip", "Archival-quality ink", "Perfect for sketching", "Water-resistant formula"],
    imageUrl: "https://images.pexels.com/photos/5816291/pexels-photo-5816291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    name: "Pop Mini",
    tagline: "Compact size, big performance",
    description: "The Bolipops Pop Mini proves that great things come in small packages. These compact pens are perfect for on-the-go writing, fitting easily into pockets, purses, and planners. Despite their small size, they deliver the same smooth writing experience as their full-sized counterparts.",
    price: "$9.99",
    colors: ["#FF595E", "#FFCA3A", "#8AC926", "#1982C4"],
    features: ["Compact design", "Retractable mechanism", "Versatile everyday use", "Travel-friendly size"],
    imageUrl: "https://images.pexels.com/photos/6046223/pexels-photo-6046223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const sliderImages = [
  {
    id: 1,
    title: "Fresh and Fun",
    subtitle: "artisanal olis that awaken your senses",
    imageUrl: "src/public/img/paleta_limon.png"
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