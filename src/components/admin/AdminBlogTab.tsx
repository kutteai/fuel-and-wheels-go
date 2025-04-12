
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Search, RefreshCw, Edit, Trash2, Eye, MoreVertical, FileText, Plus, Clock, CalendarDays } from 'lucide-react';

const AdminBlogTab = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [blogStatus, setBlogStatus] = useState('all');
  
  // Demo blog data
  const posts = [
    { id: "POST001", title: "How to Maintain Your Generator for Longevity", category: "Generator Service", status: "published", author: "Admin", date: "2025-04-01", readTime: "5 min" },
    { id: "POST002", title: "The Importance of Regular Car Servicing", category: "Car Service", status: "published", author: "Admin", date: "2025-03-25", readTime: "4 min" },
    { id: "POST003", title: "Fuel Efficiency Tips for Your Vehicle", category: "Fuel Delivery", status: "published", author: "Admin", date: "2025-03-18", readTime: "6 min" },
    { id: "POST004", title: "Why Choose a Fuel Delivery Subscription", category: "Subscription", status: "published", author: "Admin", date: "2025-03-10", readTime: "3 min" },
    { id: "POST005", title: "Common Generator Problems and Solutions", category: "Generator Service", status: "draft", author: "Admin", date: "2025-04-05", readTime: "7 min" },
    { id: "POST006", title: "The Benefits of Premium Fuel for Your Car", category: "Fuel Delivery", status: "draft", author: "Admin", date: "2025-04-08", readTime: "4 min" },
    { id: "POST007", title: "How to Prepare Your Car for the Rainy Season", category: "Car Service", status: "scheduled", author: "Admin", date: "2025-04-15", readTime: "5 min" },
    { id: "POST008", title: "Understanding Your Generator's Warning Signs", category: "Generator Service", status: "scheduled", author: "Admin", date: "2025-04-20", readTime: "6 min" }
  ];
  
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = blogStatus === 'all' || post.status === blogStatus;
    
    return matchesSearch && matchesStatus;
  });
  
  const handleEditPost = (postId: string) => {
    toast({
      title: "Edit Post",
      description: `Editing post ${postId}`,
    });
  };
  
  const handleDeletePost = (postId: string) => {
    toast({
      title: "Delete Post",
      description: `Post ${postId} has been deleted`,
      variant: "destructive",
    });
  };
  
  const handleViewPost = (postId: string) => {
    toast({
      title: "View Post",
      description: `Viewing post ${postId}`,
    });
  };
  
  const handleNewPost = () => {
    toast({
      title: "Create Post",
      description: "Creating a new blog post",
    });
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-100 text-green-800">Published</Badge>;
      case 'draft':
        return <Badge className="bg-gray-100 text-gray-800">Draft</Badge>;
      case 'scheduled':
        return <Badge className="bg-blue-100 text-blue-800">Scheduled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };
  
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Blog Management</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => handleNewPost()}>
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
          <Button>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>
      
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                className="pl-9" 
                placeholder="Search posts by title, category or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Tabs 
                defaultValue="all" 
                value={blogStatus} 
                onValueChange={setBlogStatus}
                className="w-fit"
              >
                <TabsList className="grid grid-cols-4 w-fit">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="published">Published</TabsTrigger>
                  <TabsTrigger value="draft">Drafts</TabsTrigger>
                  <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-xs text-gray-500 border-b">
                <tr>
                  <th className="font-medium p-3 text-left">ID</th>
                  <th className="font-medium p-3 text-left">Title</th>
                  <th className="font-medium p-3 text-left">Category</th>
                  <th className="font-medium p-3 text-left">Status</th>
                  <th className="font-medium p-3 text-left">Date</th>
                  <th className="font-medium p-3 text-left">Read Time</th>
                  <th className="font-medium p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {filteredPosts.map((post, index) => (
                  <tr key={index} className="border-b last:border-b-0 hover:bg-gray-50">
                    <td className="p-3">{post.id}</td>
                    <td className="p-3">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gray-100 p-2 rounded">
                          <FileText className="h-4 w-4 text-gray-600" />
                        </div>
                        <span className="font-medium">{post.title}</span>
                      </div>
                    </td>
                    <td className="p-3">{post.category}</td>
                    <td className="p-3">
                      {getStatusBadge(post.status)}
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-1">
                        <CalendarDays className="h-4 w-4 text-gray-500" />
                        <span>{post.date}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span>{post.readTime}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="h-8 w-8"
                          onClick={() => handleViewPost(post.id)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="h-8 w-8"
                          onClick={() => handleEditPost(post.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="h-8 w-8 text-red-500"
                          onClick={() => handleDeletePost(post.id)}
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
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No blog posts found matching your criteria.</p>
            </div>
          )}
          
          <div className="flex justify-between items-center mt-6">
            <p className="text-sm text-gray-500">
              Showing {filteredPosts.length} of {posts.length} posts
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

export default AdminBlogTab;
