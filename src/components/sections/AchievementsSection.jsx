import React from 'react';
import { AchievementCard } from '../ui/AchievementCard';
import { achievements } from '../../data/achievements';

export const AchievementsSection = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-mono font-bold text-green-400 mb-4">ACHIEVEMENTS.DAT</h2>
        <p className="text-gray-300 font-mono">PERFORMANCE_METRICS</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.cards.map((achievement, index) => (
          <AchievementCard key={achievement.id} achievement={achievement} index={index} />
        ))}

        <div className="bg-gray-900 border-2 border-purple-400 p-6 hover:border-cyan-400 transition-colors md:col-span-2 lg:col-span-3">
          <h3 className="text-purple-400 font-mono font-bold mb-3">📊 CODING STATISTICS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {achievements.statistics.map((stat, index) => (
              <div key={index}>
                <div className={`text-2xl font-mono font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};