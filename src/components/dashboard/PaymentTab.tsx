
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, Plus, Edit, Trash } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

// Sample payment methods data
const samplePaymentMethods = [
  { id: 1, type: "Visa", number: "•••• •••• •••• 4242", expiry: "12/25" },
  { id: 2, type: "Mastercard", number: "•••• •••• •••• 5555", expiry: "09/26" }
];

const PaymentTab = () => {
  const [paymentMethods, setPaymentMethods] = useState(samplePaymentMethods);
  const [showAddForm, setShowAddForm] = useState(false);
  const { toast } = useToast();
  
  const handleAddPaymentMethod = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const cardNumber = formData.get('cardNumber') as string;
    const maskedNumber = "•••• •••• •••• " + cardNumber.slice(-4);
    
    const newPaymentMethod = {
      id: paymentMethods.length + 1,
      type: determineCardType(cardNumber),
      number: maskedNumber,
      expiry: `${formData.get('expiryMonth')}/${formData.get('expiryYear')}`
    };
    
    setPaymentMethods([...paymentMethods, newPaymentMethod]);
    setShowAddForm(false);
    toast({
      title: "Payment Method Added",
      description: `Your ${newPaymentMethod.type} card has been added.`,
    });
  };
  
  const handleDeletePaymentMethod = (id: number) => {
    setPaymentMethods(paymentMethods.filter(method => method.id !== id));
    toast({
      title: "Payment Method Removed",
      description: "The payment method has been removed from your account.",
    });
  };
  
  // Simple function to determine card type based on first digit
  const determineCardType = (number: string) => {
    const firstDigit = number.charAt(0);
    if (firstDigit === '4') return "Visa";
    if (firstDigit === '5') return "Mastercard";
    if (firstDigit === '3') return "Amex";
    if (firstDigit === '6') return "Discover";
    return "Card";
  };
  
  return (
    <>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>Manage your payment methods for fuel and service orders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {paymentMethods.map(method => (
              <Card key={method.id}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-blue/10 p-3 rounded-full">
                      <CreditCard className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{method.type}</h4>
                      <p className="text-sm text-gray-500">{method.number} • Expires {method.expiry}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500" onClick={() => handleDeletePaymentMethod(method.id)}>
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
            <Plus className="h-4 w-4" /> Add Payment Method
          </Button>
        </CardFooter>
      </Card>
      
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddPaymentMethod} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label htmlFor="cardholderName" className="font-medium">Cardholder Name</label>
                  <Input id="cardholderName" name="cardholderName" placeholder="Name on card" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="cardNumber" className="font-medium">Card Number</label>
                  <Input id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" required 
                    maxLength={16} />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2 col-span-1">
                    <label htmlFor="expiryMonth" className="font-medium">Expiry Month</label>
                    <Input id="expiryMonth" name="expiryMonth" placeholder="MM" required maxLength={2} />
                  </div>
                  <div className="space-y-2 col-span-1">
                    <label htmlFor="expiryYear" className="font-medium">Expiry Year</label>
                    <Input id="expiryYear" name="expiryYear" placeholder="YY" required maxLength={2} />
                  </div>
                  <div className="space-y-2 col-span-1">
                    <label htmlFor="cvv" className="font-medium">CVV</label>
                    <Input id="cvv" name="cvv" placeholder="123" required maxLength={4} />
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>Cancel</Button>
                <Button type="submit">Save Card</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default PaymentTab;
