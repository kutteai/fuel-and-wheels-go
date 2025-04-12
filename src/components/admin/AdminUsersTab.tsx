
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { Search, RefreshCw, Edit, Trash2, Eye, MoreVertical, UserPlus, Shield } from 'lucide-react';

const AdminUsersTab = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Demo user data
  const users = [
    { id: "USR001", name: "John Smith", email: "john.smith@example.com", phone: "07012345678", subscription: "Pro", registeredDate: "2025-01-15", status: "active" },
    { id: "USR002", name: "Alice Johnson", email: "alice.johnson@example.com", phone: "08023456789", subscription: "Basic", registeredDate: "2025-02-03", status: "active" },
    { id: "USR003", name: "David Wilson", email: "david.wilson@example.com", phone: "09034567890", subscription: null, registeredDate: "2025-02-12", status: "active" },
    { id: "USR004", name: "Sarah Brown", email: "sarah.brown@example.com", phone: "07045678901", subscription: "Elite", registeredDate: "2025-02-28", status: "active" },
    { id: "USR005", name: "Michael Lee", email: "michael.lee@example.com", phone: "08056789012", subscription: "Basic", registeredDate: "2025-03-05", status: "inactive" },
    { id: "USR006", name: "Jennifer Lopez", email: "jennifer.lopez@example.com", phone: "09067890123", subscription: null, registeredDate: "2025-03-10", status: "active" },
    { id: "USR007", name: "Robert Williams", email: "robert.williams@example.com", phone: "07078901234", subscription: "Pro", registeredDate: "2025-03-15", status: "active" },
    { id: "USR008", name: "Lisa Moore", email: "lisa.moore@example.com", phone: "08089012345", subscription: null, registeredDate: "2025-03-22", status: "inactive" },
    { id: "USR009", name: "Daniel Taylor", email: "daniel.taylor@example.com", phone: "09090123456", subscription: "Basic", registeredDate: "2025-03-28", status: "active" },
    { id: "USR010", name: "Jessica White", email: "jessica.white@example.com", phone: "07001234567", subscription: "Pro", registeredDate: "2025-04-05", status: "active" }
  ];
  
  const filteredUsers = users.filter(user => {
    return user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
           user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
           (user.phone && user.phone.includes(searchTerm));
  });
  
  const handleEditUser = (userId: string) => {
    toast({
      title: "Edit User",
      description: `Editing user ${userId}`,
    });
  };
  
  const handleDeleteUser = (userId: string) => {
    toast({
      title: "Delete User",
      description: `User ${userId} has been deleted`,
      variant: "destructive",
    });
  };
  
  const handleViewUser = (userId: string) => {
    toast({
      title: "View User",
      description: `Viewing details for user ${userId}`,
    });
  };
  
  const handleCreateUser = () => {
    toast({
      title: "Create User",
      description: "Creating a new user account",
    });
  };
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  const getSubscriptionBadge = (subscription: string | null) => {
    if (!subscription) {
      return <Badge variant="outline">No Plan</Badge>;
    }
    
    switch (subscription) {
      case 'Basic':
        return <Badge className="bg-gray-100 text-gray-800">Basic</Badge>;
      case 'Pro':
        return <Badge className="bg-blue-100 text-blue-800">Pro</Badge>;
      case 'Elite':
        return <Badge className="bg-purple-100 text-purple-800">Elite</Badge>;
      default:
        return <Badge variant="outline">{subscription}</Badge>;
    }
  };
  
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">User Management</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => handleCreateUser()}>
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </Button>
          <Button>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>
      
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="relative flex-1 mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              className="pl-9" 
              placeholder="Search users by name, email, ID or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-xs text-gray-500 border-b">
                <tr>
                  <th className="font-medium p-3 text-left">User</th>
                  <th className="font-medium p-3 text-left">Email</th>
                  <th className="font-medium p-3 text-left">Phone</th>
                  <th className="font-medium p-3 text-left">Subscription</th>
                  <th className="font-medium p-3 text-left">Status</th>
                  <th className="font-medium p-3 text-left">Registered</th>
                  <th className="font-medium p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {filteredUsers.map((user, index) => (
                  <tr key={index} className="border-b last:border-b-0 hover:bg-gray-50">
                    <td className="p-3">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.phone}</td>
                    <td className="p-3">
                      {getSubscriptionBadge(user.subscription)}
                    </td>
                    <td className="p-3">
                      <Badge variant={user.status === "active" ? "success" : "destructive"} className={user.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="p-3">{user.registeredDate}</td>
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="h-8 w-8"
                          onClick={() => handleViewUser(user.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="h-8 w-8"
                          onClick={() => handleEditUser(user.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="h-8 w-8 text-red-500"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredUsers.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No users found matching your search.</p>
            </div>
          )}
          
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-gray-500">
              Showing {filteredUsers.length} of {users.length} users
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm" disabled>Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AdminUsersTab;
