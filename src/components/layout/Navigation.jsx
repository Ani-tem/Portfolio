import React, { useState, useEffect } from 'react';
import { Terminal, Monitor, Activity, Wifi, Power } from 'lucide-react';

const Navigation = ({ currentSection, setCurrentSection }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  const navigationItems = ['home', 'skills', 'projects', 'achievements', 'contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b-2 border-green-400 z-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-3 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-green-400 animate-pulse" />
              <span className={`text-green-400 font-mono font-bold ${glitchActive ? 'animate-pulse' : ''}`}>  
                TEMMANABOYINA.SYS

              </span>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-xs font-mono">
              <div className="flex items-center space-x-1 text-green-400">
                <Power className="w-3 h-3" />
                <span>PWR</span>
              </div>
              <div className="flex items-center space-x-1 text-cyan-400">
                <Wifi className="w-3 h-3" />
                <span>NET</span>
              </div>
              <div className="flex items-center space-x-1 text-yellow-400">
                <Activity className="w-3 h-3" />
                <span>SYS</span>
              </div>
              <div className="text-green-400">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
          <div className="flex space-x-6">
            {navigationItems.map((section) => (
              <button
                key={section}
                onClick={() => setCurrentSection(section)}
                className={`font-mono text-sm uppercase tracking-wider transition-all duration-300 relative group ${
                  currentSection === section 
                    ? 'text-cyan-400 border-b-2 border-cyan-400 glow-cyan' 
                    : 'text-green-400 hover:text-cyan-400 hover:glow-green'
                }`}
              >
                {section}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;