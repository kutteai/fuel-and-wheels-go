
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Home, Briefcase, Plus, Edit, Trash } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

// Sample locations data
const sampleLocations = [
  { id: 1, name: "Home", address: "123 Main St, Anytown, CA 12345", type: "home" },
  { id: 2, name: "Office", address: "456 Business Ave, Workville, CA 67890", type: "work" }
];

const LocationsTab = () => {
  const [locations, setLocations] = useState(sampleLocations);
  const [showAddForm, setShowAddForm] = useState(false);
  const { toast } = useToast();
  
  const handleAddLocation = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newLocation = {
      id: locations.length + 1,
      name: formData.get('locationName') as string,
      address: formData.get('address') as string,
      type: formData.get('locationType') as string || "other"
    };
    
    setLocations([...locations, newLocation]);
    setShowAddForm(false);
    toast({
      title: "Location Added",
      description: `${newLocation.name} has been added to your saved locations.`,
    });
  };
  
  const handleDeleteLocation = (id: number) => {
    setLocations(locations.filter(location => location.id !== id));
    toast({
      title: "Location Removed",
      description: "The location has been removed from your saved locations.",
    });
  };
  
  const getLocationIcon = (type: string) => {
    switch(type) {
      case 'home': return <Home className="h-6 w-6 text-brand-blue" />;
      case 'work': return <Briefcase className="h-6 w-6 text-brand-blue" />;
      default: return <MapPin className="h-6 w-6 text-brand-blue" />;
    }
  };
  
  return (
    <>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Saved Locations</CardTitle>
          <CardDescription>Manage your favorite delivery locations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {locations.map(location => (
              <Card key={location.id}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-blue/10 p-3 rounded-full">
                      {getLocationIcon(location.type)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{location.name}</h4>
                      <p className="text-sm text-gray-500">{location.address}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500" onClick={() => handleDeleteLocation(location.id)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setShowAddForm(!showAddForm)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" /> Add Location
          </Button>
        </CardFooter>
      </Card>
      
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Location</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddLocation} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label htmlFor="locationName" className="font-medium">Location Name</label>
                  <Input id="locationName" name="locationName" placeholder="e.g. Home, Office, Gym" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="address" className="font-medium">Address</label>
                  <Input id="address" name="address" placeholder="Enter full address" required />
                </div>
                <div className="space-y-2">
                  <label className="font-medium">Location Type</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="locationType" value="home" className="form-radio" defaultChecked />
                      <span>Home</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="locationType" value="work" className="form-radio" />
                      <span>Work</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="locationType" value="other" className="form-radio" />
                      <span>Other</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
                <Button type="submit">Save Location</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default LocationsTab;
