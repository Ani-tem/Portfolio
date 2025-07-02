import React from 'react';
import { SkillBar } from '../ui/SkillBar';
import { skills } from '../../data/skills';

export const SkillsSection = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-mono font-bold text-green-400 mb-4">SKILLS.DAT</h2>
        <p className="text-gray-300 font-mono">TECHNICAL_PROFICIENCY_LEVELS</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <SkillBar skill={skill} />
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-900 border-2 border-green-400">
        <h3 className="text-green-400 font-mono font-bold mb-4">ADDITIONAL_MODULES</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {['HTML/CSS', 'Socket.IO', 'Tailwind', 'Bootstrap', 'VS Code', 'Unix/Linux', 'TCP/IP', 'Android Studio'].map((tech) => (
            <div key={tech} className="text-cyan-400 font-mono hover:text-green-400 cursor-pointer">
              > {tech}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-gray-800 border-2 border-cyan-400">
        <h3 className="text-cyan-400 font-mono font-bold mb-4">CODING_PROFILES.LOG</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 border border-green-400 hover:bg-green-400/10 transition-colors">
            <div className="text-2xl font-mono font-bold text-green-400 mb-2">700+</div>
            <div className="text-sm text-gray-300 mb-1">LeetCode Problems</div>
            <div className="text-xs text-green-400 font-mono">KNIGHT BADGE</div>
            <div className="text-xs text-gray-400 mt-1">Global Rank: 261 (Contest 454)</div>
          </div>
          <div className="text-center p-4 border border-cyan-400 hover:bg-cyan-400/10 transition-colors">
            <div className="text-2xl font-mono font-bold text-cyan-400 mb-2">SPECIALIST</div>
            <div className="text-sm text-gray-300 mb-1">Codeforces Rating</div>
            <div className="text-xs text-cyan-400 font-mono">CONSISTENT SOLVER</div>
            <div className="text-xs text-gray-400 mt-1">Best Rank: 992 (Div-3)</div>
          </div>
          <div className="text-center p-4 border border-yellow-400 hover:bg-yellow-400/10 transition-colors">
            <div className="text-2xl font-mono font-bold text-yellow-400 mb-2">4⭐</div>
            <div className="text-sm text-gray-300 mb-1">CodeChef Rating</div>
            <div className="text-xs text-yellow-400 font-mono">HARD PROBLEMS</div>
            <div className="text-xs text-gray-400 mt-1">Best Rank: 508 (Starters 128)</div>
          </div>
        </div>
      </div>
    </section>
  );
};