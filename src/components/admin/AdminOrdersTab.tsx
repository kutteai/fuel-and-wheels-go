
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Search, Filter, RefreshCw, Edit, Trash2, Eye, MoreVertical, Check, X, Calendar } from 'lucide-react';

const AdminOrdersTab = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [orderStatus, setOrderStatus] = useState('all');
  
  // Demo order data
  const orders = [
    { id: "ORD-7890", customer: "John Smith", type: "Fuel Delivery", amount: "₦45,000", status: "completed", date: "2025-04-11", phone: "07012345678", location: "Lekki, Lagos" },
    { id: "ORD-7889", customer: "Alice Johnson", type: "Car Service", amount: "₦38,500", status: "processing", date: "2025-04-11", phone: "08023456789", location: "Victoria Island, Lagos" },
    { id: "ORD-7888", customer: "David Wilson", type: "Generator Service", amount: "₦65,000", status: "pending", date: "2025-04-10", phone: "09034567890", location: "Ikeja, Lagos" },
    { id: "ORD-7887", customer: "Sarah Brown", type: "Fuel Delivery", amount: "₦22,000", status: "completed", date: "2025-04-10", phone: "07045678901", location: "Ajah, Lagos" },
    { id: "ORD-7886", customer: "Michael Lee", type: "Car Service", amount: "₦42,000", status: "cancelled", date: "2025-04-09", phone: "08056789012", location: "Ikoyi, Lagos" },
    { id: "ORD-7885", customer: "Jennifer Lopez", type: "Fuel Delivery", amount: "₦32,000", status: "completed", date: "2025-04-09", phone: "09067890123", location: "Surulere, Lagos" },
    { id: "ORD-7884", customer: "Robert Williams", type: "Generator Service", amount: "₦78,000", status: "pending", date: "2025-04-08", phone: "07078901234", location: "Yaba, Lagos" },
    { id: "ORD-7883", customer: "Lisa Moore", type: "Car Service", amount: "₦55,000", status: "processing", date: "2025-04-08", phone: "08089012345", location: "Gbagada, Lagos" },
    { id: "ORD-7882", customer: "Daniel Taylor", type: "Fuel Delivery", amount: "₦18,000", status: "completed", date: "2025-04-07", phone: "09090123456", location: "Apapa, Lagos" },
    { id: "ORD-7881", customer: "Jessica White", type: "Car Service", amount: "₦45,000", status: "cancelled", date: "2025-04-07", phone: "07001234567", location: "Maryland, Lagos" }
  ];
  
  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = orderStatus === 'all' || order.status === orderStatus;
    
    return matchesSearch && matchesStatus;
  });
  
  const handleUpdateStatus = (orderId: string, newStatus: string) => {
    toast({
      title: "Order Status Updated",
      description: `Order ${orderId} has been marked as ${newStatus}.`,
    });
  };
  
  const handleDeleteOrder = (orderId: string) => {
    toast({
      title: "Order Deleted",
      description: `Order ${orderId} has been deleted.`,
      variant: "destructive",
    });
  };
  
  const handleViewOrder = (orderId: string) => {
    toast({
      title: "Viewing Order Details",
      description: `Viewing details for Order ${orderId}`,
    });
  };
  
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Orders</h2>
        <Button>
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>
      
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                className="pl-9" 
                placeholder="Search orders by ID, customer or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Tabs 
                defaultValue="all" 
                value={orderStatus} 
                onValueChange={setOrderStatus}
                className="w-fit"
              >
                <TabsList className="grid grid-cols-5 w-fit">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="processing">Processing</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-xs text-gray-500 border-b">
                <tr>
                  <th className="font-medium p-3 text-left">ID</th>
                  <th className="font-medium p-3 text-left">Customer</th>
                  <th className="font-medium p-3 text-left">Type</th>
                  <th className="font-medium p-3 text-left">Amount</th>
                  <th className="font-medium p-3 text-left">Status</th>
                  <th className="font-medium p-3 text-left">Date</th>
                  <th className="font-medium p-3 text-left">Location</th>
                  <th className="font-medium p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {filteredOrders.map((order, index) => (
                  <tr key={index} className="border-b last:border-b-0 hover:bg-gray-50">
                    <td className="p-3">{order.id}</td>
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-xs text-gray-500">{order.phone}</p>
                      </div>
                    </td>
                    <td className="p-3">{order.type}</td>
                    <td className="p-3">{order.amount}</td>
                    <td className="p-3">
                      <Badge variant={
                        order.status === "completed" ? "secondary" : 
                        order.status === "processing" ? "default" :
                        order.status === "pending" ? "outline" : "destructive"
                      } className={
                        order.status === "completed" ? "bg-green-100 text-green-800" : 
                        order.status === "processing" ? "bg-blue-100 text-blue-800" :
                        order.status === "pending" ? "bg-orange-100 text-orange-800" : "bg-red-100 text-red-800"
                      }>
                        {order.status}
                      </Badge>
                    </td>
                    <td className="p-3">{order.date}</td>
                    <td className="p-3">{order.location}</td>
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="h-8 w-8"
                          onClick={() => handleViewOrder(order.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        {order.status !== "completed" && order.status !== "cancelled" && (
                          <Button 
                            size="icon" 
                            variant="ghost" 
                            className="h-8 w-8 text-green-600"
                            onClick={() => handleUpdateStatus(order.id, "completed")}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                        {order.status !== "cancelled" && (
                          <Button 
                            size="icon" 
                            variant="ghost" 
                            className="h-8 w-8 text-red-500"
                            onClick={() => handleUpdateStatus(order.id, "cancelled")}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="h-8 w-8 text-red-500"
                          onClick={() => handleDeleteOrder(order.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredOrders.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No orders found matching your filters.</p>
            </div>
          )}
          
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-gray-500">
              Showing {filteredOrders.length} of {orders.length} orders
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm" disabled>Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AdminOrdersTab;
