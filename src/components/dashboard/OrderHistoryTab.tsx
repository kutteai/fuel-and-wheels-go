
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fuel, Wrench, ArrowRight, Zap } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample order history data
const sampleOrders = [
  { 
    id: "ORD-1234", 
    date: "April 8, 2025", 
    type: "fuel", 
    status: "Completed", 
    description: "10 Gallons Premium Fuel", 
    amount: "₦45,990",
    address: "123 Main St, Anytown"
  },
  { 
    id: "ORD-1235", 
    date: "March 15, 2025", 
    type: "service", 
    status: "Completed", 
    description: "Oil Change + Tire Rotation", 
    amount: "₦89,990",
    address: "123 Main St, Anytown"
  },
  { 
    id: "ORD-1236", 
    date: "March 1, 2025", 
    type: "fuel", 
    status: "Completed", 
    description: "15 Gallons Regular Fuel", 
    amount: "₦52,500",
    address: "456 Business Ave, Workville"
  }
];

// Sample generator service history
const sampleGeneratorServices = [
  { 
    id: "GEN-1234", 
    date: "April 10, 2025", 
    type: "generator", 
    status: "Completed", 
    description: "Annual Maintenance & Oil Change", 
    amount: "₦120,000",
    address: "123 Main St, Anytown",
    generatorModel: "Honda EU2200i"
  },
  { 
    id: "GEN-1235", 
    date: "February 20, 2025", 
    type: "generator", 
    status: "Completed", 
    description: "Carburetor Cleaning & Spark Plug Replacement", 
    amount: "₦85,000",
    address: "123 Main St, Anytown",
    generatorModel: "Generac GP8000E"
  }
];

const OrderHistoryTab = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleTrackOrder = (id: string) => {
    navigate(`/track?orderId=${id}`);
  };
  
  const handleReorder = (type: string) => {
    if (type === 'fuel') {
      navigate('/fuel');
    } else if (type === 'service') {
      navigate('/service');
    } else if (type === 'generator') {
      navigate('/generator-service');
    }
    
    toast({
      title: "Reorder Started",
      description: "We've started a new order with your previous details.",
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order History</CardTitle>
        <CardDescription>View and manage your past orders</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4 grid grid-cols-3">
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="vehicle">Vehicle Services</TabsTrigger>
            <TabsTrigger value="generator">Generator Services</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="space-y-4">
              {[...sampleOrders, ...sampleGeneratorServices].sort((a, b) => 
                new Date(b.date).getTime() - new Date(a.date).getTime()
              ).map(order => (
                <OrderCard 
                  key={order.id} 
                  order={order} 
                  onTrackOrder={handleTrackOrder} 
                  onReorder={handleReorder} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="vehicle">
            <div className="space-y-4">
              {sampleOrders.map(order => (
                <OrderCard 
                  key={order.id} 
                  order={order} 
                  onTrackOrder={handleTrackOrder} 
                  onReorder={handleReorder} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="generator">
            <div className="space-y-4">
              {sampleGeneratorServices.map(order => (
                <OrderCard 
                  key={order.id} 
                  order={order} 
                  onTrackOrder={handleTrackOrder} 
                  onReorder={handleReorder} 
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

// Order Card Component
const OrderCard = ({ 
  order, 
  onTrackOrder, 
  onReorder 
}: { 
  order: any; 
  onTrackOrder: (id: string) => void; 
  onReorder: (type: string) => void; 
}) => {
  return (
    <Card className="overflow-hidden">
      <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
        <div>
          <span className="font-medium">{order.id}</span>
          <span className="text-gray-500 text-sm ml-4">{order.date}</span>
        </div>
        <span className={`px-2 py-1 rounded text-xs ${
          order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
          order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
          'bg-yellow-100 text-yellow-800'
        }`}>
          {order.status}
        </span>
      </div>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-full ${
            order.type === 'fuel' ? 'bg-brand-orange/10 text-brand-orange' : 
            order.type === 'generator' ? 'bg-green-500/10 text-green-600' :
            'bg-brand-blue/10 text-brand-blue'
          }`}>
            {order.type === 'fuel' ? <Fuel className="h-6 w-6" /> : 
             order.type === 'generator' ? <Zap className="h-6 w-6" /> :
             <Wrench className="h-6 w-6" />}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold">{
              order.type === 'fuel' ? 'Fuel Delivery' : 
              order.type === 'generator' ? 'Generator Service' :
              'Car Service'
            }</h4>
            <p className="text-sm text-gray-500">{order.description}</p>
            {order.generatorModel && (
              <p className="text-sm text-gray-500">Model: {order.generatorModel}</p>
            )}
            <p className="text-sm text-gray-500">{order.address}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="font-semibold">{order.amount}</span>
              <div className="space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onReorder(order.type)}
                >
                  Reorder
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-brand-blue"
                  onClick={() => onTrackOrder(order.id)}
                >
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderHistoryTab;
