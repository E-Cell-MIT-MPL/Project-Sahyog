
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-md w-full px-6 py-12 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-lg text-center">
        <h1 className="text-6xl font-bold text-white mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-zinc-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          onClick={() => navigate('/')} 
          className="bg-white text-black hover:bg-zinc-200 transition-all duration-300"
        >
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
