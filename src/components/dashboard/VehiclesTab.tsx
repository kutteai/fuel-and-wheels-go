
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Car, Plus, Edit, Trash } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

// Sample vehicle data
const sampleVehicles = [
  { id: 1, name: "Tesla Model 3", type: "EV", licensePlate: "EV-1234" },
  { id: 2, name: "Toyota Camry", type: "Hybrid", licensePlate: "HB-5678" }
];

const VehiclesTab = () => {
  const [vehicles, setVehicles] = useState(sampleVehicles);
  const [showAddForm, setShowAddForm] = useState(false);
  const { toast } = useToast();
  
  const handleAddVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newVehicle = {
      id: vehicles.length + 1,
      name: formData.get('vehicleName') as string,
      type: formData.get('vehicleType') as string,
      licensePlate: formData.get('licensePlate') as string
    };
    
    setVehicles([...vehicles, newVehicle]);
    setShowAddForm(false);
    toast({
      title: "Vehicle Added",
      description: `${newVehicle.name} has been added to your vehicles.`,
    });
  };
  
  const handleDeleteVehicle = (id: number) => {
    setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
    toast({
      title: "Vehicle Removed",
      description: "The vehicle has been removed from your account.",
    });
  };
  
  return (
    <>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>My Vehicles</CardTitle>
          <CardDescription>Manage your vehicles for fuel delivery and service</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vehicles.map(vehicle => (
              <Card key={vehicle.id}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-blue/10 p-3 rounded-full">
                      <Car className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{vehicle.name}</h4>
                      <p className="text-sm text-gray-500">{vehicle.type} • {vehicle.licensePlate}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500" onClick={() => handleDeleteVehicle(vehicle.id)}>
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
            <Plus className="h-4 w-4" /> Add Vehicle
          </Button>
        </CardFooter>
      </Card>
      
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Vehicle</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddVehicle} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="vehicleName" className="font-medium">Vehicle Name</label>
                  <Input id="vehicleName" name="vehicleName" placeholder="e.g. Toyota Camry" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="vehicleType" className="font-medium">Vehicle Type</label>
                  <Select name="vehicleType" defaultValue="Gasoline">
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Gasoline">Gasoline</SelectItem>
                      <SelectItem value="Diesel">Diesel</SelectItem>
                      <SelectItem value="EV">Electric (EV)</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="licensePlate" className="font-medium">License Plate</label>
                  <Input id="licensePlate" name="licensePlate" placeholder="e.g. ABC-1234" required />
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
                <Button type="submit">Save Vehicle</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default VehiclesTab;
