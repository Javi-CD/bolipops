import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from '../assets/bolipops_logo.svg'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <PenTool className="h-6 w-6 text-pink-500" /> */}
              <img className="h-11 w-auto" src={Logo} alt="Bolipops Logo" />
              <span className="text-xl font-bold text-white">Bolipops</span>
            </div>
            <p className="text-gray-400 mb-4">
              Achieve intense freshness with our BoliPops popsicles in different flavors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-pink-500 transition-colors">Kola Pop</a></li>
              <li><a href="#products" className="hover:text-pink-500 transition-colors">Mango Pop</a></li>
              <li><a href="#products" className="hover:text-pink-500 transition-colors">Nucita Pop</a></li>
              <li><a href="#products" className="hover:text-pink-500 transition-colors">Peanut Pops</a></li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Contact Us</a></li>
            </ul>
          </div> */}
          
          {/* <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Accessibility</a></li>
            </ul>
          </div> */}

        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Bolipops. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;