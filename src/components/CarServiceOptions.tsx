import React from 'react';
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ServiceOption {
  id: string;
  name: string;
  price: number;
  description?: string;
}

interface CarServiceOptionsProps {
  selectedServices: string[];
  onServiceChange: (serviceId: string, checked: boolean) => void;
  oilLiters: string;
  setOilLiters: (value: string) => void;
  carWashType: string;
  setCarWashType: (value: string) => void;
  batteryService: string;
  setBatteryService: (value: string) => void;
  oilCompany: string;
  setOilCompany: (value: string) => void;
  otherServices: string;
  setOtherServices: (value: string) => void;
}

const CarServiceOptions: React.FC<CarServiceOptionsProps> = ({
  selectedServices,
  onServiceChange,
  oilLiters,
  setOilLiters,
  carWashType,
  setCarWashType,
  batteryService,
  setBatteryService,
  oilCompany,
  setOilCompany,
  otherServices,
  setOtherServices
}) => {
  // Oil change options
  const oilCompanies = [
    { value: "total", label: "Total" },
    { value: "mobil", label: "Mobil" },
    { value: "shell", label: "Shell" },
    { value: "castrol", label: "Castrol" },
    { value: "motul", label: "Motul" }
  ];
  
  // Car wash options
  const carWashOptions = [
    { value: "basic", label: "Basic (Clean & Dry)", price: "₦5,000" },
    { value: "basic-plus", label: "Basic+ (Clear Coat, Wheel Bright, Underbody)", price: "₦10,000" },
    { value: "ultimate", label: "Ultimate (Ceramic FastWax, Tire Shine, Wheel Bright, Underbody)", price: "₦30,000" }
  ];
  
  // Battery service options
  const batteryOptions = [
    { value: "jump-start", label: "Battery Jump Start" },
    { value: "battery-12v", label: "New 12V Battery" },
    { value: "battery-24v", label: "New 24V Battery" }
  ];
  
  return (
    <div className="space-y-6">
      {/* Oil Change Options */}
      {selectedServices.includes("oil-change") && (
        <div className="p-4 border rounded-md bg-gray-50 space-y-4">
          <h3 className="font-medium text-lg">Oil Change Options</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="oilCompany">Oil Brand</Label>
              <Select value={oilCompany} onValueChange={setOilCompany}>
                <SelectTrigger id="oilCompany">
                  <SelectValue placeholder="Select oil brand" />
                </SelectTrigger>
                <SelectContent>
                  {oilCompanies.map(company => (
                    <SelectItem key={company.value} value={company.value}>
                      {company.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="oilLiters">Oil Quantity (Liters)</Label>
              <Input
                id="oilLiters"
                type="number"
                min="1"
                max="10"
                value={oilLiters}
                onChange={(e) => setOilLiters(e.target.value)}
                placeholder="Liters"
              />
            </div>
          </div>
        </div>
      )}
      
      {/* Car Wash Options */}
      {selectedServices.includes("car-wash") && (
        <div className="p-4 border rounded-md bg-gray-50 space-y-4">
          <h3 className="font-medium text-lg">Car Wash Type</h3>
          
          <div className="space-y-3">
            {carWashOptions.map(option => (
              <div 
                key={option.value}
                className={`p-3 border rounded-md cursor-pointer ${
                  carWashType === option.value ? 'border-brand-blue bg-blue-50' : 'hover:border-gray-400'
                }`}
                onClick={() => setCarWashType(option.value)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full mr-2 ${
                      carWashType === option.value ? 'bg-brand-blue' : 'border border-gray-400'
                    }`}></div>
                    <Label className="cursor-pointer">{option.label}</Label>
                  </div>
                  <span className="font-medium">{option.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Battery Service Options */}
      {selectedServices.includes("battery-jump") && (
        <div className="p-4 border rounded-md bg-gray-50 space-y-4">
          <h3 className="font-medium text-lg">Battery Service</h3>
          
          <div className="space-y-3">
            {batteryOptions.map(option => (
              <div 
                key={option.value}
                className={`p-3 border rounded-md cursor-pointer ${
                  batteryService === option.value ? 'border-brand-blue bg-blue-50' : 'hover:border-gray-400'
                }`}
                onClick={() => setBatteryService(option.value)}
              >
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full mr-2 ${
                    batteryService === option.value ? 'bg-brand-blue' : 'border border-gray-400'
                  }`}></div>
                  <Label className="cursor-pointer">{option.label}</Label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Other Services */}
      {selectedServices.includes("other-services") && (
        <div className="p-4 border rounded-md bg-gray-50 space-y-4">
          <h3 className="font-medium text-lg">Other Services</h3>
          
          <div>
            <Label htmlFor="otherServices">Please specify what services you need:</Label>
            <Textarea
              id="otherServices"
              value={otherServices}
              onChange={(e) => setOtherServices(e.target.value)}
              placeholder="E.g., Brake pad replacement, Windshield repair, etc."
              className="mt-1"
              rows={3}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarServiceOptions;
