
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Clock, CreditCard, Calendar, Check, Car, Wrench, ThumbsUp } from 'lucide-react';

const CarService = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");
  const [address, setAddress] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("asap");
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  
  // Service prices
  const services = {
    "oil-change": { name: "Oil Change", price: 12000 },
    "car-wash": { name: "Car Wash", price: 5000 },
    "tire-pressure": { name: "Tire Pressure Check", price: 2000 },
    "battery-jump": { name: "Battery Jump Start", price: 4000 },
    "fluid-topup": { name: "Fluid Top-ups", price: 3000 }
  };
  
  const handleServiceChange = (serviceId: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, serviceId]);
    } else {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    }
  };
  
  const calculateTotal = () => {
    const serviceCost = selectedServices.reduce((total, serviceId) => {
      return total + (services[serviceId as keyof typeof services]?.price || 0);
    }, 0);
    
    const calloutFee = 2500; // Fixed callout fee
    const serviceFee = 500; // Service fee
    
    return {
      serviceCost,
      calloutFee,
      serviceFee,
      total: serviceCost + calloutFee + serviceFee
    };
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process booking (would connect to backend in real app)
      toast({
        title: "Booking Successful!",
        description: "Your car service has been booked successfully!",
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
              <h3 className="text-xl font-semibold mb-4">Select Services</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(services).map(([id, service]) => (
                  <div key={id} className="flex items-start space-x-2 p-4 border rounded-md hover:border-brand-blue">
                    <Checkbox 
                      id={id} 
                      checked={selectedServices.includes(id)}
                      onCheckedChange={(checked) => handleServiceChange(id, checked === true)}
                    />
                    <div className="flex-1">
                      <Label htmlFor={id} className="flex items-center cursor-pointer">
                        <ThumbsUp className="h-4 w-4 mr-2 text-brand-blue" />
                        {service.name}
                      </Label>
                      <div className="text-sm text-gray-500 mt-1">₦{service.price.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {selectedServices.length === 0 && (
                <p className="text-red-500 text-sm mt-2">Please select at least one service to continue.</p>
              )}
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Vehicle & Service Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <Label htmlFor="carMake">Car Make</Label>
                  <Select value={carMake} onValueChange={setCarMake} required>
                    <SelectTrigger id="carMake" className="mt-1">
                      <SelectValue placeholder="Select make" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="toyota">Toyota</SelectItem>
                      <SelectItem value="honda">Honda</SelectItem>
                      <SelectItem value="hyundai">Hyundai</SelectItem>
                      <SelectItem value="ford">Ford</SelectItem>
                      <SelectItem value="kia">Kia</SelectItem>
                      <SelectItem value="mazda">Mazda</SelectItem>
                      <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                      <SelectItem value="bmw">BMW</SelectItem>
                      <SelectItem value="audi">Audi</SelectItem>
                      <SelectItem value="lexus">Lexus</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="carModel">Car Model</Label>
                  <Input
                    id="carModel"
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    className="mt-1"
                    placeholder="e.g. Camry"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="carYear">Year</Label>
                  <Input
                    id="carYear"
                    value={carYear}
                    onChange={(e) => setCarYear(e.target.value)}
                    className="mt-1"
                    placeholder="e.g. 2019"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <Label htmlFor="address">Service Address</Label>
                <div className="flex mt-1">
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
                <Label htmlFor="notes">Additional Notes (optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Any specific instructions or concerns about your vehicle?"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div className="mb-6">
                <Label>Service Time</Label>
                <RadioGroup value={deliveryTime} onValueChange={setDeliveryTime} className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="asap" id="asap" />
                    <Label htmlFor="asap" className="flex items-center cursor-pointer">
                      <Clock className="h-4 w-4 mr-2" />
                      As Soon As Possible (3-4 hours)
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
                    <div className="flex items-center mt-1">
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
                    <div className="flex items-center mt-1">
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
                      <span className="font-medium">Booking Details</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-gray-500">Vehicle:</span>
                        <div className="font-medium mt-1 flex items-center">
                          <Car className="h-4 w-4 mr-2 text-brand-blue" />
                          {carMake} {carModel} ({carYear})
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Service At:</span>
                        <p className="font-medium mt-1">
                          <MapPin className="h-4 w-4 inline mr-1 text-brand-red" />
                          {address}
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-500">Service Time:</span>
                        <p className="font-medium mt-1">
                          <Clock className="h-4 w-4 inline mr-1 text-brand-red" />
                          {deliveryTime === 'asap' 
                            ? 'As Soon As Possible' 
                            : `${scheduledDate} at ${scheduledTime}`}
                        </p>
                      </div>
                      {additionalNotes && (
                        <div>
                          <span className="text-gray-500">Additional Notes:</span>
                          <p className="font-medium mt-1">{additionalNotes}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h4 className="font-medium mb-2">Selected Services:</h4>
                      <ul className="space-y-2 mb-4">
                        {selectedServices.map(serviceId => (
                          <li key={serviceId} className="flex justify-between">
                            <span className="flex items-center">
                              <Wrench className="h-4 w-4 mr-2 text-brand-blue" />
                              {services[serviceId as keyof typeof services].name}
                            </span>
                            <span>₦{services[serviceId as keyof typeof services].price.toLocaleString()}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex justify-between mb-2">
                        <span>Service Cost:</span>
                        <span>₦{breakdown.serviceCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Callout Fee:</span>
                        <span>₦{breakdown.calloutFee.toLocaleString()}</span>
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
            <h1 className="text-3xl font-bold text-brand-red mb-2">Car Servicing</h1>
            <p className="text-gray-600">Professional car care at your location</p>
          </div>
          
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-brand-red text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > 1 ? <Check className="h-5 w-5" /> : '1'}
                </div>
                <span className="text-sm mt-2">Select Services</span>
              </div>
              <div className="flex-1 flex items-center mx-4">
                <div className={`h-1 w-full ${step >= 2 ? 'bg-brand-red' : 'bg-gray-200'}`}></div>
              </div>
              <div className="flex flex-col items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-brand-red text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > 2 ? <Check className="h-5 w-5" /> : '2'}
                </div>
                <span className="text-sm mt-2">Vehicle Details</span>
              </div>
              <div className="flex-1 flex items-center mx-4">
                <div className={`h-1 w-full ${step >= 3 ? 'bg-brand-red' : 'bg-gray-200'}`}></div>
              </div>
              <div className="flex flex-col items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 3 ? 'bg-brand-red text-white' : 'bg-gray-200 text-gray-500'
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
                  
                  <Button 
                    type="submit" 
                    className="bg-brand-red hover:bg-red-700"
                    disabled={step === 1 && selectedServices.length === 0}
                  >
                    {step < 3 ? 'Continue' : 'Book Service'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Need regular car maintenance? Check out our subscription plans.
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

export default CarService;
