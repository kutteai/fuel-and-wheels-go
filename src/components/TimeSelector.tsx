
import React from 'react';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock } from 'lucide-react';

interface TimeSelectorProps {
  deliveryTime: string;
  setDeliveryTime: (value: string) => void;
  scheduledDate: string;
  setScheduledDate: (value: string) => void;
  scheduledHour: string;
  setScheduledHour: (value: string) => void;
  scheduledMinute: string;
  setScheduledMinute: (value: string) => void;
  scheduledPeriod: string;
  setScheduledPeriod: (value: string) => void;
}

const TimeSelector: React.FC<TimeSelectorProps> = ({
  deliveryTime,
  setDeliveryTime,
  scheduledDate,
  setScheduledDate,
  scheduledHour,
  setScheduledHour,
  scheduledMinute,
  setScheduledMinute,
  scheduledPeriod,
  setScheduledPeriod
}) => {
  // Generate hour options (1-12)
  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  
  // Generate minute options (00, 15, 30, 45)
  const minutes = ['00', '15', '30', '45'];
  
  return (
    <div className="space-y-4">
      <Label>Delivery Time</Label>
      <RadioGroup value={deliveryTime} onValueChange={setDeliveryTime} className="space-y-3">
        <div className="flex items-center space-x-2 p-3 border rounded-md hover:border-brand-blue cursor-pointer">
          <RadioGroupItem value="asap" id="asap" />
          <Label htmlFor="asap" className="flex items-center cursor-pointer flex-1">
            <Clock className="h-4 w-4 mr-2" />
            As Soon As Possible (1-2 hours)
          </Label>
        </div>
        <div className="flex items-center space-x-2 p-3 border rounded-md hover:border-brand-blue cursor-pointer">
          <RadioGroupItem value="scheduled" id="scheduled" />
          <Label htmlFor="scheduled" className="cursor-pointer flex-1">Schedule for Later</Label>
        </div>
      </RadioGroup>
      
      {deliveryTime === "scheduled" && (
        <div className="space-y-4 mt-4 p-4 border rounded-md bg-gray-50">
          <div>
            <Label htmlFor="scheduledDate">Date</Label>
            <div className="mt-1">
              <input
                id="scheduledDate"
                type="date"
                className="w-full p-2 border rounded-md"
                value={scheduledDate}
                onChange={(e) => setScheduledDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
          </div>
          
          <div>
            <Label>Time</Label>
            <div className="flex items-center gap-2 mt-1">
              <Select value={scheduledHour} onValueChange={setScheduledHour}>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Hour" />
                </SelectTrigger>
                <SelectContent>
                  {hours.map((hour) => (
                    <SelectItem key={hour} value={hour}>{hour}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <span>:</span>
              
              <Select value={scheduledMinute} onValueChange={setScheduledMinute}>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Min" />
                </SelectTrigger>
                <SelectContent>
                  {minutes.map((minute) => (
                    <SelectItem key={minute} value={minute}>{minute}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={scheduledPeriod} onValueChange={setScheduledPeriod}>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="AM/PM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AM">AM</SelectItem>
                  <SelectItem value="PM">PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSelector;
