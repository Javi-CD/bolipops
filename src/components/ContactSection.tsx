import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
            <p className="text-gray-300 mb-8">
              Join our newsletter to receive updates on new products, special offers, and writing tips.
            </p>
            
            {!subscribed ? (
              <form onSubmit={handleSubmit} className="mb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500 flex-grow"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-pink-600 rounded-lg font-medium transition-all hover:bg-pink-700"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-gray-800 border border-green-500 text-green-400 px-4 py-3 rounded-lg mb-8">
                Thank you for subscribing! You'll receive our newsletter soon.
              </div>
            )}
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-pink-500 mr-3 mt-0.5" />
                <span className="text-gray-300">Cra. 43 #63-107, Nte. Centro Historico, Barranquilla, Atlántico</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-pink-500 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-pink-500 mr-3" />
                <a href="mailto:info@bolipops.com" className="text-gray-300 hover:text-pink-500 transition-colors">
                  info@bolipops.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative h-64 lg:h-auto rounded-xl overflow-hidden">
            <iframe
              title="Bolipops Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6894708687278!2d-74.80133042495508!3d10.986795089175066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d6dc41df0e3%3A0x630aa232a66753cb!2sCombarranquilla%20Unidad%20Boston!5e0!3m2!1ses-419!2sco!4v1745947480943!5m2!1ses-419!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;