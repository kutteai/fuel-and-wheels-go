
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  AlertCircle
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

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { toast } = useToast();
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };
  
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <Button 
                  variant={activeTab === "overview" ? "default" : "ghost"} 
                  className="w-full justify-start" 
                  size="lg"
                  onClick={() => handleTabChange("overview")}
                >
                  <Home className="mr-2 h-5 w-5" />
                  Overview
                </Button>
                <Button 
                  variant={activeTab === "profile" ? "default" : "ghost"} 
                  className="w-full justify-start" 
                  size="lg"
                  onClick={() => handleTabChange("profile")}
                >
                  <User className="mr-2 h-5 w-5" />
                  Profile
                </Button>
                <Button 
                  variant={activeTab === "vehicles" ? "default" : "ghost"} 
                  className="w-full justify-start" 
                  size="lg"
                  onClick={() => handleTabChange("vehicles")}
                >
                  <Car className="mr-2 h-5 w-5" />
                  My Vehicles
                </Button>
                <Button 
                  variant={activeTab === "locations" ? "default" : "ghost"} 
                  className="w-full justify-start" 
                  size="lg"
                  onClick={() => handleTabChange("locations")}
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Saved Locations
                </Button>
                <Button 
                  variant={activeTab === "payment" ? "default" : "ghost"} 
                  className="w-full justify-start" 
                  size="lg"
                  onClick={() => handleTabChange("payment")}
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Payment Methods
                </Button>
                <Button 
                  variant={activeTab === "subscription" ? "default" : "ghost"} 
                  className="w-full justify-start" 
                  size="lg"
                  onClick={() => handleTabChange("subscription")}
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Subscription
                </Button>
                <Button 
                  variant={activeTab === "history" ? "default" : "ghost"} 
                  className="w-full justify-start" 
                  size="lg"
                  onClick={() => handleTabChange("history")}
                >
                  <History className="mr-2 h-5 w-5" />
                  Order History
                </Button>
                <Button 
                  variant={activeTab === "settings" ? "default" : "ghost"} 
                  className="w-full justify-start" 
                  size="lg"
                  onClick={() => handleTabChange("settings")}
                >
                  <Settings className="mr-2 h-5 w-5" />
                  Settings
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-red-500" 
                  size="lg"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Logout
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
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="flex items-center justify-center gap-2" onClick={() => navigate("/service")}>
                    <Wrench className="h-5 w-5" /> Book Car Service
                  </Button>
                  <Button className="flex items-center justify-center gap-2" variant="outline" onClick={() => navigate("/fuel")}>
                    Order Fuel Delivery
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
