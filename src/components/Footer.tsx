
import { Link } from 'react-router-dom';
import { Fuel, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Zap, Car } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative h-12 w-12 overflow-hidden">
                <img 
                  src="/lovable-uploads/8cb67c2f-8aea-46cd-affa-fde848dcb918.png" 
                  alt="Creskiosk Logo" 
                  className="h-full w-full object-contain bg-white rounded-md p-1"
                />
              </div>
              <span className="font-bold text-2xl text-white">Creskiosk</span>
            </div>
            <p className="text-gray-400 mb-6">
              We bring fuel, generator maintenance, and car care services right to your doorstep, saving you time and hassle.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-orange" />
                <span className="text-gray-300">+234 800 555 5555</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-orange" />
                <span className="text-gray-300">info@creskiosk.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-brand-orange" />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-brand-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/fuel" className="text-gray-400 hover:text-brand-orange transition-colors">
                  Fuel Delivery
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-gray-400 hover:text-brand-orange transition-colors">
                  Car Servicing
                </Link>
              </li>
              <li>
                <Link to="/generator" className="text-gray-400 hover:text-brand-orange transition-colors">
                  Generator Maintenance
                </Link>
              </li>
              <li>
                <Link to="/subscription" className="text-gray-400 hover:text-brand-orange transition-colors">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link to="/track" className="text-gray-400 hover:text-brand-orange transition-colors">
                  Track My Order
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Petrol & Diesel Delivery</li>
              <li className="text-gray-400">Generator Repair & Maintenance</li>
              <li className="text-gray-400">Oil Change</li>
              <li className="text-gray-400">Car Wash</li>
              <li className="text-gray-400">Tire Pressure Check</li>
              <li className="text-gray-400">Battery Jump Start</li>
              <li className="text-gray-400">Fluid Top-ups</li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates, offers, and tips.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
              />
              <button 
                type="submit" 
                className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Creskiosk. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-gray-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
