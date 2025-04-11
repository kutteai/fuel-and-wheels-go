
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Clock, Truck, CheckCircle, UserCheck, Car, Wrench } from 'lucide-react';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  
  // Mock data - in a real app, this would come from the backend
  const mockOrderDetails = {
    id: "FW-2025-04-1234",
    type: "fuel", // 'fuel' or 'service'
    status: "in-progress", // 'scheduled', 'en-route', 'in-progress', 'complete'
    details: {
      fuelType: "Petrol",
      quantity: "50L",
      address: "15 Idowu Martins St, Victoria Island, Lagos",
      scheduledTime: "Today, 2:30 PM",
      estimatedArrival: "15 minutes",
    },
    technician: {
      name: "Emmanuel Okonkwo",
      rating: 4.8,
      phone: "+234 800 123 4567",
    }
  };
  
  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would fetch the order details from the backend
    setIsTracking(true);
  };
  
  const getStatusPercentage = (status: string) => {
    switch(status) {
      case 'scheduled': return 25;
      case 'en-route': return 50;
      case 'in-progress': return 75;
      case 'complete': return 100;
      default: return 0;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Track My Order</h1>
            <p className="text-gray-600">Check the status of your fuel delivery or car service</p>
          </div>
          
          {!isTracking ? (
            <Card className="card-shadow">
              <CardContent className="p-6">
                <form onSubmit={handleTrack}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="order-id">Order ID</Label>
                      <Input
                        id="order-id"
                        placeholder="Enter your order ID (e.g., FW-2025-04-1234)"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Track Order</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {/* Order Status Card */}
              <Card className="card-shadow overflow-hidden">
                <div className="bg-brand-blue text-white p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-xl font-semibold mb-1">Order #{mockOrderDetails.id}</h2>
                      <p className="text-blue-100">
                        {mockOrderDetails.type === 'fuel' ? 'Fuel Delivery' : 'Car Service'}
                      </p>
                    </div>
                    <div className="bg-white text-brand-blue px-3 py-1 rounded-full text-sm font-medium">
                      {mockOrderDetails.status === 'scheduled' && 'Scheduled'}
                      {mockOrderDetails.status === 'en-route' && 'En Route'}
                      {mockOrderDetails.status === 'in-progress' && 'In Progress'}
                      {mockOrderDetails.status === 'complete' && 'Completed'}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between mb-2 text-sm">
                      <span>Order Placed</span>
                      <span>Completed</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-green-500 h-2.5 rounded-full" 
                        style={{ width: `${getStatusPercentage(mockOrderDetails.status)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Status Steps */}
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                        ['scheduled', 'en-route', 'in-progress', 'complete'].includes(mockOrderDetails.status) 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Order Scheduled</h3>
                        <p className="text-gray-500 text-sm">
                          {mockOrderDetails.details.scheduledTime}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                        ['en-route', 'in-progress', 'complete'].includes(mockOrderDetails.status) 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        <Truck className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Technician En Route</h3>
                        {['en-route', 'in-progress', 'complete'].includes(mockOrderDetails.status) ? (
                          <p className="text-gray-500 text-sm">
                            Estimated arrival in {mockOrderDetails.details.estimatedArrival}
                          </p>
                        ) : (
                          <p className="text-gray-500 text-sm">Waiting for technician dispatch</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                        ['in-progress', 'complete'].includes(mockOrderDetails.status) 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        {mockOrderDetails.type === 'fuel' ? (
                          <Truck className="h-5 w-5" />
                        ) : (
                          <Wrench className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">
                          {mockOrderDetails.type === 'fuel' ? 'Delivery In Progress' : 'Service In Progress'}
                        </h3>
                        {['in-progress', 'complete'].includes(mockOrderDetails.status) ? (
                          <p className="text-gray-500 text-sm">
                            {mockOrderDetails.type === 'fuel' 
                              ? 'Your fuel is being dispensed' 
                              : 'Technician is working on your vehicle'}
                          </p>
                        ) : (
                          <p className="text-gray-500 text-sm">
                            {mockOrderDetails.type === 'fuel' 
                              ? 'Waiting for delivery to start' 
                              : 'Waiting for service to start'}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                        mockOrderDetails.status === 'complete' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Completed</h3>
                        {mockOrderDetails.status === 'complete' ? (
                          <p className="text-gray-500 text-sm">
                            {mockOrderDetails.type === 'fuel' 
                              ? 'Fuel delivered successfully' 
                              : 'Service completed successfully'}
                          </p>
                        ) : (
                          <p className="text-gray-500 text-sm">Waiting for completion</p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Order Details Card */}
              <Card className="card-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Order Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mockOrderDetails.type === 'fuel' ? (
                      <>
                        <div>
                          <p className="text-gray-500 text-sm">Fuel Type</p>
                          <p className="font-medium">{mockOrderDetails.details.fuelType}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">Quantity</p>
                          <p className="font-medium">{mockOrderDetails.details.quantity}</p>
                        </div>
                      </>
                    ) : (
                      <div>
                        <p className="text-gray-500 text-sm">Service Type</p>
                        <p className="font-medium">Oil Change, Tire Pressure Check</p>
                      </div>
                    )}
                    
                    <div>
                      <p className="text-gray-500 text-sm">Delivery Address</p>
                      <p className="font-medium flex items-center">
                        <MapPin className="h-4 w-4 text-brand-red mr-1" />
                        {mockOrderDetails.details.address}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-gray-500 text-sm">Scheduled Time</p>
                      <p className="font-medium flex items-center">
                        <Clock className="h-4 w-4 text-brand-blue mr-1" />
                        {mockOrderDetails.details.scheduledTime}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Technician Card */}
              <Card className="card-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Your Technician</h3>
                  
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="h-16 w-16 rounded-full bg-brand-lightgray flex items-center justify-center">
                        <UserCheck className="h-8 w-8 text-brand-blue" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{mockOrderDetails.technician.name}</h4>
                      <div className="flex items-center mt-1">
                        <div className="flex text-yellow-400 mr-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{mockOrderDetails.technician.rating}</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{mockOrderDetails.technician.phone}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <Button variant="outline">
                      Call Technician
                    </Button>
                    <Button>
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Live Location Map Placeholder */}
              <Card className="card-shadow">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-brand-blue mx-auto" />
                      <p className="mt-2 text-gray-600">Live location tracking</p>
                      <p className="text-sm text-gray-500">(Map would be integrated here)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
