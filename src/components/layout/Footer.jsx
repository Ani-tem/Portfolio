import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t-2 border-green-400 bg-gray-900/95 backdrop-blur-sm py-6 relative overflow-hidden">
      {/* Footer background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-cyan-400/5 to-purple-400/5"></div>
      
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <p className="text-green-400 font-mono">
          © 2024 TEMMANABOYINA.SYS | IIITA | ALL_RIGHTS_RESERVED
        </p>
        <p className="text-cyan-400/70 font-mono text-xs mt-2">
          SYSTEM UPTIME: {Math.floor(Date.now() / 1000)} SECONDS
        </p>
      </div>
    </footer>
  );
};

export default Footer;