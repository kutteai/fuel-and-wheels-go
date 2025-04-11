
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 rounded-full bg-red-100 flex items-center justify-center">
            <AlertTriangle className="h-12 w-12 text-brand-red" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-6">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-3">
          <Link to="/">
            <Button className="w-full">Return to Home</Button>
          </Link>
          <Link to="/fuel">
            <Button variant="outline" className="w-full">Order Fuel</Button>
          </Link>
          <Link to="/service">
            <Button variant="outline" className="w-full">Book Service</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
