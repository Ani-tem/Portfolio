import React from 'react';
import { Terminal } from 'lucide-react';

const LoadingSpinner = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        <Terminal className="w-8 h-8 text-green-400 animate-pulse" />
        <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-spin"></div>
      </div>
      <p className="text-green-400 font-mono text-sm animate-pulse">{text}</p>
    </div>
  );
};

export default LoadingSpinner;