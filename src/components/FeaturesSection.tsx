import React from 'react';
import { Droplets, Feather, Award, Recycle } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Droplets className="h-8 w-8 text-pink-600" />,
    title: "Refreshing and Creamy",
    description: "Smooth texture that melts in your mouth, releasing pure flavor with every lick."
  },
  {
    icon: <Feather className="h-8 w-8 text-pink-600" />,
    title: "Variety of Flavors",
    description: "From tangy fruits to tropical sweets, each boli is a flavor adventure."
  },
  {
    icon: <Award className="h-8 w-8 text-pink-600" />,
    title: "High quality guaranteed",
    description: "We guarantee that our products will leave you with great consumer satisfaction." 
  },
  {
    icon: <Recycle className="h-8 w-8 text-pink-600" />,
    title: "Eco-Friendly Options",
    description: "Our BoliPops line features recycled materials and sustainable production practices."
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Bolipops</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          They're not just bolis, they're bites of artisanal freshness that delight your palate.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="bg-pink-50 p-3 inline-flex rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;