
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Edit, Save, X, RefreshCw, Plus, Shield, Award, Zap, Check } from 'lucide-react';

const AdminPlansTab = () => {
  const { toast } = useToast();
  
  // Initial plan data
  const defaultPlans = [
    { 
      id: "plan1", 
      name: "Basic Plan", 
      priceMonthly: "100000", 
      priceYearly: "1080000",
      type: "basic",
      features: [
        "1 Fuel Delivery/month (≤ 50L)",
        "1 Car or Generator Service/month",
        "Standard Delivery (within 24 hrs)",
        "Basic Reminder Notification"
      ]
    },
    { 
      id: "plan2", 
      name: "Pro Plan", 
      priceMonthly: "250000", 
      priceYearly: "2700000",
      type: "pro",
      features: [
        "2 Fuel Deliveries/month (≤ 70L each)",
        "2 Services (Car/Generator – mix & match)",
        "Same-day Delivery (if ordered before 3 PM)",
        "Smart Reminders (customized by car/generator type)",
        "Priority Booking (morning/evening slots)",
        "1 Free Car Wash/month",
        "Breakdown Support (basic phone or on-site check)",
        "5% Discount on additional services and parts"
      ]
    },
    { 
      id: "plan3", 
      name: "Elite Plan", 
      priceMonthly: "500000", 
      priceYearly: "5400000",
      type: "elite",
      features: [
        "4 Fuel Deliveries/month (≤ 100L each)",
        "Unlimited Car + Generator Servicing",
        "Express Delivery (within 2 hours, 24/7)",
        "Comprehensive Maintenance Schedule",
        "Highest Priority Booking (any time slot)",
        "Emergency Call-Outs (nights/holidays)",
        "2 Free Car Washes/month",
        "Full Breakdown Visit (non-repair diagnosis)",
        "10% Discount on all extras and parts",
        "Dedicated Service Agent / Concierge",
        "Monthly Vehicle Health Report (PDF/email)"
      ]
    }
  ];
  
  const [plans, setPlans] = useState(defaultPlans);
  const [editingPlanId, setEditingPlanId] = useState<string | null>(null);
  const [editedPlan, setEditedPlan] = useState<any>(null);
  const [newFeature, setNewFeature] = useState('');
  
  const handleEditPlan = (planId: string) => {
    const plan = plans.find(p => p.id === planId);
    if (plan) {
      setEditingPlanId(planId);
      setEditedPlan({...plan});
    }
  };
  
  const handleCancelEdit = () => {
    setEditingPlanId(null);
    setEditedPlan(null);
  };
  
  const handleSavePlan = () => {
    if (!editedPlan) return;
    
    const updatedPlans = plans.map(plan => 
      plan.id === editingPlanId ? {...editedPlan} : plan
    );
    
    setPlans(updatedPlans);
    setEditingPlanId(null);
    setEditedPlan(null);
    
    toast({
      title: "Plan Updated",
      description: `${editedPlan.name} has been updated successfully.`
    });
  };
  
  const handleAddFeature = () => {
    if (!newFeature.trim() || !editedPlan) return;
    
    setEditedPlan({
      ...editedPlan,
      features: [...editedPlan.features, newFeature]
    });
    
    setNewFeature('');
  };
  
  const handleRemoveFeature = (index: number) => {
    if (!editedPlan) return;
    
    const updatedFeatures = [...editedPlan.features];
    updatedFeatures.splice(index, 1);
    
    setEditedPlan({
      ...editedPlan,
      features: updatedFeatures
    });
  };
  
  const formatPrice = (price: string) => {
    return `₦${price}`;
  };
  
  const getPlanIcon = (type: string) => {
    switch(type) {
      case 'basic':
        return <Shield className="h-6 w-6 text-gray-600" />;
      case 'pro':
        return <Award className="h-6 w-6 text-brand-blue" />;
      case 'elite':
        return <Zap className="h-6 w-6 text-brand-orange" />;
      default:
        return <Shield className="h-6 w-6" />;
    }
  };
  
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Subscription Plans</h2>
        <Button>
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {plans.map(plan => (
          <Card key={plan.id} className="relative border-2 border-gray-200">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-2">
                  {getPlanIcon(plan.type)}
                  <CardTitle>{plan.name}</CardTitle>
                </div>
                {editingPlanId !== plan.id && (
                  <Button 
                    size="icon" 
                    variant="ghost"
                    onClick={() => handleEditPlan(plan.id)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                )}
              </div>
              
              {editingPlanId === plan.id ? (
                <div className="space-y-4 mt-2">
                  <div>
                    <Label htmlFor={`plan-name-${plan.id}`}>Plan Name</Label>
                    <Input 
                      id={`plan-name-${plan.id}`}
                      value={editedPlan?.name}
                      onChange={(e) => setEditedPlan({...editedPlan, name: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`plan-monthly-${plan.id}`}>Monthly Price (₦)</Label>
                    <Input 
                      id={`plan-monthly-${plan.id}`}
                      value={editedPlan?.priceMonthly}
                      onChange={(e) => setEditedPlan({...editedPlan, priceMonthly: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`plan-yearly-${plan.id}`}>Yearly Price (₦)</Label>
                    <Input 
                      id={`plan-yearly-${plan.id}`}
                      value={editedPlan?.priceYearly}
                      onChange={(e) => setEditedPlan({...editedPlan, priceYearly: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                </div>
              ) : (
                <CardDescription className="mt-4">
                  <div className="space-y-1">
                    <p className="text-lg font-semibold">{formatPrice(plan.priceMonthly)}<span className="text-sm font-normal text-gray-500">/month</span></p>
                    <p>{formatPrice(plan.priceYearly)}<span className="text-sm text-gray-500">/year</span></p>
                  </div>
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              {editingPlanId === plan.id ? (
                <div className="space-y-4">
                  <h3 className="font-medium">Features</h3>
                  <ul className="space-y-2">
                    {editedPlan?.features.map((feature: string, index: number) => (
                      <li key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                        <span>{feature}</span>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="h-6 w-6 text-red-500"
                          onClick={() => handleRemoveFeature(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Add new feature..." 
                      value={newFeature}
                      onChange={(e) => setNewFeature(e.target.value)}
                    />
                    <Button onClick={handleAddFeature}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
            
            {editingPlanId === plan.id && (
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" onClick={handleCancelEdit}>
                  Cancel
                </Button>
                <Button onClick={handleSavePlan}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </>
  );
};

export default AdminPlansTab;
