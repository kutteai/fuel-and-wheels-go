
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, X, AlertCircle, Shield, Zap, Award } from 'lucide-react';

const Subscription = () => {
  const { toast } = useToast();
  const [billingCycle, setBillingCycle] = useState("monthly");
  
  const handleSubscribe = (plan: string) => {
    // In a real app, this would handle subscription flow with payment integration
    toast({
      title: "Plan Selected",
      description: `You've selected the ${plan} plan. Proceeding to payment...`,
      variant: "default",
    });
  };
  
  const features = {
    basic: {
      fuelDelivery: "1 Fuel Delivery/month (≤ 50L)",
      service: "1 Car or Generator Service/month",
      deliverySpeed: "Standard Delivery (within 24 hrs)",
      reminder: "Basic Reminder Notification",
      priority: false,
      emergency: false,
      discounts: false,
      carWash: false,
      breakdown: false,
      dedicated: false,
      reports: false,
    },
    pro: {
      fuelDelivery: "2 Fuel Deliveries/month (≤ 70L each)",
      service: "2 Services (Car/Generator – mix & match)",
      deliverySpeed: "Same-day Delivery (if ordered before 3 PM)",
      reminder: "Smart Reminders (customized by car/generator type)",
      priority: "Priority Booking (morning/evening slots)",
      emergency: false,
      carWash: "1 Free Car Wash/month",
      breakdown: "Breakdown Support (basic phone or on-site check)",
      discounts: "5% Discount on additional services and parts",
      dedicated: false,
      reports: false,
    },
    elite: {
      fuelDelivery: "4 Fuel Deliveries/month (≤ 100L each)",
      service: "Unlimited Car + Generator Servicing",
      deliverySpeed: "Express Delivery (within 2 hours, 24/7)",
      reminder: "Comprehensive Maintenance Schedule",
      priority: "Highest Priority Booking (any time slot)",
      emergency: "Emergency Call-Outs (nights/holidays)",
      carWash: "2 Free Car Washes/month",
      breakdown: "Full Breakdown Visit (non-repair diagnosis)",
      discounts: "10% Discount on all extras and parts",
      dedicated: "Dedicated Service Agent / Concierge",
      reports: "Monthly Vehicle Health Report (PDF/email)",
    }
  };
  
  const renderPlanFeature = (feature: string | boolean, isPrimary = false) => {
    if (feature === false) {
      return (
        <div className="flex items-start">
          <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
          <span className="text-gray-500">Not included</span>
        </div>
      );
    }
    
    return (
      <div className="flex items-start">
        <CheckCircle className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${isPrimary ? 'text-green-500' : 'text-brand-blue'}`} />
        <span>{feature}</span>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Subscription Plans</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose a plan that suits your needs and save time and money with our flexible subscription options
            </p>
          </div>
          
          <Tabs defaultValue={billingCycle} onValueChange={setBillingCycle} className="w-full mb-12">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-[400px] grid-cols-2">
                <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                <TabsTrigger value="yearly">Yearly Billing (Save 10%)</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="monthly" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic Plan */}
                <Card className="relative border-2 border-gray-200 card-shadow">
                  <CardHeader className="text-center pb-2">
                    <div className="mb-1">
                      <Shield className="h-10 w-10 text-gray-600 mx-auto" />
                    </div>
                    <CardTitle className="text-xl">Basic Plan</CardTitle>
                    <CardDescription>For casual users</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">₦100,000</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="space-y-3">
                      {renderPlanFeature(features.basic.fuelDelivery, true)}
                      {renderPlanFeature(features.basic.service, true)}
                      {renderPlanFeature(features.basic.deliverySpeed)}
                      {renderPlanFeature(features.basic.reminder)}
                      {renderPlanFeature(features.basic.priority)}
                      {renderPlanFeature(features.basic.emergency)}
                      {renderPlanFeature(features.basic.discounts)}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      onClick={() => handleSubscribe('Basic')}
                    >
                      Subscribe Now
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Pro Plan */}
                <Card className="relative border-2 border-brand-blue card-shadow transform scale-105 z-10">
                  <div className="absolute top-0 right-0">
                    <Badge className="bg-brand-orange text-gray-900 m-2">POPULAR</Badge>
                  </div>
                  <CardHeader className="text-center bg-brand-blue text-white pb-2">
                    <div className="mb-1">
                      <Award className="h-10 w-10 text-white mx-auto" />
                    </div>
                    <CardTitle className="text-xl">Pro Plan</CardTitle>
                    <CardDescription className="text-blue-100">For families & regular users</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">₦250,000</span>
                      <span className="text-blue-100">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="space-y-3">
                      {renderPlanFeature(features.pro.fuelDelivery, true)}
                      {renderPlanFeature(features.pro.service, true)}
                      {renderPlanFeature(features.pro.deliverySpeed)}
                      {renderPlanFeature(features.pro.reminder)}
                      {renderPlanFeature(features.pro.priority)}
                      {renderPlanFeature(features.pro.carWash)}
                      {renderPlanFeature(features.pro.breakdown)}
                      {renderPlanFeature(features.pro.discounts)}
                      {renderPlanFeature(features.pro.emergency)}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-brand-blue hover:bg-blue-800" 
                      onClick={() => handleSubscribe('Pro')}
                    >
                      Subscribe Now
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Elite Plan */}
                <Card className="relative border-2 border-gray-200 card-shadow">
                  <CardHeader className="text-center bg-gray-900 text-white pb-2">
                    <div className="mb-1">
                      <Zap className="h-10 w-10 text-brand-orange mx-auto" />
                    </div>
                    <CardTitle className="text-xl">Elite Plan</CardTitle>
                    <CardDescription className="text-gray-300">For businesses & power users</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">₦500,000</span>
                      <span className="text-gray-300">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="space-y-3">
                      {renderPlanFeature(features.elite.fuelDelivery, true)}
                      {renderPlanFeature(features.elite.service, true)}
                      {renderPlanFeature(features.elite.deliverySpeed)}
                      {renderPlanFeature(features.elite.priority)}
                      {renderPlanFeature(features.elite.emergency)}
                      {renderPlanFeature(features.elite.carWash)}
                      {renderPlanFeature(features.elite.breakdown)}
                      {renderPlanFeature(features.elite.discounts)}
                      {renderPlanFeature(features.elite.dedicated)}
                      {renderPlanFeature(features.elite.reports)}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      onClick={() => handleSubscribe('Elite')}
                    >
                      Subscribe Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="yearly" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic Yearly */}
                <Card className="relative border-2 border-gray-200 card-shadow">
                  <CardHeader className="text-center pb-2">
                    <div className="mb-1">
                      <Shield className="h-10 w-10 text-gray-600 mx-auto" />
                    </div>
                    <CardTitle className="text-xl">Basic Plan</CardTitle>
                    <CardDescription>For casual users</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">₦1,080,000</span>
                      <span className="text-gray-500">/year</span>
                    </div>
                    <p className="text-green-600 text-sm mt-1">Save ₦120,000</p>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="space-y-3">
                      {renderPlanFeature(features.basic.fuelDelivery, true)}
                      {renderPlanFeature(features.basic.service, true)}
                      {renderPlanFeature(features.basic.deliverySpeed)}
                      {renderPlanFeature(features.basic.reminder)}
                      {renderPlanFeature(features.basic.priority)}
                      {renderPlanFeature(features.basic.emergency)}
                      {renderPlanFeature(features.basic.discounts)}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      onClick={() => handleSubscribe('Basic (Annual)')}
                    >
                      Subscribe Now
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Pro Yearly */}
                <Card className="relative border-2 border-brand-blue card-shadow transform scale-105 z-10">
                  <div className="absolute top-0 right-0">
                    <Badge className="bg-brand-orange text-gray-900 m-2">BEST VALUE</Badge>
                  </div>
                  <CardHeader className="text-center bg-brand-blue text-white pb-2">
                    <div className="mb-1">
                      <Award className="h-10 w-10 text-white mx-auto" />
                    </div>
                    <CardTitle className="text-xl">Pro Plan</CardTitle>
                    <CardDescription className="text-blue-100">For families & regular users</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">₦2,700,000</span>
                      <span className="text-blue-100">/year</span>
                    </div>
                    <p className="text-green-300 text-sm mt-1">Save ₦300,000</p>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="space-y-3">
                      {renderPlanFeature(features.pro.fuelDelivery, true)}
                      {renderPlanFeature(features.pro.service, true)}
                      {renderPlanFeature(features.pro.deliverySpeed)}
                      {renderPlanFeature(features.pro.reminder)}
                      {renderPlanFeature(features.pro.priority)}
                      {renderPlanFeature(features.pro.carWash)}
                      {renderPlanFeature(features.pro.breakdown)}
                      {renderPlanFeature(features.pro.discounts)}
                      {renderPlanFeature(features.pro.emergency)}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-brand-blue hover:bg-blue-800" 
                      onClick={() => handleSubscribe('Pro (Annual)')}
                    >
                      Subscribe Now
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* Elite Yearly */}
                <Card className="relative border-2 border-gray-200 card-shadow">
                  <CardHeader className="text-center bg-gray-900 text-white pb-2">
                    <div className="mb-1">
                      <Zap className="h-10 w-10 text-brand-orange mx-auto" />
                    </div>
                    <CardTitle className="text-xl">Elite Plan</CardTitle>
                    <CardDescription className="text-gray-300">For businesses & power users</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">₦5,400,000</span>
                      <span className="text-gray-300">/year</span>
                    </div>
                    <p className="text-green-300 text-sm mt-1">Save ₦600,000</p>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="space-y-3">
                      {renderPlanFeature(features.elite.fuelDelivery, true)}
                      {renderPlanFeature(features.elite.service, true)}
                      {renderPlanFeature(features.elite.deliverySpeed)}
                      {renderPlanFeature(features.elite.priority)}
                      {renderPlanFeature(features.elite.emergency)}
                      {renderPlanFeature(features.elite.carWash)}
                      {renderPlanFeature(features.elite.breakdown)}
                      {renderPlanFeature(features.elite.discounts)}
                      {renderPlanFeature(features.elite.dedicated)}
                      {renderPlanFeature(features.elite.reports)}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      onClick={() => handleSubscribe('Elite (Annual)')}
                    >
                      Subscribe Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-white rounded-lg p-6 border border-gray-200 mb-12 card-shadow">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-brand-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Subscription Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>No commitment - cancel anytime</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Save up to 20% compared to pay-as-you-go prices</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Priority service during fuel scarcity</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Automatic scheduling of regular maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="font-semibold text-lg">Can I change my plan later?</h3>
                  <p className="text-gray-600 mt-2">
                    Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">What happens if I don't use all my deliveries in a month?</h3>
                  <p className="text-gray-600 mt-2">
                    Unused fuel deliveries and services do not roll over to the next month. We encourage you to use all your benefits within each billing cycle.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">How do I schedule my regular maintenance?</h3>
                  <p className="text-gray-600 mt-2">
                    Once subscribed, you can schedule services through your dashboard. Pro and Elite subscribers get access to priority booking slots.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Is there a limit to how much fuel I can order?</h3>
                  <p className="text-gray-600 mt-2">
                    Each plan has different limits on the amount of fuel per delivery. Additional fuel beyond your plan's limit will be charged at regular rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Not ready for a subscription yet? No problem!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/fuel">
                <Button variant="outline">Order Fuel</Button>
              </Link>
              <Link to="/service">
                <Button variant="outline">Book Service</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
