
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Fuel, Wrench, ArrowRight } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from 'react-router-dom';

// Sample order history data
const sampleOrders = [
  { 
    id: "ORD-1234", 
    date: "April 8, 2025", 
    type: "fuel", 
    status: "Completed", 
    description: "10 Gallons Premium Fuel", 
    amount: "$45.99",
    address: "123 Main St, Anytown"
  },
  { 
    id: "ORD-1235", 
    date: "March 15, 2025", 
    type: "service", 
    status: "Completed", 
    description: "Oil Change + Tire Rotation", 
    amount: "$89.99",
    address: "123 Main St, Anytown"
  },
  { 
    id: "ORD-1236", 
    date: "March 1, 2025", 
    type: "fuel", 
    status: "Completed", 
    description: "15 Gallons Regular Fuel", 
    amount: "$52.50",
    address: "456 Business Ave, Workville"
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
    } else {
      navigate('/service');
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
        <div className="space-y-4">
          {sampleOrders.map(order => (
            <Card key={order.id} className="overflow-hidden">
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
                    order.type === 'fuel' ? 'bg-brand-orange/10 text-brand-orange' : 'bg-brand-blue/10 text-brand-blue'
                  }`}>
                    {order.type === 'fuel' ? <Fuel className="h-6 w-6" /> : <Wrench className="h-6 w-6" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{
                      order.type === 'fuel' ? 'Fuel Delivery' : 'Car Service'
                    }</h4>
                    <p className="text-sm text-gray-500">{order.description}</p>
                    <p className="text-sm text-gray-500">{order.address}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="font-semibold">{order.amount}</span>
                      <div className="space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleReorder(order.type)}
                        >
                          Reorder
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-brand-blue"
                          onClick={() => handleTrackOrder(order.id)}
                        >
                          View Details <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderHistoryTab;
