
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Fuel, Car, User, LogIn, LogOut, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-white shadow-sm py-3"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-12 w-12 relative">
              <img 
                src="/lovable-uploads/8cb67c2f-8aea-46cd-affa-fde848dcb918.png" 
                alt="Creskiosk Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-bold text-xl text-brand-blue">Creskiosk</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/fuel">Fuel Delivery</NavLink>
            <NavLink to="/service">Car Service</NavLink>
            <NavLink to="/generator">Generator Maintenance</NavLink>
            <NavLink to="/subscription">Plans</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          
          {/* Login/Dashboard and Order Button */}
          <div className="hidden md:flex items-center space-x-3">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="flex items-center" 
                  onClick={logout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button variant="ghost" className="flex items-center space-x-1">
                  <LogIn className="h-4 w-4 mr-1" />
                  <span>Login</span>
                </Button>
              </Link>
            )}
            <Link to="/fuel">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white transition-transform hover:scale-105">
                Order Now
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button 
            onClick={toggleMenu}
            className="md:hidden text-gray-600 focus:outline-none"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden absolute left-0 right-0 bg-white z-20 shadow-md pb-4 px-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto flex flex-col space-y-4 pt-4">
                <MobileNavLink to="/">Home</MobileNavLink>
                <MobileNavLink to="/fuel">Fuel Delivery</MobileNavLink>
                <MobileNavLink to="/service">Car Service</MobileNavLink>
                <MobileNavLink to="/generator">Generator Maintenance</MobileNavLink>
                <MobileNavLink to="/subscription">Plans</MobileNavLink>
                <MobileNavLink to="/blog">Blog</MobileNavLink>
                <MobileNavLink to="/contact">Contact</MobileNavLink>
                
                {isAuthenticated ? (
                  <>
                    <MobileNavLink to="/dashboard">Dashboard</MobileNavLink>
                    <Button 
                      variant="outline" 
                      className="flex items-center justify-center mt-2" 
                      onClick={logout}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <MobileNavLink to="/login">Login</MobileNavLink>
                )}
                
                <Link to="/fuel">
                  <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white mt-2">
                    Order Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// Desktop Navigation Link component
const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
                   (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link 
      to={to} 
      className={cn(
        "font-medium transition-colors relative group",
        isActive ? "text-brand-blue" : "text-gray-700 hover:text-brand-blue"
      )}
    >
      {children}
      <span className={cn(
        "absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue transform transition-transform scale-x-0 group-hover:scale-x-100 origin-left",
        isActive && "scale-x-100"
      )}></span>
    </Link>
  );
};

// Mobile Navigation Link component
const MobileNavLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
                   (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link 
      to={to} 
      className={cn(
        "py-2 font-medium block",
        isActive ? "text-brand-blue" : "text-gray-700"
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;
