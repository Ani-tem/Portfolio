import React from 'react';
import { Monitor } from 'lucide-react';

const HomeSection = ({ onSectionChange }) => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-6xl font-mono font-bold">
              <span className="text-green-400">ANIRUDH</span>
            </h1>
            <h2 className="text-2xl font-mono text-cyan-400">
              > TEMMANABOYINA.EXE
            </h2>
            <p className="text-lg text-gray-300 font-mono">
              Indian Institute of Information Technology Allahabad | CGPA: 8.06
            </p>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p className="text-lg leading-relaxed">
              Competitive programmer and full-stack developer with expertise in system design 
              and algorithms. Top 1% in JEE Mains 2022, solving 1200+ coding problems across platforms.
            </p>
            <div className="flex space-x-4 flex-wrap">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-mono text-sm">LeetCode Knight</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="font-mono text-sm">Codeforces Specialist</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="font-mono text-sm">CodeChef 4⭐</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button 
              onClick={() => onSectionChange('projects')}
              className="bg-green-400 text-black px-6 py-3 font-mono font-bold hover:bg-cyan-400 transition-colors transform hover:scale-105"
            >
              VIEW_PROJECTS
            </button>

            <a 
            href= 'https://drive.google.com/file/d/1uORvGNB_MJMTb5UptCaOk1L2P-nuxAna/view?usp=drive_link'
            className="border-2 border-green-400 text-green-400 px-6 py-3 font-mono font-bold hover:bg-green-400 hover:text-black transition-all transform hover:scale-105">
              DOWNLOAD_CV
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-green-400/20 via-cyan-400/10 to-purple-400/20 rounded-lg border-2 border-green-400 flex items-center justify-center relative overflow-hidden glow-green">
              {/* Holographic effect */}
              <div className="absolute inset-0 bg-gradient-conic from-green-400/20 via-cyan-400/20 to-purple-400/20 animate-spin-slow opacity-30"></div>
              
              {/* Circuit pattern */}
              <div className="absolute inset-4 border border-cyan-400/30">
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-green-400"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-green-400"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-green-400"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-green-400"></div>
              </div>
              
              <div className="text-center relative z-10">
                <Monitor className="w-20 h-20 text-green-400 mx-auto mb-4 animate-pulse" />
                <p className="text-green-400 font-mono text-lg font-bold">SYSTEM_ACTIVE</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute top-10 -left-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 right-10 w-6 h-6 bg-purple-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
