
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { MapPin, Clock, CreditCard, Calendar, Check, Fuel } from 'lucide-react';

const FuelDelivery = () => {
  const { toast } = useToast();
  const [fuelType, setFuelType] = useState("petrol");
  const [quantity, setQuantity] = useState(40);
  const [address, setAddress] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("asap");
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [step, setStep] = useState(1);
  
  // Fuel prices (in Naira)
  const prices = {
    petrol: 780,
    diesel: 920
  };
  
  const calculateTotal = () => {
    const fuelCost = quantity * prices[fuelType as keyof typeof prices];
    const deliveryFee = 2000; // Fixed delivery fee
    const serviceFee = 500; // Service fee
    
    return {
      fuelCost,
      deliveryFee,
      serviceFee,
      total: fuelCost + deliveryFee + serviceFee
    };
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process order (would connect to backend in real app)
      toast({
        title: "Order Successful!",
        description: "Your fuel order has been placed successfully!",
        variant: "default",
      });
      // Redirect to tracking page
      setTimeout(() => {
        window.location.href = "/track";
      }, 2000);
    }
  };
  
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Select Fuel Type & Quantity</h3>
              
              <div className="mb-6">
                <Label>Fuel Type</Label>
                <Tabs defaultValue={fuelType} onValueChange={setFuelType} className="mt-2">
                  <TabsList className="grid grid-cols-2">
                    <TabsTrigger value="petrol">Petrol (₦{prices.petrol}/L)</TabsTrigger>
                    <TabsTrigger value="diesel">Diesel (₦{prices.diesel}/L)</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <Label>Quantity (Litres)</Label>
                  <span className="font-medium text-gray-700">{quantity} L</span>
                </div>
                <Slider
                  value={[quantity]}
                  min={10}
                  max={100}
                  step={1}
                  onValueChange={(value) => setQuantity(value[0])}
                  className="my-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>10L</span>
                  <span>50L</span>
                  <span>100L</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Delivery Details</h3>
              
              <div className="mb-6">
                <Label htmlFor="address">Delivery Address</Label>
                <div className="flex mt-2">
                  <Input
                    id="address"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button variant="outline" type="button" className="ml-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    Map
                  </Button>
                </div>
              </div>
              
              <div className="mb-6">
                <Label>Delivery Time</Label>
                <RadioGroup value={deliveryTime} onValueChange={setDeliveryTime} className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="asap" id="asap" />
                    <Label htmlFor="asap" className="flex items-center cursor-pointer">
                      <Clock className="h-4 w-4 mr-2" />
                      As Soon As Possible (2-3 hours)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <RadioGroupItem value="scheduled" id="scheduled" />
                    <Label htmlFor="scheduled" className="cursor-pointer">Schedule for Later</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {deliveryTime === "scheduled" && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <div className="flex items-center mt-2">
                      <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                      <Input
                        id="date"
                        type="date"
                        value={scheduledDate}
                        onChange={(e) => setScheduledDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="time">Time</Label>
                    <div className="flex items-center mt-2">
                      <Clock className="h-4 w-4 mr-2 text-gray-500" />
                      <Input
                        id="time"
                        type="time"
                        value={scheduledTime}
                        onChange={(e) => setScheduledTime(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      
      case 3:
        const breakdown = calculateTotal();
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Order Summary & Payment</h3>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between pb-4 border-b">
                      <span className="font-medium">Order Details</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-gray-500">Fuel Type:</span>
                        <div className="font-medium mt-1 flex items-center">
                          <Fuel className="h-4 w-4 mr-2 text-brand-blue" />
                          {fuelType === 'petrol' ? 'Petrol' : 'Diesel'}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Quantity:</span>
                        <p className="font-medium mt-1">{quantity} Litres</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Delivery To:</span>
                        <p className="font-medium mt-1">
                          <MapPin className="h-4 w-4 inline mr-1 text-brand-red" />
                          {address}
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-500">Delivery Time:</span>
                        <p className="font-medium mt-1">
                          <Clock className="h-4 w-4 inline mr-1 text-brand-red" />
                          {deliveryTime === 'asap' 
                            ? 'As Soon As Possible' 
                            : `${scheduledDate} at ${scheduledTime}`}
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="flex justify-between mb-2">
                        <span>Fuel Cost ({quantity} L × ₦{prices[fuelType as keyof typeof prices]}/L):</span>
                        <span>₦{breakdown.fuelCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Delivery Fee:</span>
                        <span>₦{breakdown.deliveryFee.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between mb-4">
                        <span>Service Fee:</span>
                        <span>₦{breakdown.serviceFee.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2 border-t">
                        <span>Total:</span>
                        <span>₦{breakdown.total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div>
                <h4 className="font-semibold mb-3">Payment Method</h4>
                <RadioGroup defaultValue="card" className="space-y-3">
                  <div className="flex items-center space-x-2 p-3 border rounded-md">
                    <RadioGroupItem value="card" id="payment-card" />
                    <Label htmlFor="payment-card" className="flex items-center cursor-pointer flex-1">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Pay with Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-md">
                    <RadioGroupItem value="transfer" id="payment-transfer" />
                    <Label htmlFor="payment-transfer" className="cursor-pointer flex-1">Bank Transfer</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-md">
                    <RadioGroupItem value="cash" id="payment-cash" />
                    <Label htmlFor="payment-cash" className="cursor-pointer flex-1">Cash on Delivery</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-brand-blue mb-2">Fuel Delivery</h1>
            <p className="text-gray-600">Get fuel delivered right to your doorstep</p>
          </div>
          
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > 1 ? <Check className="h-5 w-5" /> : '1'}
                </div>
                <span className="text-sm mt-2">Fuel Selection</span>
              </div>
              <div className="flex-1 flex items-center mx-4">
                <div className={`h-1 w-full ${step >= 2 ? 'bg-brand-blue' : 'bg-gray-200'}`}></div>
              </div>
              <div className="flex flex-col items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > 2 ? <Check className="h-5 w-5" /> : '2'}
                </div>
                <span className="text-sm mt-2">Delivery Details</span>
              </div>
              <div className="flex-1 flex items-center mx-4">
                <div className={`h-1 w-full ${step >= 3 ? 'bg-brand-blue' : 'bg-gray-200'}`}></div>
              </div>
              <div className="flex flex-col items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 3 ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  3
                </div>
                <span className="text-sm mt-2">Payment</span>
              </div>
            </div>
          </div>
          
          <Card className="card-shadow">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit}>
                {renderStep()}
                
                <div className="flex justify-between mt-8">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handlePrevious}
                    disabled={step === 1}
                  >
                    Previous
                  </Button>
                  
                  <Button type="submit">
                    {step < 3 ? 'Continue' : 'Place Order'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Need a regular fuel delivery? Check out our subscription plans.
            </p>
            <Link to="/subscription">
              <Button variant="outline">View Subscription Plans</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelDelivery;
