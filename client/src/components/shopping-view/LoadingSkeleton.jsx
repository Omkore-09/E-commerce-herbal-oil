import React from 'react';
import { Skeleton } from "@components/ui/skeleton"; // Adjust the import path if necessary
import logo from '../../assets/logobg.png'; // Adjust the path as needed

const LoadingSkeleton = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100 animate-pulse">
      <img src={logo} alt="Ecommerce Logo" className="h-24 w-24 mb-4" />
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-2">Loading Content...</h1>
        <p className="text-gray-500">Please wait a moment while we load the content for you.</p>
        <div className="mt-6 space-y-4">
          <div className="w-60 h-6 bg-gray-300 rounded"></div>
          <div className="w-40 h-6 bg-gray-300 rounded"></div>
          <div className="w-48 h-6 bg-gray-300 rounded"></div>
          <div className="w-56 h-6 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
