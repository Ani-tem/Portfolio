import { Code, Monitor, Cpu, Terminal, Database, Zap } from 'lucide-react';

export const skills = [
  { name: 'C/C++', level: 95, icon: Code },
  { name: 'JavaScript', level: 90, icon: Monitor },
  { name: 'React.js', level: 88, icon: Cpu },
  { name: 'Node.js', level: 90, icon: Terminal },
  { name: 'PostgreSQL', level: 85, icon: Database },
  { name: 'Python', level: 80, icon: Zap }
];

export const additionalTech = [
  'HTML/CSS', 'Socket.IO', 'Tailwind', 'Bootstrap', 
  'VS Code', 'Unix/Linux', 'TCP/IP', 'Android Studio'
];

export const codingProfiles = [
  {
    platform: 'LeetCode',
    problems: '700+',
    badge: 'KNIGHT BADGE',
    achievement: 'Global Rank: 261 (Contest 454)',
    color: 'green'
  },
  {
    platform: 'Codeforces',
    problems: 'SPECIALIST',
    badge: 'CONSISTENT SOLVER',
    achievement: 'Best Rank: 992 (Div-3)',
    color: 'cyan'
  },
  {
    platform: 'CodeChef',
    problems: '4⭐',
    badge: 'HARD PROBLEMS',
    achievement: 'Best Rank: 508 (Starters 128)',
    color: 'yellow'
  }
];