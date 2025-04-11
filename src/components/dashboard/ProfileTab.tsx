
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfileTab = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("personal");
  
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="preferences">Service Preferences</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal">
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium">Full Name</label>
                  <Input id="name" defaultValue={user?.name || ''} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">Email</label>
                  <Input id="email" defaultValue={user?.email || ''} readOnly />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="font-medium">Phone Number</label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
              </div>
              <Button type="submit" className="mt-4">Save Changes</Button>
            </form>
          </TabsContent>
          
          <TabsContent value="preferences">
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label htmlFor="carPreference" className="font-medium">Car Service Notification Preferences</label>
                  <select 
                    id="carPreference" 
                    className="w-full p-2 border rounded-md"
                    defaultValue="email"
                  >
                    <option value="email">Email Only</option>
                    <option value="sms">SMS Only</option>
                    <option value="both">Both Email and SMS</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="genPreference" className="font-medium">Generator Service Notification Preferences</label>
                  <select 
                    id="genPreference" 
                    className="w-full p-2 border rounded-md"
                    defaultValue="email"
                  >
                    <option value="email">Email Only</option>
                    <option value="sms">SMS Only</option>
                    <option value="both">Both Email and SMS</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="maintenanceReminder" className="font-medium">Maintenance Reminder Frequency</label>
                  <select 
                    id="maintenanceReminder" 
                    className="w-full p-2 border rounded-md"
                    defaultValue="monthly"
                  >
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                  </select>
                </div>
              </div>
              <Button type="submit" className="mt-4">Save Preferences</Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProfileTab;
