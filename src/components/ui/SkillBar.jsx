import React, { useState, useEffect } from 'react';

export const SkillBar = ({ skill }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(skill.level);
    }, 500);
    return () => clearTimeout(timer);
  }, [skill.level]);

  return (
    <div className="mb-4 relative">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <skill.icon className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-mono text-sm font-bold">{skill.name}</span>
        </div>
        <span className="text-green-400 font-mono text-xs bg-green-400/20 px-2 py-1 border border-green-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-800 h-3 border border-green-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
        
        <div 
          className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 h-full transition-all duration-2000 ease-out relative overflow-hidden"
          style={{ width: `${animatedLevel}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide-right"></div>
        </div>
        
        <div className="absolute inset-0 bg-repeat-x opacity-20" style={{
          backgroundImage: 'linear-gradient(to right, transparent 90%, rgba(0, 255, 0, 0.3) 90%)',
          backgroundSize: '20px 100%'
        }}></div>
      </div>
    </div>
  );
};