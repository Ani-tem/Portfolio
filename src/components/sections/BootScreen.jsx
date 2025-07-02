import React from 'react';
import { MatrixBackground } from '../common/MatrixBackground';
import { CustomCursor } from '../common/CustomCursor';
import { useBootSequence } from '../hooks/useBootSequence';

export const BootScreen = ({ onBootComplete }) => {
  const { terminalText, showCursor, bootComplete } = useBootSequence(onBootComplete);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden cursor-none">
      <CustomCursor />
      <MatrixBackground density={50} />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent animate-pulse"></div>
      
      <div className="w-full max-w-2xl relative z-10">
        <div className="bg-gray-900/95 backdrop-blur-sm border-2 border-green-400 p-8 relative overflow-hidden glow-green">
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-green-400/5 to-green-400/20 opacity-30"></div>
          
          <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap relative z-10">
            {terminalText}
            {showCursor && <span className="bg-green-400 text-black animate-pulse">█</span>}
          </pre>
          
          <div className="absolute top-2 right-2 flex space-x-1">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};