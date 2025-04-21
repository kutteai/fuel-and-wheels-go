
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Fuel, Car, Zap, AlertTriangle } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    console.log("Hero component mounted");
  }, []);

  return (
    <div className="hero-gradient text-white py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Your One-Stop Digital Services Platform</h1>
            <p className="text-xl mb-8 max-w-lg">
              Fuel delivery, car servicing, generator maintenance, and emergency services - all in one app, delivered to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/fuel">
                <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100 flex items-center gap-2">
                  <Fuel className="h-5 w-5" />
                  Order Fuel
                </Button>
              </Link>
              <Link to="/service">
                <Button size="lg" className="bg-brand-orange text-white hover:bg-brand-orange/90 flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Car Service
                </Button>
              </Link>
              <Link to="/generator">
                <Button size="lg" className="bg-brand-green text-white hover:bg-brand-green/90 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Generator Service
                </Button>
              </Link>
              <Link to="/emergency">
                <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Emergency Service
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <img 
              src="/lovable-uploads/8cb67c2f-8aea-46cd-affa-fde848dcb918.png" 
              alt="Creskiosk Services" 
              className="max-w-full h-auto rounded-lg shadow-lg z-10 relative"
            />
            <div className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm z-0"></div>
          </div>
        </div>
      </div>
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Hero;
