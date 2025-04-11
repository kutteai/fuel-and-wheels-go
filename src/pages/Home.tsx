
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Fuel, Car, Clock, MapPin, Star, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  useEffect(() => {
    // Add animation effects when page loads
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-orange/80 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto text-white"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">We bring fuel & basic car care to your doorstep</h1>
            <p className="text-xl mb-10 opacity-90">Save time and hassle with our convenient mobile services</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/fuel">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-8 py-6 text-lg transition-transform hover:scale-105">
                  Order Fuel <Fuel className="ml-2" />
                </Button>
              </Link>
              <Link to="/service">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white hover:bg-white/20 text-white font-bold px-8 py-6 text-lg transition-transform hover:scale-105">
                  Book Servicing <Car className="ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="section-title">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our process is simple, fast, and designed with your convenience in mind</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-brand-blue h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose Your Location</h3>
              <p className="text-gray-600">Enter your address and we'll come to you - at home, work, or anywhere else.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-brand-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="text-brand-green h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Select Your Service</h3>
              <p className="text-gray-600">Choose from fuel delivery, oil change, car wash, or other quick services.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-brand-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-brand-orange h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Schedule & Relax</h3>
              <p className="text-gray-600">Book now or schedule for later. We'll arrive at the chosen time and take care of everything.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="section-title">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive care for your vehicle, delivered to your location</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="card-shadow bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Fuel className="text-white h-20 w-20 opacity-30" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Fuel Delivery</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                    <span>Premium petrol & diesel</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                    <span>Scheduled or on-demand delivery</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                    <span>Safe, metered dispensing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                    <span>Electronic receipt</span>
                  </li>
                </ul>
                <Link to="/fuel">
                  <Button className="w-full">
                    Order Fuel <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="card-shadow bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-500 to-green-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Car className="text-white h-20 w-20 opacity-30" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Car Servicing</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                    <span>Oil change & filter replacement</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                    <span>Car wash & detailing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                    <span>Tire pressure check</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                    <span>Battery jump & fluid top-ups</span>
                  </li>
                </ul>
                <Link to="/service">
                  <Button className="w-full bg-brand-green hover:bg-brand-green/90">
                    Book Service <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="section-title">Subscription Plans</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose the perfect plan for your needs and budget</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="border rounded-lg p-6 hover:shadow-lg transition-shadow relative">
              <div className="absolute top-0 right-0 bg-brand-blue text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                Basic
              </div>
              <h3 className="text-2xl font-bold mb-2">Basic Plan</h3>
              <div className="text-3xl font-bold mb-6">₦5,000<span className="text-base font-normal text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2 shrink-0 mt-0.5" />
                  <span>1 Fuel Delivery/month (≤ 50L)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2 shrink-0 mt-0.5" />
                  <span>1 Car or Generator Service/month</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2 shrink-0 mt-0.5" />
                  <span>Standard Delivery (within 24 hrs)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2 shrink-0 mt-0.5" />
                  <span>Basic Reminder Notification</span>
                </li>
              </ul>
              <Link to="/subscription">
                <Button className="w-full" variant="outline">
                  Subscribe Now
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="border-2 border-brand-green rounded-lg p-6 shadow-lg relative">
              <div className="absolute top-0 right-0 bg-brand-green text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
              <div className="text-3xl font-bold mb-6">₦10,000<span className="text-base font-normal text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2 shrink-0 mt-0.5" />
                  <span>2 Fuel Deliveries/month (≤ 70L each)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2 shrink-0 mt-0.5" />
                  <span>2 Services (Car/Generator)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2 shrink-0 mt-0.5" />
                  <span>Same-day Delivery (if ordered before 3 PM)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2 shrink-0 mt-0.5" />
                  <span>1 Free Car Wash/month</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2 shrink-0 mt-0.5" />
                  <span>5% Discount on additional services</span>
                </li>
              </ul>
              <Link to="/subscription">
                <Button className="w-full bg-brand-green hover:bg-green-600">
                  Subscribe Now
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="border rounded-lg p-6 hover:shadow-lg transition-shadow relative">
              <div className="absolute top-0 right-0 bg-brand-orange text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                Elite
              </div>
              <h3 className="text-2xl font-bold mb-2">Elite Plan</h3>
              <div className="text-3xl font-bold mb-6">₦18,000<span className="text-base font-normal text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2 shrink-0 mt-0.5" />
                  <span>4 Fuel Deliveries/month (≤ 100L each)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2 shrink-0 mt-0.5" />
                  <span>Unlimited Car + Generator Servicing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2 shrink-0 mt-0.5" />
                  <span>Express Delivery (within 2 hours, 24/7)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2 shrink-0 mt-0.5" />
                  <span>2 Free Car Washes/month</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-green mr-2 shrink-0 mt-0.5" />
                  <span>10% Discount on all extras and parts</span>
                </li>
              </ul>
              <Link to="/subscription">
                <Button className="w-full" variant="outline">
                  Subscribe Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hear from people who've experienced our service</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="mb-4 text-gray-700">
                "The convenience is incredible! I no longer have to waste time at fuel stations. Their staff is professional and the service is punctual."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-blue/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-brand-blue font-bold">AO</span>
                </div>
                <div>
                  <h4 className="font-semibold">Adebayo Ogunlesi</h4>
                  <p className="text-sm text-gray-500">Lagos, Nigeria</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="mb-4 text-gray-700">
                "I subscribed to the Pro plan and it's been worth every naira. Regular oil changes and fuel delivery right to my office has saved me so much time."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-brand-green font-bold">CN</span>
                </div>
                <div>
                  <h4 className="font-semibold">Chioma Nwosu</h4>
                  <p className="text-sm text-gray-500">Abuja, Nigeria</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="mb-4 text-gray-700">
                "Their emergency service saved me when my car battery died at night. A technician arrived within 30 minutes and got me back on the road quickly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-brand-orange font-bold">TI</span>
                </div>
                <div>
                  <h4 className="font-semibold">Tunde Ibrahim</h4>
                  <p className="text-sm text-gray-500">Port Harcourt, Nigeria</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex justify-between items-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="section-title mb-0">Latest From Our Blog</h2>
            <Link to="/blog" className="text-brand-blue hover:text-brand-blue/80 font-medium flex items-center">
              View All Posts <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/50 to-brand-blue/30 flex items-center justify-center">
                  <Fuel className="h-16 w-16 text-white opacity-50" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">April 5, 2025</p>
                <h3 className="text-xl font-semibold mb-3 hover:text-brand-blue transition-colors">
                  <Link to="/blog/fuel-efficiency">7 Tips for Better Fuel Efficiency</Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Learn how to make your fuel last longer with these practical tips from our mechanics and automotive experts.
                </p>
                <Link to="/blog/fuel-efficiency" className="text-brand-blue hover:text-brand-blue/80 font-medium inline-flex items-center">
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/50 to-brand-green/30 flex items-center justify-center">
                  <Car className="h-16 w-16 text-white opacity-50" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">April 2, 2025</p>
                <h3 className="text-xl font-semibold mb-3 hover:text-brand-blue transition-colors">
                  <Link to="/blog/car-maintenance">Essential Car Maintenance During Rainy Season</Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Protect your vehicle during Nigeria's rainy season with these maintenance tips from our expert technicians.
                </p>
                <Link to="/blog/car-maintenance" className="text-brand-blue hover:text-brand-blue/80 font-medium inline-flex items-center">
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/50 to-brand-orange/30 flex items-center justify-center">
                  <Clock className="h-16 w-16 text-white opacity-50" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">March 28, 2025</p>
                <h3 className="text-xl font-semibold mb-3 hover:text-brand-blue transition-colors">
                  <Link to="/blog/subscription-benefits">Why Subscription Plans Save Both Time and Money</Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Discover how our subscription plans can provide convenience while reducing your overall vehicle maintenance costs.
                </p>
                <Link to="/blog/subscription-benefits" className="text-brand-blue hover:text-brand-blue/80 font-medium inline-flex items-center">
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8 opacity-90">Subscribe to our newsletter for promotions, tips, and industry insights</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                required
              />
              <Button type="submit" className="bg-brand-orange hover:bg-brand-orange/90 px-6 py-3 font-semibold">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to save time on vehicle maintenance?</h2>
              <p className="text-gray-600">Join thousands of satisfied customers across Nigeria.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/fuel">
                <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 min-w-[150px]">
                  Get Started
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="min-w-[150px]">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
