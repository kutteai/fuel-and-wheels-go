
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FuelDelivery from "./pages/FuelDelivery";
import CarService from "./pages/CarService";
import GeneratorService from "./pages/GeneratorService";
import EmergencyService from "./pages/EmergencyService";
import TrackOrder from "./pages/TrackOrder";
import Subscription from "./pages/Subscription";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";

const App = () => {
  // Create a new QueryClient instance inside the component
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fuel" element={<FuelDelivery />} />
                <Route path="/service" element={<CarService />} />
                <Route path="/generator" element={<GeneratorService />} />
                <Route path="/emergency" element={<EmergencyService />} />
                <Route path="/track" element={<TrackOrder />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin" 
                  element={
                    <div className="min-h-screen">
                      <ProtectedRoute>
                        <AdminDashboard />
                      </ProtectedRoute>
                    </div>
                  } 
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Routes>
              <Route path="/admin" element={null} />
              <Route path="*" element={<Footer />} />
            </Routes>
          </div>
          <Toaster />
          <Sonner />
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
