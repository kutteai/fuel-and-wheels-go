
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Check, AlertCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from 'react-router-dom';

const SubscriptionTab = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Example subscription status - in a real app this would come from the API
  const subscription = {
    status: "inactive",
    plan: null
  };
  
  const handleViewPlans = () => {
    navigate("/subscription");
  };
  
  const handleUpgrade = () => {
    toast({
      title: "Coming Soon",
      description: "Plan upgrades will be available soon!"
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscription</CardTitle>
        <CardDescription>Manage your premium membership plans</CardDescription>
      </CardHeader>
      <CardContent>
        {subscription.status === "active" ? (
          <div className="p-6 border rounded-lg bg-gray-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-2 rounded-full">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Premium Plan</h3>
                <p className="text-gray-500">Active until Dec 31, 2025</p>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Priority fuel delivery</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Discounted service rates</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Free monthly car check-up</span>
              </li>
            </ul>
            <div className="flex justify-between">
              <Button variant="outline">Cancel Subscription</Button>
              <Button onClick={handleUpgrade}>Upgrade Plan</Button>
            </div>
          </div>
        ) : (
          <div className="p-6 border rounded-lg bg-gray-50">
            <div className="flex flex-col items-center text-center gap-3 mb-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <AlertCircle className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">No Active Subscription</h3>
                <p className="text-gray-500">Subscribe to get premium benefits and discounts</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Shield className="h-5 w-5 text-brand-blue" />
                    Basic Plan
                  </CardTitle>
                  <CardDescription>
                    <span className="text-xl font-bold">₦100,000</span>/month
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Priority scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>10% off on fuel delivery</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>24/7 customer support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={handleViewPlans}>Subscribe</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Shield className="h-5 w-5 text-brand-orange" />
                    Premium Plan
                  </CardTitle>
                  <CardDescription>
                    <span className="text-xl font-bold">₦250,000</span>/month
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>All Basic Plan features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>20% off on all services</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Free monthly car check-up</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={handleViewPlans}>Subscribe</Button>
                </CardFooter>
              </Card>
            </div>
            
            <Button 
              className="w-full" 
              variant="outline"
              onClick={handleViewPlans}
            >
              View All Plans
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SubscriptionTab;
