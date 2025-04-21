
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { AlertTriangle, Car, Zap, Clock, MapPin, CheckCircle } from 'lucide-react';

const EmergencyService = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [emergencyType, setEmergencyType] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Emergency Request Submitted",
      description: "Our team has been notified and will contact you shortly.",
      variant: "default",
    });
    
    // Redirect to tracking page
    setTimeout(() => {
      navigate("/track");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-2">Emergency Services</h1>
            <p className="text-gray-600">
              Immediate assistance for urgent fuel, vehicle, or generator needs
            </p>
          </div>
          
          <Card className="border-red-200 shadow-md mb-8">
            <CardHeader className="bg-red-50 border-b border-red-100">
              <CardTitle className="text-red-600 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Emergency Support
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label className="text-lg font-medium mb-3 block">What type of emergency do you have?</Label>
                  <RadioGroup value={emergencyType} onValueChange={setEmergencyType} className="space-y-3">
                    <div className="flex items-start space-x-2 p-4 border rounded-md hover:border-red-300 hover:bg-red-50">
                      <RadioGroupItem value="fuel" id="emergency-fuel" />
                      <div>
                        <Label htmlFor="emergency-fuel" className="flex items-center cursor-pointer">
                          <span className="font-medium">Emergency Fuel Delivery</span>
                        </Label>
                        <p className="text-sm text-gray-500 mt-1">
                          Out of fuel and stranded? We'll bring fuel to your location ASAP.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 p-4 border rounded-md hover:border-red-300 hover:bg-red-50">
                      <RadioGroupItem value="vehicle" id="emergency-vehicle" />
                      <div>
                        <Label htmlFor="emergency-vehicle" className="flex items-center cursor-pointer">
                          <span className="font-medium">Vehicle Breakdown Support</span>
                        </Label>
                        <p className="text-sm text-gray-500 mt-1">
                          Battery issues, flat tire, or other urgent vehicle problems.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 p-4 border rounded-md hover:border-red-300 hover:bg-red-50">
                      <RadioGroupItem value="generator" id="emergency-generator" />
                      <div>
                        <Label htmlFor="emergency-generator" className="flex items-center cursor-pointer">
                          <span className="font-medium">Generator Emergency</span>
                        </Label>
                        <p className="text-sm text-gray-500 mt-1">
                          Urgent generator repairs or issues during power outages.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2 p-4 border rounded-md hover:border-red-300 hover:bg-red-50">
                      <RadioGroupItem value="other" id="emergency-other" />
                      <div>
                        <Label htmlFor="emergency-other" className="flex items-center cursor-pointer">
                          <span className="font-medium">Other Emergency</span>
                        </Label>
                        <p className="text-sm text-gray-500 mt-1">
                          Any other urgent situation requiring immediate assistance.
                        </p>
                      </div>
                    </div>
                  </RadioGroup>
                  
                  {!emergencyType && (
                    <p className="text-red-500 text-sm mt-2">Please select an emergency type</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="location">Your Current Location</Label>
                  <div className="flex mt-1">
                    <Input
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter your location or address"
                      className="flex-1"
                      required
                    />
                    <Button variant="outline" type="button" className="ml-2">
                      <MapPin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">Describe the Emergency</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Please provide details about your emergency"
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Submit Emergency Request
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-100 p-3 rounded-full mb-3">
                    <Clock className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="font-semibold mb-1">Fast Response</h3>
                  <p className="text-sm text-gray-600">
                    We aim to respond to all emergency requests within 15-30 minutes
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-100 p-3 rounded-full mb-3">
                    <MapPin className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="font-semibold mb-1">City-Wide Coverage</h3>
                  <p className="text-sm text-gray-600">
                    Our emergency teams are positioned throughout the city
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-100 p-3 rounded-full mb-3">
                    <CheckCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="font-semibold mb-1">Expert Technicians</h3>
                  <p className="text-sm text-gray-600">
                    Highly trained staff to handle various emergency situations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm">
              For medical emergencies, please call emergency services directly at 911
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyService;
