import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  rating: number;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kalel Coronel",
    title: "Student",
    content: "The Nucita Pop is a delightful treat! The combination of chocolate and peanut butter is heavenly. I can't resist these popsicles!",
    rating: 5,
    imageUrl: "src/public/img/testimonial/KALEL.jpeg"
  },
  {
    id: 2,
    name: "Samuel",
    title: "Student",
    content: "After a scorching hike, the Mango pop was pure bliss tangy, sweet, and just cold enough to revive my soul. My new go-to adventure snack!",
    rating: 5,
    imageUrl: "src/public/img/testimonial/SAMUEL.jpeg"
  },
  {
    id: 3,
    name: "Javier Pérez",
    title: "Developer",
    content: "The Kola Pop is a game-changer! The cola flavor is spot on, and the creamy texture is just divine. I can't get enough of these!",
    rating: 5,
    imageUrl: "src/public/img/testimonial/CAMALEON.png"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          These are the testimonies of the people who tried the wonderful BoliPops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.imageUrl} 
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;