
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  BarChart3, 
  Users, 
  Package, 
  FileText, 
  Settings, 
  Bell, 
  LogOut, 
  Home, 
  Plus,
  RefreshCw,
  Filter,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Check,
  X,
  Shield,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

// Import admin dashboard components
import AdminOrdersTab from '@/components/admin/AdminOrdersTab';
import AdminUsersTab from '@/components/admin/AdminUsersTab';
import AdminBlogTab from '@/components/admin/AdminBlogTab';
import AdminPlansTab from '@/components/admin/AdminPlansTab';
import AdminSettingsTab from '@/components/admin/AdminSettingsTab';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/login');
  };

  // Demo data
  const metrics = {
    users: { count: 1245, change: 12.5, up: true },
    orders: { count: 567, change: 8.3, up: true },
    revenue: { count: "₦9.8M", change: 15.2, up: true },
    visitors: { count: 3854, change: 2.1, up: false }
  };

  const recentOrders = [
    { id: "ORD-7890", customer: "John Smith", type: "Fuel Delivery", amount: "₦45,000", status: "completed", date: "2025-04-11" },
    { id: "ORD-7889", customer: "Alice Johnson", type: "Car Service", amount: "₦38,500", status: "processing", date: "2025-04-11" },
    { id: "ORD-7888", customer: "David Wilson", type: "Generator Service", amount: "₦65,000", status: "pending", date: "2025-04-10" },
    { id: "ORD-7887", customer: "Sarah Brown", type: "Fuel Delivery", amount: "₦22,000", status: "completed", date: "2025-04-10" },
    { id: "ORD-7886", customer: "Michael Lee", type: "Car Service", amount: "₦42,000", status: "cancelled", date: "2025-04-09" }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full shadow-sm z-10">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center p-6 border-b">
            <h1 className="text-xl font-bold text-brand-blue">Creskiosk Admin</h1>
          </div>
          
          <ScrollArea className="flex-1 py-4">
            <div className="px-3 space-y-1">
              <Button 
                variant={activeTab === "overview" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => handleTabChange("overview")}
              >
                <Home className="mr-2 h-5 w-5" />
                <span>Dashboard</span>
              </Button>
              
              <Button 
                variant={activeTab === "orders" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => handleTabChange("orders")}
              >
                <Package className="mr-2 h-5 w-5" />
                <span>Orders</span>
              </Button>
              
              <Button 
                variant={activeTab === "users" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => handleTabChange("users")}
              >
                <Users className="mr-2 h-5 w-5" />
                <span>Users</span>
              </Button>
              
              <Button 
                variant={activeTab === "blog" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => handleTabChange("blog")}
              >
                <FileText className="mr-2 h-5 w-5" />
                <span>Blog</span>
              </Button>
              
              <Button 
                variant={activeTab === "plans" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => handleTabChange("plans")}
              >
                <Shield className="mr-2 h-5 w-5" />
                <span>Subscription Plans</span>
              </Button>
              
              <Button 
                variant={activeTab === "settings" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => handleTabChange("settings")}
              >
                <Settings className="mr-2 h-5 w-5" />
                <span>Settings</span>
              </Button>
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t">
            <div className="flex items-center space-x-3 mb-3">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-500">admin@creskiosk.com</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-red-500" 
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-5 w-5" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </aside>
      
      {/* Main content */}
      <main className="pl-64 w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            
            <div className="flex items-center space-x-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-0">
                  <div className="p-3 border-b">
                    <h3 className="font-medium">Notifications</h3>
                  </div>
                  <div className="p-1">
                    <div className="py-2 px-3 hover:bg-gray-100 rounded-md cursor-pointer">
                      <div className="flex items-start">
                        <span className="bg-blue-100 p-1 rounded mr-2">
                          <Package className="h-4 w-4 text-blue-600" />
                        </span>
                        <div>
                          <p className="text-sm font-medium">New order received</p>
                          <p className="text-xs text-gray-500">ORD-7890 - John Smith</p>
                          <p className="text-xs text-gray-400">10 minutes ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-2 px-3 hover:bg-gray-100 rounded-md cursor-pointer">
                      <div className="flex items-start">
                        <span className="bg-red-100 p-1 rounded mr-2">
                          <AlertCircle className="h-4 w-4 text-red-600" />
                        </span>
                        <div>
                          <p className="text-sm font-medium">Order cancelled</p>
                          <p className="text-xs text-gray-500">ORD-7886 - Michael Lee</p>
                          <p className="text-xs text-gray-400">2 hours ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 border-t text-center">
                    <Button variant="ghost" size="sm">View all notifications</Button>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <Button onClick={() => navigate('/')}>View Site</Button>
            </div>
          </div>
          
          {/* Content based on active tab */}
          {activeTab === "overview" && (
            <>
              {/* Metrics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {/* Total Users */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Total Users</p>
                        <div className="flex items-baseline mt-1">
                          <h3 className="text-2xl font-bold">{metrics.users.count}</h3>
                          <span className={`ml-2 text-sm font-medium ${metrics.users.up ? 'text-green-600' : 'text-red-600'}`}>
                            {metrics.users.up ? '+' : '-'}{metrics.users.change}%
                          </span>
                        </div>
                      </div>
                      <div className={`p-2 rounded-full ${metrics.users.up ? 'bg-green-100' : 'bg-red-100'}`}>
                        {metrics.users.up ? (
                          <TrendingUp className="h-5 w-5 text-green-600" />
                        ) : (
                          <TrendingDown className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center text-sm">
                      <span className="text-gray-500">vs last month</span>
                      <Button variant="ghost" size="sm" className="text-brand-blue p-0 h-auto">
                        <span>View</span>
                        <ArrowUpRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Total Orders */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Total Orders</p>
                        <div className="flex items-baseline mt-1">
                          <h3 className="text-2xl font-bold">{metrics.orders.count}</h3>
                          <span className={`ml-2 text-sm font-medium ${metrics.orders.up ? 'text-green-600' : 'text-red-600'}`}>
                            {metrics.orders.up ? '+' : '-'}{metrics.orders.change}%
                          </span>
                        </div>
                      </div>
                      <div className={`p-2 rounded-full ${metrics.orders.up ? 'bg-green-100' : 'bg-red-100'}`}>
                        {metrics.orders.up ? (
                          <TrendingUp className="h-5 w-5 text-green-600" />
                        ) : (
                          <TrendingDown className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center text-sm">
                      <span className="text-gray-500">vs last month</span>
                      <Button variant="ghost" size="sm" className="text-brand-blue p-0 h-auto">
                        <span>View</span>
                        <ArrowUpRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Revenue */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Revenue</p>
                        <div className="flex items-baseline mt-1">
                          <h3 className="text-2xl font-bold">{metrics.revenue.count}</h3>
                          <span className={`ml-2 text-sm font-medium ${metrics.revenue.up ? 'text-green-600' : 'text-red-600'}`}>
                            {metrics.revenue.up ? '+' : '-'}{metrics.revenue.change}%
                          </span>
                        </div>
                      </div>
                      <div className={`p-2 rounded-full ${metrics.revenue.up ? 'bg-green-100' : 'bg-red-100'}`}>
                        {metrics.revenue.up ? (
                          <TrendingUp className="h-5 w-5 text-green-600" />
                        ) : (
                          <TrendingDown className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center text-sm">
                      <span className="text-gray-500">vs last month</span>
                      <Button variant="ghost" size="sm" className="text-brand-blue p-0 h-auto">
                        <span>View</span>
                        <ArrowUpRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Visitors */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Visitors</p>
                        <div className="flex items-baseline mt-1">
                          <h3 className="text-2xl font-bold">{metrics.visitors.count}</h3>
                          <span className={`ml-2 text-sm font-medium ${metrics.visitors.up ? 'text-green-600' : 'text-red-600'}`}>
                            {metrics.visitors.up ? '+' : '-'}{metrics.visitors.change}%
                          </span>
                        </div>
                      </div>
                      <div className={`p-2 rounded-full ${metrics.visitors.up ? 'bg-green-100' : 'bg-red-100'}`}>
                        {metrics.visitors.up ? (
                          <TrendingUp className="h-5 w-5 text-green-600" />
                        ) : (
                          <TrendingDown className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center text-sm">
                      <span className="text-gray-500">vs last month</span>
                      <Button variant="ghost" size="sm" className="text-brand-blue p-0 h-auto">
                        <span>View</span>
                        <ArrowUpRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Recent Orders */}
              <Card className="mb-6">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Orders</CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleTabChange("orders")}
                  >
                    View All
                  </Button>
                </CardHeader>
                <CardContent>
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
                          <th className="font-medium p-3 text-left">Action</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        {recentOrders.map((order, index) => (
                          <tr key={index} className="border-b last:border-b-0 hover:bg-gray-50">
                            <td className="p-3">{order.id}</td>
                            <td className="p-3">{order.customer}</td>
                            <td className="p-3">{order.type}</td>
                            <td className="p-3">{order.amount}</td>
                            <td className="p-3">
                              <Badge variant={
                                order.status === "completed" ? "success" : 
                                order.status === "processing" ? "default" :
                                order.status === "pending" ? "secondary" : "destructive"
                              } className={
                                order.status === "completed" ? "bg-green-100 text-green-800" : 
                                order.status === "processing" ? "bg-blue-100 text-blue-800" :
                                order.status === "pending" ? "bg-orange-100 text-orange-800" : "bg-red-100 text-red-800"
                              }>
                                {order.status}
                              </Badge>
                            </td>
                            <td className="p-3">{order.date}</td>
                            <td className="p-3">
                              <div className="flex space-x-2">
                                <Button size="icon" variant="ghost" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button size="icon" variant="ghost" className="h-8 w-8 text-red-500">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              {/* Overview Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-md">Service Type Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Fuel Delivery</span>
                          <span>45%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-brand-blue h-2 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Car Service</span>
                          <span>30%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-brand-green h-2 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Generator Service</span>
                          <span>25%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-brand-orange h-2 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Upcoming Tasks */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-md">Upcoming Tasks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="mr-3 p-1">
                          <Calendar className="h-5 w-5 text-brand-blue" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Update subscription plans</p>
                          <p className="text-xs text-gray-500">Tomorrow at 10:00 AM</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-3 p-1">
                          <MessageSquare className="h-5 w-5 text-brand-green" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Customer feedback review</p>
                          <p className="text-xs text-gray-500">April 14, 2025 at 1:00 PM</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-3 p-1">
                          <FileText className="h-5 w-5 text-brand-orange" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Prepare monthly report</p>
                          <p className="text-xs text-gray-500">April 30, 2025</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Recent Activities */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-md">Recent Activities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="mr-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-blue-100 text-blue-800">AD</AvatarFallback>
                          </Avatar>
                        </div>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">Admin</span> updated subscription prices
                          </p>
                          <p className="text-xs text-gray-500">20 minutes ago</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-green-100 text-green-800">AD</AvatarFallback>
                          </Avatar>
                        </div>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">Admin</span> published a new blog post
                          </p>
                          <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-purple-100 text-purple-800">AD</AvatarFallback>
                          </Avatar>
                        </div>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">Admin</span> updated order status for ORD-7890
                          </p>
                          <p className="text-xs text-gray-500">3 hours ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
          
          {activeTab === "orders" && <AdminOrdersTab />}
          {activeTab === "users" && <AdminUsersTab />}
          {activeTab === "blog" && <AdminBlogTab />}
          {activeTab === "plans" && <AdminPlansTab />}
          {activeTab === "settings" && <AdminSettingsTab />}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
