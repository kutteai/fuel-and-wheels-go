
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Calendar, Zap, Wrench, Package, ArrowRight, Settings, BarChart, Activity } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const GeneratorService = () => {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast({
      title: "Service Requested",
      description: "Your generator maintenance request has been submitted successfully.",
    });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-3">Generator Maintenance Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Keep your generator running at peak performance with our expert maintenance services. We provide comprehensive care for all generator types and brands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-brand-blue">Why Choose Our Generator Maintenance Services</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Wrench className="h-6 w-6 text-brand-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Expert Technicians</h3>
                <p className="text-gray-600">Our certified technicians are trained to service all generator brands and models with precision and care.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-brand-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Scheduled Maintenance</h3>
                <p className="text-gray-600">Set up regular maintenance schedules to ensure your generator is always ready when you need it most.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Zap className="h-6 w-6 text-brand-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Emergency Services</h3>
                <p className="text-gray-600">Unexpected breakdown? Our emergency service team is available to get your power back quickly.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Package className="h-6 w-6 text-brand-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Genuine Parts</h3>
                <p className="text-gray-600">We use only genuine parts to ensure the longevity and reliability of your generator.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <Card className="shadow-lg">
            <CardHeader className="bg-brand-purple text-white rounded-t-lg">
              <CardTitle className="text-2xl">Request Generator Service</CardTitle>
              <CardDescription className="text-purple-100">Fill out the form below to schedule your maintenance</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" required />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="genType">Generator Type</Label>
                      <Select>
                        <SelectTrigger id="genType">
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
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Type</Label>
                      <Select>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="regular">Regular Maintenance</SelectItem>
                          <SelectItem value="repair">Repair Service</SelectItem>
                          <SelectItem value="installation">Installation</SelectItem>
                          <SelectItem value="inspection">Inspection</SelectItem>
                          <SelectItem value="emergency">Emergency Service</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Service Address</Label>
                    <Textarea id="address" placeholder="Enter your address" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Information</Label>
                    <Textarea id="notes" placeholder="Please provide any additional details about your generator or service requirements" />
                  </div>
                </div>
                
                <Button type="submit" className="w-full mt-6">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-brand-blue">Our Maintenance Services</h2>
        
        <Tabs defaultValue="regular" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="regular" className="text-base py-3">Regular Maintenance</TabsTrigger>
            <TabsTrigger value="emergency" className="text-base py-3">Emergency Repairs</TabsTrigger>
            <TabsTrigger value="installation" className="text-base py-3">Installation & Setup</TabsTrigger>
          </TabsList>
          
          <TabsContent value="regular" className="border rounded-lg p-6">
            <div className="flex gap-8 items-start">
              <div className="hidden md:block bg-purple-100 p-6 rounded-full">
                <Settings className="h-12 w-12 text-brand-purple" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Regular Maintenance Packages</h3>
                <p className="text-gray-600 mb-6">Our scheduled maintenance keeps your generator in top condition and prevents costly breakdowns.</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>Complete system inspection and testing</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>Oil and filter changes</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>Fuel system maintenance</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>Battery check and service</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>Cooling system inspection</p>
                  </div>
                </div>
                
                <Button className="gap-2">
                  Schedule Maintenance <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="emergency" className="border rounded-lg p-6">
            <div className="flex gap-8 items-start">
              <div className="hidden md:block bg-red-100 p-6 rounded-full">
                <Zap className="h-12 w-12 text-red-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Emergency Repair Services</h3>
                <p className="text-gray-600 mb-6">Fast response times when your generator fails - we'll get your power back quickly.</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>24/7 emergency response</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>Rapid diagnostics and troubleshooting</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>On-site repairs</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>Parts replacement</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>Follow-up maintenance plans</p>
                  </div>
                </div>
                
                <Button className="gap-2 bg-red-500 hover:bg-red-600">
                  Emergency Service <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="installation" className="border rounded-lg p-6">
            <div className="flex gap-8 items-start">
              <div className="hidden md:block bg-blue-100 p-6 rounded-full">
                <Wrench className="h-12 w-12 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Installation & Setup Services</h3>
                <p className="text-gray-600 mb-6">Professional installation of new generators and setup for optimal performance.</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>Site assessment and preparation</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>Generator placement and mounting</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>Fuel system setup</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>Electrical connections and testing</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p>Owner training and maintenance plan</p>
                  </div>
                </div>
                
                <Button className="gap-2 bg-blue-500 hover:bg-blue-600">
                  Get Installation Quote <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-brand-blue mb-3">Why Regular Generator Maintenance Matters</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Proper maintenance extends your generator's lifespan, ensures reliability, and prevents costly repairs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="pb-2">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <BarChart className="h-6 w-6 text-brand-purple" />
              </div>
              <CardTitle>Increased Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Regular maintenance ensures your generator runs at peak efficiency, reducing fuel consumption and operational costs.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <Activity className="h-6 w-6 text-brand-purple" />
              </div>
              <CardTitle>Extended Lifespan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Proper care and maintenance can significantly extend the operational life of your generator, protecting your investment.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <Zap className="h-6 w-6 text-brand-purple" />
              </div>
              <CardTitle>Reliable Power</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                When power outages occur, a well-maintained generator provides the reliable backup power you need when it matters most.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-brand-blue mb-6">Ready to Schedule Your Generator Maintenance?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Our expert technicians are ready to help keep your generator in peak condition. Schedule your service today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8">
            Schedule Service
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            View Maintenance Plans
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GeneratorService;
