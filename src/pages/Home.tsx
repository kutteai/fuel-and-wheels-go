
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Fuel, Car, Clock, MapPin, CheckCircle, Star, TrendingUp, Shield, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-brand-yellow text-gray-900 mb-4">Fast & Reliable Service</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                We bring fuel & basic car care to your doorstep
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Save time and hassle with our on-demand fuel delivery and mobile car servicing. Available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/fuel">
                  <Button size="lg" className="bg-brand-yellow hover:bg-yellow-500 text-gray-900 w-full sm:w-auto">
                    Order Fuel
                  </Button>
                </Link>
                <Link to="/service">
                  <Button size="lg" className="bg-white hover:bg-gray-100 text-brand-blue w-full sm:w-auto">
                    Book Servicing
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1613643043796-a370ee00ecbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
                  alt="Fuel delivery service" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20 card-shadow">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Trusted by</div>
                    <div className="text-xl font-bold text-gray-900">5,000+ customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a range of services designed to keep your vehicle running smoothly without
              disrupting your busy schedule.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fuel Delivery */}
            <Card className="overflow-hidden card-shadow">
              <div className="h-40 bg-brand-blue flex items-center justify-center">
                <Fuel className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-blue">Fuel Delivery</h3>
                <p className="text-gray-600 mb-4">
                  Get petrol or diesel delivered directly to your vehicle, home, or office at your scheduled time.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Petrol & Diesel available</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Scheduled or ASAP delivery</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Transparent pricing</span>
                  </li>
                </ul>
                <Link to="/fuel">
                  <Button className="w-full bg-brand-blue hover:bg-blue-800">
                    Order Fuel
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Car Servicing */}
            <Card className="overflow-hidden card-shadow">
              <div className="h-40 bg-brand-red flex items-center justify-center">
                <Car className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-brand-red">Car Servicing</h3>
                <p className="text-gray-600 mb-4">
                  Professional mobile car maintenance services performed at your location by certified technicians.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Oil changes & fluid top-ups</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Tire pressure checks</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Battery jump starts</span>
                  </li>
                </ul>
                <Link to="/service">
                  <Button className="w-full bg-brand-red hover:bg-red-700">
                    Book Service
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Subscription Plans */}
            <Card className="overflow-hidden card-shadow">
              <div className="h-40 bg-brand-yellow flex items-center justify-center">
                <Shield className="h-16 w-16 text-gray-900" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Subscription Plans</h3>
                <p className="text-gray-600 mb-4">
                  Save money with our monthly subscription plans. Get regular services at discounted rates.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Basic, Pro & Elite plans</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Priority booking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Discounts on additional services</span>
                  </li>
                </ul>
                <Link to="/subscription">
                  <Button className="w-full bg-gray-900 hover:bg-gray-800">
                    View Plans
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Getting fuel or car service is quick and simple with our easy 3-step process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-brand-lightgray rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-12 w-12 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Place Your Order</h3>
              <p className="text-gray-600">
                Select your service, enter your location, and choose a delivery time that works for you.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-brand-lightgray rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-12 w-12 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Track in Real-Time</h3>
              <p className="text-gray-600">
                Watch as our technician or delivery driver makes their way to your location.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-brand-lightgray rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Service Completed</h3>
              <p className="text-gray-600">
                Our professional will fulfill your order and you're good to go! No waiting in lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Plans Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Subscription Plans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose a plan that fits your needs and save with our monthly subscription options
            </p>
          </div>
          
          <Tabs defaultValue="monthly" className="w-full max-w-5xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly (Save 10%)</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="monthly" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic Plan */}
                <Card className="overflow-hidden border-2 border-gray-200 card-shadow">
                  <div className="bg-gray-100 p-6 text-center">
                    <h3 className="text-xl font-bold">Basic Plan</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">₦5,000</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>1 Fuel Delivery/month (≤ 50L)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>1 Car or Generator Service/month</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Standard Delivery (within 24 hrs)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Basic Reminder Notification</span>
                      </li>
                    </ul>
                    <Link to="/subscription" className="block mt-6">
                      <Button className="w-full">Subscribe Now</Button>
                    </Link>
                  </CardContent>
                </Card>
                
                {/* Pro Plan */}
                <Card className="overflow-hidden border-2 border-brand-blue relative card-shadow transform scale-105">
                  <div className="absolute top-0 right-0">
                    <Badge className="bg-brand-yellow text-gray-900 m-2">POPULAR</Badge>
                  </div>
                  <div className="bg-brand-blue text-white p-6 text-center">
                    <h3 className="text-xl font-bold">Pro Plan</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">₦10,000</span>
                      <span className="text-gray-300">/month</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>2 Fuel Deliveries/month (≤ 70L each)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>2 Services (Car/Generator – mix & match)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Same-day Delivery (if ordered before 3 PM)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Priority Booking (morning/evening slots)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>1 Free Car Wash/month</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>5% Discount on additional services</span>
                      </li>
                    </ul>
                    <Link to="/subscription" className="block mt-6">
                      <Button className="w-full bg-brand-blue hover:bg-blue-800">Subscribe Now</Button>
                    </Link>
                  </CardContent>
                </Card>
                
                {/* Elite Plan */}
                <Card className="overflow-hidden border-2 border-gray-200 card-shadow">
                  <div className="bg-gray-900 text-white p-6 text-center">
                    <h3 className="text-xl font-bold">Elite Plan</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">₦18,000</span>
                      <span className="text-gray-300">/month</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>4 Fuel Deliveries/month (≤ 100L each)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Unlimited Car + Generator Servicing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Express Delivery (within 2 hours, 24/7)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>2 Free Car Washes/month</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>10% Discount on all extras and parts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Dedicated Service Agent</span>
                      </li>
                    </ul>
                    <Link to="/subscription" className="block mt-6">
                      <Button className="w-full">Subscribe Now</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="yearly" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic Yearly */}
                <Card className="overflow-hidden border-2 border-gray-200 card-shadow">
                  <div className="bg-gray-100 p-6 text-center">
                    <h3 className="text-xl font-bold">Basic Plan</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">₦54,000</span>
                      <span className="text-gray-500">/year</span>
                    </div>
                    <p className="text-green-600 mt-2">Save ₦6,000</p>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>1 Fuel Delivery/month (≤ 50L)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>1 Car or Generator Service/month</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Standard Delivery (within 24 hrs)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Basic Reminder Notification</span>
                      </li>
                    </ul>
                    <Link to="/subscription" className="block mt-6">
                      <Button className="w-full">Subscribe Now</Button>
                    </Link>
                  </CardContent>
                </Card>
                
                {/* Pro Yearly */}
                <Card className="overflow-hidden border-2 border-brand-blue relative card-shadow transform scale-105">
                  <div className="absolute top-0 right-0">
                    <Badge className="bg-brand-yellow text-gray-900 m-2">BEST VALUE</Badge>
                  </div>
                  <div className="bg-brand-blue text-white p-6 text-center">
                    <h3 className="text-xl font-bold">Pro Plan</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">₦108,000</span>
                      <span className="text-gray-300">/year</span>
                    </div>
                    <p className="text-green-400 mt-2">Save ₦12,000</p>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>2 Fuel Deliveries/month (≤ 70L each)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>2 Services (Car/Generator – mix & match)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Same-day Delivery (if ordered before 3 PM)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Priority Booking (morning/evening slots)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>1 Free Car Wash/month</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>5% Discount on additional services</span>
                      </li>
                    </ul>
                    <Link to="/subscription" className="block mt-6">
                      <Button className="w-full bg-brand-blue hover:bg-blue-800">Subscribe Now</Button>
                    </Link>
                  </CardContent>
                </Card>
                
                {/* Elite Yearly */}
                <Card className="overflow-hidden border-2 border-gray-200 card-shadow">
                  <div className="bg-gray-900 text-white p-6 text-center">
                    <h3 className="text-xl font-bold">Elite Plan</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">₦194,400</span>
                      <span className="text-gray-300">/year</span>
                    </div>
                    <p className="text-green-400 mt-2">Save ₦21,600</p>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>4 Fuel Deliveries/month (≤ 100L each)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Unlimited Car + Generator Servicing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Express Delivery (within 2 hours, 24/7)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>2 Free Car Washes/month</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>10% Discount on all extras and parts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Dedicated Service Agent</span>
                      </li>
                    </ul>
                    <Link to="/subscription" className="block mt-6">
                      <Button className="w-full">Subscribe Now</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Prefer to pay as you go? No problem!
            </p>
            <Link to="/fuel">
              <Button variant="outline" className="mr-4">Order Fuel</Button>
            </Link>
            <Link to="/service">
              <Button variant="outline">Book Service</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="card-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="flex text-yellow-400">
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">
                  "I can't believe how convenient this service is! No more waiting in line at the filling station. 
                  The fuel was delivered right on time, and the price was fair. Highly recommend!"
                </p>
                <div className="flex items-center justify-center">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 font-semibold">OA</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Oluwaseun A.</h4>
                    <p className="text-sm text-gray-500">Lagos, Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="card-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="flex text-yellow-400">
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">
                  "The Pro subscription has been a game-changer for me. I never have to worry about my car maintenance
                  or fuel anymore. The technicians are professional and always on time."
                </p>
                <div className="flex items-center justify-center">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 font-semibold">CJ</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Chioma J.</h4>
                    <p className="text-sm text-gray-500">Abuja, Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 3 */}
            <Card className="card-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="flex text-yellow-400">
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                    <Star className="fill-current" />
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">
                  "As a business owner with a fleet of vehicles, the Elite plan has saved us countless hours.
                  Their tracking system lets me know exactly when services are completed. Excellent service!"
                </p>
                <div className="flex items-center justify-center">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 font-semibold">EM</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Emmanuel M.</h4>
                    <p className="text-sm text-gray-500">Port Harcourt, Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to save time and hassle?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who never worry about fuel or car maintenance again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/fuel">
              <Button size="lg" className="bg-brand-yellow hover:bg-yellow-500 text-gray-900">
                Order Fuel
              </Button>
            </Link>
            <Link to="/service">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-brand-blue">
                Book Servicing
              </Button>
            </Link>
            <Link to="/subscription">
              <Button size="lg" className="bg-black hover:bg-gray-900 text-white">
                View Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
