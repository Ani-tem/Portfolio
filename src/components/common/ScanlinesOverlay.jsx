import React from 'react';

export const ScanlinesOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <div className="h-full w-full bg-gradient-to-b from-transparent via-green-400/5 to-transparent animate-pulse"></div>
      <div 
        className="absolute inset-0 bg-repeat-y opacity-20" 
        style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 255, 0, 0.03) 50%)',
          backgroundSize: '100% 2px'
        }}
      ></div>
    </div>
  );
};