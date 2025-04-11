import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Wrench, Car, User, CreditCard, History, Settings, LogOut, Home, MapPin } from 'lucide-react';

const Dashboard = () => {
  // This is a temporary placeholder to fix the build errors
  // We'll implement the full dashboard later
  
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" size="lg">
                  <Home className="mr-2 h-5 w-5" />
                  Overview
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="lg">
                  <User className="mr-2 h-5 w-5" />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="lg">
                  <Car className="mr-2 h-5 w-5" />
                  My Vehicles
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="lg">
                  <MapPin className="mr-2 h-5 w-5" />
                  Saved Locations
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="lg">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Payment Methods
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="lg">
                  <Shield className="mr-2 h-5 w-5" />
                  Subscription
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="lg">
                  <History className="mr-2 h-5 w-5" />
                  Order History
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="lg">
                  <Settings className="mr-2 h-5 w-5" />
                  Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start text-red-500" size="lg">
                  <LogOut className="mr-2 h-5 w-5" />
                  Logout
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-3 space-y-6">
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
              <Button className="flex items-center justify-center gap-2">
                <Wrench className="h-5 w-5" /> Book Car Service
              </Button>
              <Button className="flex items-center justify-center gap-2" variant="outline">
                Order Fuel Delivery
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
