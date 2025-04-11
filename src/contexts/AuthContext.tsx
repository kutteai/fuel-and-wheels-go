
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

// Define user type
interface User {
  id: string;
  email: string;
  name: string;
}

// Define auth context type
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => false,
  register: async () => false,
  logout: () => {},
  isAuthenticated: false,
});

// Mock user database (in a real app, this would be your backend)
const MOCK_USERS = [
  {
    id: '1',
    email: 'user@example.com',
    password: 'password123',
    name: 'Demo User',
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if user is logged in on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('fuelwheels_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('fuelwheels_user');
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, this would be a call to your authentication API
    const foundUser = MOCK_USERS.find(
      u => u.email === email && u.password === password
    );
    
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('fuelwheels_user', JSON.stringify(userWithoutPassword));
      toast({
        title: "Login Successful",
        description: `Welcome back, ${userWithoutPassword.name}!`,
      });
      return true;
    }
    
    // Login failed
    toast({
      variant: "destructive",
      title: "Login Failed",
      description: "Invalid email or password.",
    });
    return false;
  };

  // Register function
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    const userExists = MOCK_USERS.some(u => u.email === email);
    
    if (userExists) {
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: "This email is already registered.",
      });
      return false;
    }
    
    // In a real app, this would create a new user in your database
    const newUser = {
      id: String(MOCK_USERS.length + 1),
      email,
      password,
      name,
    };
    
    MOCK_USERS.push(newUser);
    
    // Log in the new user
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('fuelwheels_user', JSON.stringify(userWithoutPassword));
    
    toast({
      title: "Registration Successful",
      description: `Welcome, ${name}!`,
    });
    return true;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('fuelwheels_user');
    navigate('/');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Create custom hook for using auth context
export const useAuth = () => useContext(AuthContext);
