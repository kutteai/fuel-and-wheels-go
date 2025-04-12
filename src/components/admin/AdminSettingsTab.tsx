
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Save, RefreshCw, Info } from 'lucide-react';

const AdminSettingsTab = () => {
  const { toast } = useToast();
  const [settingsTab, setSettingsTab] = useState('general');
  
  // General settings state
  const [companyName, setCompanyName] = useState('Creskiosk');
  const [companyEmail, setCompanyEmail] = useState('info@creskiosk.com');
  const [companyPhone, setCompanyPhone] = useState('+234 123 456 7890');
  const [companyAddress, setCompanyAddress] = useState('123 Main Street, Lagos, Nigeria');
  
  // Notification settings state
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(true);
  const [orderAlerts, setOrderAlerts] = useState(true);
  const [userSignups, setUserSignups] = useState(true);
  const [dailyReports, setDailyReports] = useState(false);
  
  // Security settings state
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState('30');
  
  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your settings have been updated successfully."
    });
  };
  
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admin Settings</h2>
        <Button onClick={handleSaveSettings}>
          <Save className="h-4 w-4 mr-2" />
          Save All Settings
        </Button>
      </div>
      
      <Tabs value={settingsTab} onValueChange={setSettingsTab} className="space-y-6">
        <TabsList className="grid grid-cols-3 w-[400px]">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Update your company details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input 
                    id="company-name" 
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-email">Email Address</Label>
                  <Input 
                    id="company-email" 
                    type="email"
                    value={companyEmail}
                    onChange={(e) => setCompanyEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-phone">Phone Number</Label>
                  <Input 
                    id="company-phone" 
                    value={companyPhone}
                    onChange={(e) => setCompanyPhone(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-address">Address</Label>
                  <Input 
                    id="company-address" 
                    value={companyAddress}
                    onChange={(e) => setCompanyAddress(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company-logo">Company Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-gray-100 rounded-md flex items-center justify-center">
                    <span className="text-gray-500">Logo</span>
                  </div>
                  <Button variant="outline">Upload New Logo</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSaveSettings}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-500">Receive notifications via email</p>
                  </div>
                  <Switch 
                    checked={emailNotifications} 
                    onCheckedChange={setEmailNotifications} 
                  />
                </div>
                
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">SMS Notifications</h3>
                    <p className="text-sm text-gray-500">Receive notifications via SMS</p>
                  </div>
                  <Switch 
                    checked={smsNotifications} 
                    onCheckedChange={setSmsNotifications} 
                  />
                </div>
                
                <h3 className="font-medium mt-6">Alert Types</h3>
                
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">New Order Alerts</h3>
                    <p className="text-sm text-gray-500">Get notified when new orders are placed</p>
                  </div>
                  <Switch 
                    checked={orderAlerts} 
                    onCheckedChange={setOrderAlerts} 
                  />
                </div>
                
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">User Sign-ups</h3>
                    <p className="text-sm text-gray-500">Get notified when new users register</p>
                  </div>
                  <Switch 
                    checked={userSignups} 
                    onCheckedChange={setUserSignups} 
                  />
                </div>
                
                <div className="flex items-center justify-between pb-4">
                  <div>
                    <h3 className="font-medium">Daily Reports</h3>
                    <p className="text-sm text-gray-500">Receive daily summary reports</p>
                  </div>
                  <Switch 
                    checked={dailyReports} 
                    onCheckedChange={setDailyReports} 
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSaveSettings}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security options for your admin account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                </div>
                <Switch 
                  checked={twoFactorAuth} 
                  onCheckedChange={setTwoFactorAuth} 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <div className="flex items-center gap-4">
                  <Input 
                    id="session-timeout" 
                    type="number"
                    value={sessionTimeout}
                    onChange={(e) => setSessionTimeout(e.target.value)}
                    className="max-w-[150px]"
                  />
                  <div className="flex items-center text-sm text-gray-500">
                    <Info className="h-4 w-4 mr-1" />
                    <span>Set to 0 for no timeout</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="font-medium mb-4">Password Management</h3>
                <div className="space-y-4">
                  <Button variant="outline">Change Admin Password</Button>
                  <Button variant="outline">Generate API Keys</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSaveSettings}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default AdminSettingsTab;
