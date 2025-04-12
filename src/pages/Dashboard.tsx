import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Wrench, 
  Car, 
  User, 
  CreditCard, 
  History, 
  Settings, 
  LogOut, 
  Home, 
  MapPin,
  AlertCircle,
  Menu,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from "@/components/ui/use-toast";
import ProfileTab from '@/components/dashboard/ProfileTab';
import VehiclesTab from '@/components/dashboard/VehiclesTab';
import LocationsTab from '@/components/dashboard/LocationsTab';
import PaymentTab from '@/components/dashboard/PaymentTab';
import SubscriptionTab from '@/components/dashboard/SubscriptionTab';
import OrderHistoryTab from '@/components/dashboard/OrderHistoryTab';
import SettingsTab from '@/components/dashboard/SettingsTab';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarHeader
} from "@/components/ui/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { toast } = useToast();
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsSheetOpen(false); // Close the sheet when tab changes
  };
  
  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    setIsSheetOpen(false); // Close the sheet when logging out
  };

  // Define menu items
  const menuItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "profile", label: "Profile", icon: User },
    { id: "vehicles", label: "My Vehicles", icon: Car },
    { id: "locations", label: "Saved Locations", icon: MapPin },
    { id: "payment", label: "Payment Methods", icon: CreditCard },
    { id: "subscription", label: "Subscription", icon: Shield },
    { id: "history", label: "Order History", icon: History },
    { id: "settings", label: "Settings", icon: Settings },
  ];
  
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="block md:hidden mb-6">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Menu className="h-5 w-5" />
              <span>Dashboard Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] p-0">
            <div className="py-4 px-2">
              <div className="space-y-2">
                {menuItems.map(item => (
                  <Button 
                    key={item.id}
                    variant={activeTab === item.id ? "default" : "ghost"} 
                    className="w-full justify-start" 
                    size="sm"
                    onClick={() => handleTabChange(item.id)}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <span className="w-full text-left">{item.label}</span>
                  </Button>
                ))}
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-red-500" 
                  size="sm"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span className="w-full text-left">Logout</span>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="hidden md:block md:col-span-1 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                {menuItems.map(item => (
                  <Button 
                    key={item.id}
                    variant={activeTab === item.id ? "default" : "ghost"} 
                    className="w-full justify-start" 
                    size="lg"
                    onClick={() => handleTabChange(item.id)}
                  >
                    <item.icon className="mr-2 h-5 w-5" />
                    <span className="w-full text-left">{item.label}</span>
                  </Button>
                ))}
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-red-500" 
                  size="lg"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  <span className="w-full text-left">Logout</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-3 space-y-6">
          {activeTab === "overview" && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Your recent orders will appear here.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>My Vehicles</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Your saved vehicles will appear here.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="flex items-center justify-center gap-2" onClick={() => navigate("/service")}>
                    <Wrench className="h-5 w-5" /> Car Service
                  </Button>
                  <Button className="flex items-center justify-center gap-2" variant="outline" onClick={() => navigate("/fuel")}>
                    Order Fuel Delivery
                  </Button>
                  <Button className="flex items-center justify-center gap-2" variant="outline" onClick={() => navigate("/generator")}>
                    <Zap className="h-5 w-5" /> Generator Service
                  </Button>
                </CardContent>
              </Card>
            </>
          )}
          
          {activeTab === "profile" && <ProfileTab />}
          {activeTab === "vehicles" && <VehiclesTab />}
          {activeTab === "locations" && <LocationsTab />}
          {activeTab === "payment" && <PaymentTab />}
          {activeTab === "subscription" && <SubscriptionTab />}
          {activeTab === "history" && <OrderHistoryTab />}
          {activeTab === "settings" && <SettingsTab />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
