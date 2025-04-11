
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Fuel, Car, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-brand-blue">
              <div className="absolute inset-0 flex items-center justify-center">
                <Fuel className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="font-bold text-xl text-brand-blue">Fuel<span className="text-brand-red">&Wheels</span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-brand-blue">
              Home
            </Link>
            <Link to="/fuel" className="font-medium text-gray-700 hover:text-brand-blue">
              Fuel Delivery
            </Link>
            <Link to="/service" className="font-medium text-gray-700 hover:text-brand-blue">
              Car Service
            </Link>
            <Link to="/subscription" className="font-medium text-gray-700 hover:text-brand-blue">
              Plans
            </Link>
            <Link to="/track" className="font-medium text-gray-700 hover:text-brand-blue">
              Track Order
            </Link>
          </div>
          
          {/* Login/Dashboard and Order Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/dashboard">
              <Button variant="ghost" className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>Dashboard</span>
              </Button>
            </Link>
            <Link to="/fuel">
              <Button className="bg-brand-red hover:bg-red-700 text-white">
                Order Now
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-600 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden absolute left-0 right-0 bg-white z-20 shadow-md transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden py-0"
        )}>
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium text-gray-700 hover:text-brand-blue py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/fuel" 
              className="font-medium text-gray-700 hover:text-brand-blue py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Fuel Delivery
            </Link>
            <Link 
              to="/service" 
              className="font-medium text-gray-700 hover:text-brand-blue py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Car Service
            </Link>
            <Link 
              to="/subscription" 
              className="font-medium text-gray-700 hover:text-brand-blue py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Plans
            </Link>
            <Link 
              to="/track" 
              className="font-medium text-gray-700 hover:text-brand-blue py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Track Order
            </Link>
            <Link 
              to="/dashboard" 
              className="font-medium text-gray-700 hover:text-brand-blue py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/fuel" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-brand-red hover:bg-red-700 text-white">
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
