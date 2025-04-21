
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Calendar, Zap, Wrench, Package, ArrowRight, Settings, BarChart, Activity, Check } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const GeneratorService = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  
  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  
  // Generator details
  const [genType, setGenType] = useState("");
  const [genModel, setGenModel] = useState("");
  const [genCapacity, setGenCapacity] = useState("");
  
  // Service options
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [deliveryTime, setDeliveryTime] = useState("asap");
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledHour, setScheduledHour] = useState("");
  const [scheduledMinute, setScheduledMinute] = useState("");
  const [scheduledPeriod, setScheduledPeriod] = useState("AM");
  
  // Payment
  const [paymentMethod, setPaymentMethod] = useState("card");
  
  // Service types and prices
  const services = {
    "regular-maintenance": { name: "Regular Maintenance", price: 15000, description: "Oil change, filter replacement, and basic inspection" },
    "repair": { name: "Repair Service", price: 25000, description: "Diagnosis and repair of generator issues" },
    "battery-check": { name: "Battery Check & Electrical Services", price: 8000, description: "Battery testing, terminals cleaning, electrical system check" },
    "load-balancing": { name: "Load Balancing", price: 12000, description: "Optimize generator power distribution" },
    "installation": { name: "Installation & Setup", price: 35000, description: "Professional installation and configuration" },
    "engine-wiring": { name: "Engine Wiring", price: 20000, description: "Inspect and repair generator wiring" }
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
    
    const calloutFee = 3000; // Fixed callout fee
    const serviceFee = 500; // Service fee
    
    return {
      serviceCost,
      calloutFee,
      serviceFee,
      total: serviceCost + calloutFee + serviceFee
    };
  };
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      toast({
        title: "Service Requested",
        description: "Your generator maintenance request has been submitted successfully.",
      });
      
      // Redirect to tracking page
      setTimeout(() => {
        navigate("/track");
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
            <h3 className="text-xl font-semibold mb-4">Select Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(services).map(([id, service]) => (
                <div key={id} className={`flex items-start space-x-2 p-4 border rounded-md transition-colors ${
                  selectedServices.includes(id) ? 'bg-blue-50 border-brand-blue' : 'hover:border-brand-blue'
                }`}>
                  <Checkbox 
                    id={id} 
                    checked={selectedServices.includes(id)}
                    onCheckedChange={(checked) => handleServiceChange(id, checked === true)}
                  />
                  <div className="flex-1">
                    <Label htmlFor={id} className="flex items-center cursor-pointer">
                      <Zap className="h-4 w-4 mr-2 text-brand-purple" />
                      {service.name}
                    </Label>
                    <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                    <div className="text-sm font-medium text-brand-blue mt-1">₦{service.price.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
            {selectedServices.length === 0 && (
              <p className="text-red-500 text-sm mt-2">Please select at least one service to continue.</p>
            )}
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Generator & Service Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <Label htmlFor="genType">Generator Type</Label>
                <Select value={genType} onValueChange={setGenType} required>
                  <SelectTrigger id="genType" className="mt-1">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="diesel">Diesel Generator</SelectItem>
                    <SelectItem value="petrol">Petrol Generator</SelectItem>
                    <SelectItem value="inverter">Inverter Generator</SelectItem>
                    <SelectItem value="solar">Solar Generator</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="genModel">Model (Optional)</Label>
                <Input
                  id="genModel"
                  value={genModel}
                  onChange={(e) => setGenModel(e.target.value)}
                  className="mt-1"
                  placeholder="e.g. Honda EU2200i"
                />
              </div>
              
              <div>
                <Label htmlFor="genCapacity">Capacity (kVA/kW)</Label>
                <Input
                  id="genCapacity"
                  value={genCapacity}
                  onChange={(e) => setGenCapacity(e.target.value)}
                  className="mt-1"
                  placeholder="e.g. 2.2"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <div className="space-y-4">
                <Label>Service Time</Label>
                <RadioGroup value={deliveryTime} onValueChange={setDeliveryTime} className="space-y-3">
                  <div className="flex items-center space-x-2 p-3 border rounded-md hover:border-brand-blue cursor-pointer">
                    <RadioGroupItem value="asap" id="gen-asap" />
                    <Label htmlFor="gen-asap" className="flex items-center cursor-pointer flex-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      As Soon As Possible (24-48 hours)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-md hover:border-brand-blue cursor-pointer">
                    <RadioGroupItem value="scheduled" id="gen-scheduled" />
                    <Label htmlFor="gen-scheduled" className="cursor-pointer flex-1">Schedule for Later</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {deliveryTime === "scheduled" && (
                <div className="space-y-4 mt-4 p-4 border rounded-md bg-gray-50">
                  <div>
                    <Label htmlFor="scheduledDate">Date</Label>
                    <div className="mt-1">
                      <input
                        id="scheduledDate"
                        type="date"
                        className="w-full p-2 border rounded-md"
                        value={scheduledDate}
                        onChange={(e) => setScheduledDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Time</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <Select value={scheduledHour} onValueChange={setScheduledHour}>
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="Hour" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')).map((hour) => (
                            <SelectItem key={hour} value={hour}>{hour}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      
                      <span>:</span>
                      
                      <Select value={scheduledMinute} onValueChange={setScheduledMinute}>
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="Min" />
                        </SelectTrigger>
                        <SelectContent>
                          {['00', '15', '30', '45'].map((minute) => (
                            <SelectItem key={minute} value={minute}>{minute}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      
                      <Select value={scheduledPeriod} onValueChange={setScheduledPeriod}>
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="AM/PM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="AM">AM</SelectItem>
                          <SelectItem value="PM">PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone number"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
              />
            </div>
            
            <div className="mb-6">
              <Label htmlFor="address">Service Address</Label>
              <Textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Where should we service your generator?"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="notes">Additional Information (Optional)</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any specific issues or requests?"
              />
            </div>
          </div>
        );
        
      case 3:
        const breakdown = calculateTotal();
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Order Summary & Payment</h3>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between pb-4 border-b">
                    <span className="font-medium">Service Details</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-gray-500">Generator:</span>
                      <div className="font-medium mt-1 flex items-center">
                        <Settings className="h-4 w-4 mr-2 text-brand-purple" />
                        {genType} {genModel && `(${genModel})`} - {genCapacity} kVA
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-500">Service At:</span>
                      <p className="font-medium mt-1">
                        {address}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Contact:</span>
                      <p className="font-medium mt-1">
                        {name} | {phone} | {email}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Service Time:</span>
                      <p className="font-medium mt-1">
                        {deliveryTime === 'asap' 
                          ? 'As Soon As Possible' 
                          : `${scheduledDate} at ${scheduledHour}:${scheduledMinute} ${scheduledPeriod}`}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Selected Services:</h4>
                    <ul className="space-y-2 mb-4">
                      {selectedServices.map(serviceId => (
                        <li key={serviceId} className="flex justify-between">
                          <span className="flex items-center">
                            <Wrench className="h-4 w-4 mr-2 text-brand-purple" />
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
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                <div className="flex items-center space-x-2 p-3 border rounded-md">
                  <RadioGroupItem value="card" id="payment-card" />
                  <Label htmlFor="payment-card" className="cursor-pointer flex-1">Pay with Card</Label>
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
            <h1 className="text-3xl font-bold text-brand-purple mb-2">Generator Maintenance</h1>
            <p className="text-gray-600">Professional generator care at your location</p>
          </div>
          
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 1 ? 'bg-brand-purple text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > 1 ? <Check className="h-5 w-5" /> : '1'}
                </div>
                <span className="text-sm mt-2">Select Services</span>
              </div>
              <div className="flex-1 flex items-center mx-4">
                <div className={`h-1 w-full ${step >= 2 ? 'bg-brand-purple' : 'bg-gray-200'}`}></div>
              </div>
              <div className="flex flex-col items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 2 ? 'bg-brand-purple text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > 2 ? <Check className="h-5 w-5" /> : '2'}
                </div>
                <span className="text-sm mt-2">Generator Details</span>
              </div>
              <div className="flex-1 flex items-center mx-4">
                <div className={`h-1 w-full ${step >= 3 ? 'bg-brand-purple' : 'bg-gray-200'}`}></div>
              </div>
              <div className="flex flex-col items-center">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 3 ? 'bg-brand-purple text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  3
                </div>
                <span className="text-sm mt-2">Payment</span>
              </div>
            </div>
          </div>
          
          <Card className="shadow-md">
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
                    className="bg-brand-purple hover:bg-purple-700"
                    disabled={step === 1 && selectedServices.length === 0}
                  >
                    {step < 3 ? 'Continue' : 'Book Service'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GeneratorService;
