
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  Fuel,
  History,
  MapPin,
  CreditCard,
  User,
  Bell,
  Settings,
  ExternalLink,
  ChevronRight,
  Clock,
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock data for the dashboard - in a real app, this would come from the backend
  const mockData = {
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+234 800 123 4567",
      subscription: "Pro Plan",
      subscriptionEnd: "May 10, 2025",
      remainingFuel: 2,
      remainingServices: 1,
    },
    recentOrders: [
      {
        id: "FW-2025-04-1001",
        type: "fuel",
        status: "completed",
        date: "April 9, 2025",
        details: "Petrol - 50L",
        amount: "₦42,000"
      },
      {
        id: "FW-2025-03-0934",
        type: "service",
        status: "completed",
        date: "March 27, 2025",
        details: "Oil Change, Car Wash",
        amount: "₦17,000"
      },
      {
        id: "FW-2025-03-0857",
        type: "fuel",
        status: "completed",
        date: "March 15, 2025",
        details: "Petrol - 70L",
        amount: "₦58,800"
      }
    ],
    activeOrders: [
      {
        id: "FW-2025-04-1234",
        type: "fuel",
        status: "in-progress",
        date: "April 11, 2025",
        details: "Petrol - 50L",
        estimatedDelivery: "Today, 3:30 PM"
      }
    ],
    savedLocations: [
      {
        id: 1,
        name: "Home",
        address: "15 Idowu Martins St, Victoria Island, Lagos",
        default: true
      },
      {
        id: 2,
        name: "Office",
        address: "24 Broad Street, Lagos Island, Lagos",
        default: false
      }
    ],
    savedVehicles: [
      {
        id: 1,
        name: "Toyota Camry",
        details: "2019, Black, ABC 123 XY",
        default: true
      },
      {
        id: 2,
        name: "Honda Generator",
        details: "5KVA, Home Backup",
        default: false
      }
    ],
    upcomingMaintenance: [
      {
        id: 1,
        type: "Oil Change",
        vehicle: "Toyota Camry",
        due: "In 2 weeks",
        suggested: "April 25, 2025"
      }
    ]
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
              <p className="text-gray-600">Manage your account, track orders, and more</p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <Link to="/fuel">
                <Button className="bg-brand-red hover:bg-red-700">Order Fuel</Button>
              </Link>
              <Link to="/service">
                <Button className="bg-brand-blue hover:bg-blue-800">Book Service</Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="card-shadow">
                <CardContent className="p-0">
                  <div className="p-6 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="h-12 w-12 rounded-full bg-brand-blue flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{mockData.user.name}</h3>
                        <p className="text-sm text-gray-500">{mockData.user.email}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Badge className="bg-brand-blue">{mockData.user.subscription}</Badge>
                      <p className="text-sm text-gray-500 mt-1">
                        Renews on {mockData.user.subscriptionEnd}
                      </p>
                    </div>
                  </div>
                  
                  <nav className="p-2">
                    <ul className="space-y-1">
                      <li>
                        <button
                          className={`w-full flex items-center space-x-3 p-3 rounded-md text-left ${
                            activeTab === "overview" 
                              ? "bg-brand-blue text-white" 
                              : "hover:bg-gray-100 text-gray-700"
                          }`}
                          onClick={() => setActiveTab("overview")}
                        >
                          <History className="h-5 w-5" />
                          <span>Overview</span>
                        </button>
                      </li>
                      <li>
                        <button
                          className={`w-full flex items-center space-x-3 p-3 rounded-md text-left ${
                            activeTab === "orders" 
                              ? "bg-brand-blue text-white" 
                              : "hover:bg-gray-100 text-gray-700"
                          }`}
                          onClick={() => setActiveTab("orders")}
                        >
                          <History className="h-5 w-5" />
                          <span>Order History</span>
                        </button>
                      </li>
                      <li>
                        <button
                          className={`w-full flex items-center space-x-3 p-3 rounded-md text-left ${
                            activeTab === "vehicles" 
                              ? "bg-brand-blue text-white" 
                              : "hover:bg-gray-100 text-gray-700"
                          }`}
                          onClick={() => setActiveTab("vehicles")}
                        >
                          <Car className="h-5 w-5" />
                          <span>My Vehicles</span>
                        </button>
                      </li>
                      <li>
                        <button
                          className={`w-full flex items-center space-x-3 p-3 rounded-md text-left ${
                            activeTab === "locations" 
                              ? "bg-brand-blue text-white" 
                              : "hover:bg-gray-100 text-gray-700"
                          }`}
                          onClick={() => setActiveTab("locations")}
                        >
                          <MapPin className="h-5 w-5" />
                          <span>Saved Locations</span>
                        </button>
                      </li>
                      <li>
                        <button
                          className={`w-full flex items-center space-x-3 p-3 rounded-md text-left ${
                            activeTab === "payments" 
                              ? "bg-brand-blue text-white" 
                              : "hover:bg-gray-100 text-gray-700"
                          }`}
                          onClick={() => setActiveTab("payments")}
                        >
                          <CreditCard className="h-5 w-5" />
                          <span>Payment Methods</span>
                        </button>
                      </li>
                      <li>
                        <button
                          className={`w-full flex items-center space-x-3 p-3 rounded-md text-left ${
                            activeTab === "notifications" 
                              ? "bg-brand-blue text-white" 
                              : "hover:bg-gray-100 text-gray-700"
                          }`}
                          onClick={() => setActiveTab("notifications")}
                        >
                          <Bell className="h-5 w-5" />
                          <span>Notifications</span>
                        </button>
                      </li>
                      <li>
                        <button
                          className={`w-full flex items-center space-x-3 p-3 rounded-md text-left ${
                            activeTab === "settings" 
                              ? "bg-brand-blue text-white" 
                              : "hover:bg-gray-100 text-gray-700"
                          }`}
                          onClick={() => setActiveTab("settings")}
                        >
                          <Settings className="h-5 w-5" />
                          <span>Account Settings</span>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  {/* Subscription Overview */}
                  <Card className="card-shadow">
                    <CardHeader className="pb-0">
                      <CardTitle>Subscription Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border rounded-md p-4">
                          <div className="text-sm text-gray-500 mb-1">Current Plan</div>
                          <div className="font-semibold text-lg flex items-center">
                            <Shield className="h-5 w-5 text-brand-blue mr-2" />
                            {mockData.user.subscription}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            Renews on {mockData.user.subscriptionEnd}
                          </div>
                          <Link to="/subscription" className="text-sm text-brand-blue flex items-center mt-2">
                            Manage subscription
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                        
                        <div className="border rounded-md p-4">
                          <div className="text-sm text-gray-500 mb-1">Fuel Deliveries Remaining</div>
                          <div className="font-semibold text-lg flex items-center">
                            <Fuel className="h-5 w-5 text-brand-blue mr-2" />
                            {mockData.user.remainingFuel} deliveries
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            Resets on {mockData.user.subscriptionEnd}
                          </div>
                          <Link to="/fuel" className="text-sm text-brand-blue flex items-center mt-2">
                            Order fuel
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                        
                        <div className="border rounded-md p-4">
                          <div className="text-sm text-gray-500 mb-1">Services Remaining</div>
                          <div className="font-semibold text-lg flex items-center">
                            <Wrench className="h-5 w-5 text-brand-blue mr-2" />
                            {mockData.user.remainingServices} services
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            Resets on {mockData.user.subscriptionEnd}
                          </div>
                          <Link to="/service" className="text-sm text-brand-blue flex items-center mt-2">
                            Book service
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Active Orders */}
                  <Card className="card-shadow">
                    <CardHeader className="pb-0">
                      <CardTitle>Active Orders</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      {mockData.activeOrders.length > 0 ? (
                        <div className="space-y-4">
                          {mockData.activeOrders.map((order) => (
                            <div key={order.id} className="border rounded-md p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="flex items-center">
                                    {order.type === 'fuel' ? (
                                      <Fuel className="h-5 w-5 text-brand-blue mr-2" />
                                    ) : (
                                      <Wrench className="h-5 w-5 text-brand-red mr-2" />
                                    )}
                                    <div className="font-semibold">
                                      {order.type === 'fuel' ? 'Fuel Delivery' : 'Car Service'}
                                    </div>
                                  </div>
                                  <div className="text-sm text-gray-500 mt-1">
                                    Order #{order.id}
                                  </div>
                                  <div className="text-sm font-medium mt-2">
                                    {order.details}
                                  </div>
                                  <div className="flex items-center text-sm text-gray-500 mt-1">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {order.estimatedDelivery}
                                  </div>
                                </div>
                                <div>
                                  <Badge className="bg-yellow-400 text-yellow-900">
                                    {order.status === 'in-progress' ? 'In Progress' : order.status}
                                  </Badge>
                                </div>
                              </div>
                              <div className="mt-4">
                                <Link to={`/track?id=${order.id}`}>
                                  <Button variant="outline" className="w-full">
                                    Track Order
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6">
                          <p className="text-gray-500">No active orders</p>
                          <div className="flex justify-center space-x-4 mt-4">
                            <Link to="/fuel">
                              <Button variant="outline" size="sm">Order Fuel</Button>
                            </Link>
                            <Link to="/service">
                              <Button variant="outline" size="sm">Book Service</Button>
                            </Link>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  
                  {/* Recent Orders */}
                  <Card className="card-shadow">
                    <CardHeader className="pb-0">
                      <CardTitle>Recent Orders</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        {mockData.recentOrders.slice(0, 3).map((order) => (
                          <div key={order.id} className="border rounded-md p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center">
                                  {order.type === 'fuel' ? (
                                    <Fuel className="h-5 w-5 text-brand-blue mr-2" />
                                  ) : (
                                    <Wrench className="h-5 w-5 text-brand-red mr-2" />
                                  )}
                                  <div className="font-semibold">
                                    {order.type === 'fuel' ? 'Fuel Delivery' : 'Car Service'}
                                  </div>
                                </div>
                                <div className="text-sm text-gray-500 mt-1">
                                  Order #{order.id} • {order.date}
                                </div>
                                <div className="text-sm font-medium mt-2">
                                  {order.details}
                                </div>
                              </div>
                              <div className="text-right">
                                <Badge className="bg-green-500 text-white">
                                  {order.status}
                                </Badge>
                                <div className="text-sm font-semibold mt-2">
                                  {order.amount}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 text-center">
                        <Button 
                          variant="outline" 
                          className="text-sm"
                          onClick={() => setActiveTab("orders")}
                        >
                          View All Orders
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Upcoming Maintenance */}
                  <Card className="card-shadow">
                    <CardHeader className="pb-0">
                      <CardTitle>Upcoming Maintenance</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      {mockData.upcomingMaintenance.length > 0 ? (
                        <div className="space-y-4">
                          {mockData.upcomingMaintenance.map((maintenance) => (
                            <div key={maintenance.id} className="border rounded-md p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="flex items-center">
                                    <Wrench className="h-5 w-5 text-brand-blue mr-2" />
                                    <div className="font-semibold">
                                      {maintenance.type}
                                    </div>
                                  </div>
                                  <div className="text-sm text-gray-500 mt-1">
                                    {maintenance.vehicle}
                                  </div>
                                  <div className="flex items-center text-sm mt-2">
                                    <Clock className="h-4 w-4 mr-1 text-amber-500" />
                                    <span className="text-amber-500 font-medium">Due {maintenance.due}</span>
                                  </div>
                                </div>
                                <div>
                                  <Link to="/service">
                                    <Button size="sm">Schedule Now</Button>
                                  </Link>
                                  <div className="text-sm text-gray-500 mt-2 text-right">
                                    Suggested: {maintenance.suggested}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6">
                          <p className="text-gray-500">No upcoming maintenance scheduled</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}
              
              {activeTab === "orders" && (
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="all">
                      <TabsList className="mb-6">
                        <TabsTrigger value="all">All Orders</TabsTrigger>
                        <TabsTrigger value="fuel">Fuel Deliveries</TabsTrigger>
                        <TabsTrigger value="service">Car Services</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="all">
                        <div className="space-y-4">
                          {mockData.activeOrders.concat(mockData.recentOrders).map((order) => (
                            <div key={order.id} className="border rounded-md p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="flex items-center">
                                    {order.type === 'fuel' ? (
                                      <Fuel className="h-5 w-5 text-brand-blue mr-2" />
                                    ) : (
                                      <Wrench className="h-5 w-5 text-brand-red mr-2" />
                                    )}
                                    <div className="font-semibold">
                                      {order.type === 'fuel' ? 'Fuel Delivery' : 'Car Service'}
                                    </div>
                                  </div>
                                  <div className="text-sm text-gray-500 mt-1">
                                    Order #{order.id} • {order.date}
                                  </div>
                                  <div className="text-sm font-medium mt-2">
                                    {order.details}
                                  </div>
                                  {'estimatedDelivery' in order && (
                                    <div className="flex items-center text-sm text-gray-500 mt-1">
                                      <Clock className="h-4 w-4 mr-1" />
                                      {order.estimatedDelivery}
                                    </div>
                                  )}
                                </div>
                                <div className="text-right">
                                  <Badge className={`${
                                    order.status === 'completed' ? 'bg-green-500 text-white' :
                                    order.status === 'in-progress' ? 'bg-yellow-400 text-yellow-900' :
                                    'bg-blue-500 text-white'
                                  }`}>
                                    {order.status === 'completed' ? 'Completed' : 
                                     order.status === 'in-progress' ? 'In Progress' : 
                                     order.status}
                                  </Badge>
                                  {'amount' in order && (
                                    <div className="text-sm font-semibold mt-2">
                                      {order.amount}
                                    </div>
                                  )}
                                </div>
                              </div>
                              {'status' in order && order.status !== 'completed' && (
                                <div className="mt-4">
                                  <Link to={`/track?id=${order.id}`}>
                                    <Button variant="outline" size="sm" className="w-full">
                                      Track Order
                                    </Button>
                                  </Link>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="fuel">
                        <div className="space-y-4">
                          {mockData.activeOrders.concat(mockData.recentOrders)
                            .filter(order => order.type === 'fuel')
                            .map((order) => (
                              <div key={order.id} className="border rounded-md p-4">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="flex items-center">
                                      <Fuel className="h-5 w-5 text-brand-blue mr-2" />
                                      <div className="font-semibold">Fuel Delivery</div>
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">
                                      Order #{order.id} • {order.date}
                                    </div>
                                    <div className="text-sm font-medium mt-2">
                                      {order.details}
                                    </div>
                                    {'estimatedDelivery' in order && (
                                      <div className="flex items-center text-sm text-gray-500 mt-1">
                                        <Clock className="h-4 w-4 mr-1" />
                                        {order.estimatedDelivery}
                                      </div>
                                    )}
                                  </div>
                                  <div className="text-right">
                                    <Badge className={`${
                                      order.status === 'completed' ? 'bg-green-500 text-white' :
                                      order.status === 'in-progress' ? 'bg-yellow-400 text-yellow-900' :
                                      'bg-blue-500 text-white'
                                    }`}>
                                      {order.status === 'completed' ? 'Completed' : 
                                       order.status === 'in-progress' ? 'In Progress' : 
                                       order.status}
                                    </Badge>
                                    {'amount' in order && (
                                      <div className="text-sm font-semibold mt-2">
                                        {order.amount}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {'status' in order && order.status !== 'completed' && (
                                  <div className="mt-4">
                                    <Link to={`/track?id=${order.id}`}>
                                      <Button variant="outline" size="sm" className="w-full">
                                        Track Order
                                      </Button>
                                    </Link>
                                  </div>
                                )}
                              </div>
                            ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="service">
                        <div className="space-y-4">
                          {mockData.activeOrders.concat(mockData.recentOrders)
                            .filter(order => order.type === 'service')
                            .map((order) => (
                              <div key={order.id} className="border rounded-md p-4">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="flex items-center">
                                      <Wrench className="h-5 w-5 text-brand-red mr-2" />
                                      <div className="font-semibold">Car Service</div>
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">
                                      Order #{order.id} • {order.date}
                                    </div>
                                    <div className="text-sm font-medium mt-2">
                                      {order.details}
                                    </div>
                                    {'estimatedDelivery' in order && (
                                      <div className="flex items-center text-sm text-gray-500 mt-1">
                                        <Clock className="h-4 w-4 mr-1" />
                                        {order.estimatedDelivery}
                                      </div>
                                    )}
                                  </div>
                                  <div className="text-right">
                                    <Badge className={`${
                                      order.status === 'completed' ? 'bg-green-500 text-white' :
                                      order.status === 'in-progress' ? 'bg-yellow-400 text-yellow-900' :
                                      'bg-blue-500 text-white'
                                    }`}>
                                      {order.status === 'completed' ? 'Completed' : 
                                       order.status === 'in-progress' ? 'In Progress' : 
                                       order.status}
                                    </Badge>
                                    {'amount' in order && (
                                      <div className="text-sm font-semibold mt-2">
                                        {order.amount}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {'status' in order && order.status !== 'completed' && (
                                  <div className="mt-4">
                                    <Link to={`/track?id=${order.id}`}>
                                      <Button variant="outline" size="sm" className="w-full">
                                        Track Order
                                      </Button>
                                    </Link>
                                  </div>
                                )}
                              </div>
                            ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === "vehicles" && (
                <Card className="card-shadow">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>My Vehicles</CardTitle>
                    <Button size="sm">
                      Add Vehicle
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockData.savedVehicles.map((vehicle) => (
                        <div key={vehicle.id} className="border rounded-md p-4">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                                <Car className="h-5 w-5 text-gray-600" />
                              </div>
                              <div>
                                <div className="font-semibold flex items-center">
                                  {vehicle.name}
                                  {vehicle.default && (
                                    <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">Default</Badge>
                                  )}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">
                                  {vehicle.details}
                                </div>
                              </div>
                            </div>
                            <div>
                              <Button variant="ghost" size="icon">
                                <Settings className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === "locations" && (
                <Card className="card-shadow">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Saved Locations</CardTitle>
                    <Button size="sm">
                      Add Location
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockData.savedLocations.map((location) => (
                        <div key={location.id} className="border rounded-md p-4">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                                <MapPin className="h-5 w-5 text-gray-600" />
                              </div>
                              <div>
                                <div className="font-semibold flex items-center">
                                  {location.name}
                                  {location.default && (
                                    <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">Default</Badge>
                                  )}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">
                                  {location.address}
                                </div>
                              </div>
                            </div>
                            <div>
                              <Button variant="ghost" size="icon">
                                <Settings className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === "payments" && (
                <Card className="card-shadow">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Payment Methods</CardTitle>
                    <Button size="sm">
                      Add Payment Method
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <p className="text-gray-500">No payment methods added yet</p>
                      <p className="text-gray-500 text-sm mt-2">
                        Add a payment method to streamline your checkout process
                      </p>
                      <Button className="mt-4">Add Payment Method</Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === "notifications" && (
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <p className="text-gray-500">No notifications at this time</p>
                      <p className="text-gray-500 text-sm mt-2">
                        We'll notify you about order updates, maintenance reminders, and special offers
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === "settings" && (
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-700">Full Name</label>
                            <input 
                              type="text" 
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                              value={mockData.user.name}
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700">Email Address</label>
                            <input 
                              type="email" 
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                              value={mockData.user.email}
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700">Phone Number</label>
                            <input 
                              type="tel" 
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" 
                              value={mockData.user.phone}
                              readOnly
                            />
                          </div>
                        </div>
                        <Button className="mt-4">
                          Edit Profile
                        </Button>
                      </div>
                      
                      <hr />
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">Order Updates</h4>
                              <p className="text-sm text-gray-500">Receive updates about your fuel and service orders</p>
                            </div>
                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                              <input 
                                type="checkbox" 
                                id="toggle-order" 
                                name="toggle-order" 
                                className="sr-only"
                                defaultChecked
                              />
                              <label 
                                htmlFor="toggle-order" 
                                className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                              >
                                <span className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform checked:translate-x-full"></span>
                              </label>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">Maintenance Reminders</h4>
                              <p className="text-sm text-gray-500">Get reminded when your vehicle needs maintenance</p>
                            </div>
                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                              <input 
                                type="checkbox" 
                                id="toggle-maintenance" 
                                name="toggle-maintenance" 
                                className="sr-only"
                                defaultChecked
                              />
                              <label 
                                htmlFor="toggle-maintenance" 
                                className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                              >
                                <span className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform checked:translate-x-full"></span>
                              </label>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">Promotions & Offers</h4>
                              <p className="text-sm text-gray-500">Receive special offers and promotions</p>
                            </div>
                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                              <input 
                                type="checkbox" 
                                id="toggle-promo" 
                                name="toggle-promo" 
                                className="sr-only"
                                defaultChecked
                              />
                              <label 
                                htmlFor="toggle-promo" 
                                className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                              >
                                <span className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform checked:translate-x-full"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <Button className="mt-4" variant="outline">
                          Save Preferences
                        </Button>
                      </div>
                      
                      <hr />
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Account Security</h3>
                        <Button variant="outline">
                          Change Password
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
