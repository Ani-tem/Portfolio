import React from 'react';

export const AchievementCard = ({ achievement, index }) => {
  return (
    <div 
      className={`bg-gray-900 border-2 ${achievement.borderColor} p-6 hover:border-green-400 transition-colors animate-fade-in`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <h3 className={`${achievement.textColor} font-mono font-bold mb-3`}>
        {achievement.icon} {achievement.title}
      </h3>
      <div className="space-y-2 text-sm">
        {achievement.items.map((item, itemIndex) => (
          <div key={itemIndex} className="text-gray-300">• {item}</div>
        ))}
      </div>
    </div>
  );
};