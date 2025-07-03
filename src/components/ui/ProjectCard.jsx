import React from 'react';
import { ChevronRight } from 'lucide-react';

export const ProjectCard = ({ project, index }) => {
  const handleLinkClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="bg-gray-900/95 backdrop-blur-sm border-2 border-green-400 p-6 hover:border-cyan-400 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-400/30 relative overflow-hidden group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-2 left-2 w-8 h-8 border-l border-t border-green-400"></div>
        <div className="absolute top-2 right-2 w-8 h-8 border-r border-t border-green-400"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 border-l border-b border-green-400"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 border-r border-b border-green-400"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="flex justify-between items-start mb-3 relative z-10">
        <h3 className="text-green-400 font-mono text-lg font-bold group-hover:text-cyan-400 transition-colors">
          {project.name}
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-xs bg-green-400 text-black px-2 py-1 font-mono font-bold">
            {project.year}
          </span>
        </div>
      </div>
      
      <p className="text-cyan-400 font-mono text-xs mb-3 bg-cyan-400/10 px-2 py-1 border border-cyan-400/30">
        {project.tech}
      </p>
      
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex justify-between items-center relative z-10">
        <span className={`text-xs font-mono px-3 py-1 border font-bold ${
          project.status === 'COMPLETED' ? 'bg-green-400 text-black border-green-400' :
          project.status === 'LIVE' ? 'bg-cyan-400 text-black border-cyan-400' :
          project.status === 'DEPLOYED' ? 'bg-blue-400 text-black border-blue-400' :
          'bg-yellow-400 text-black border-yellow-400'
        }`}>
          {project.status}
        </span>
        
        <div className="flex items-center space-x-2">
          {project.link?.live && (
            <button 
              onClick={() => handleLinkClick(project.link.live)}
              className="text-xs bg-cyan-400 text-black px-2 py-1 font-mono font-bold hover:bg-cyan-300 transition-colors"
            >
              LIVE
            </button>
          )}
          {project.link?.github && (
            <button 
              onClick={() => handleLinkClick(project.link.github)}
              className="text-xs bg-green-400 text-black px-2 py-1 font-mono font-bold hover:bg-green-300 transition-colors"
            >
              CODE
            </button>
          )}
          {project.link?.leetcode && (
            <button 
              onClick={() => handleLinkClick(project.link.leetcode)}
              className="text-xs bg-yellow-400 text-black px-2 py-1 font-mono font-bold hover:bg-yellow-300 transition-colors"
            >
              LEETCODE
            </button>
          )}
          {project.link?.codeforces && (
            <button 
              onClick={() => handleLinkClick(project.link.codeforces)}
              className="text-xs bg-blue-400 text-black px-2 py-1 font-mono font-bold hover:bg-blue-300 transition-colors"
            >
              CODEFORCES
            </button>
          )}
          <ChevronRight className="w-5 h-5 text-green-400 hover:text-cyan-400 transition-colors group-hover:animate-pulse" />
        </div>
      </div>
    </div>
  );
};