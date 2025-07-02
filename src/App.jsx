
import React, { useState, useEffect } from 'react';
import { Terminal, Code, Database, Cpu, Zap, Github, Mail, Linkedin, ChevronRight, Monitor, Activity, Wifi, Power } from 'lucide-react';

const RetroPortfolio = () => {
  const [currentSection, setCurrentSection] = useState('boot');
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [bootComplete, setBootComplete] = useState(false);
  const [matrixChars, setMatrixChars] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [glitchActive, setGlitchActive] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const bootSequence = [
    'Loading student profile...',
    'Initializing neural networks...',
    'Connecting to database...',
    'Loading portfolio modules...',
    'SYSTEM READY',
    'Welcome to Anirudh\'s Digital Domain'
  ];

  useEffect(() => {
    if (currentSection === 'boot') {
      let i = 0;
      let currentLine = 0;
      const typeInterval = setInterval(() => {
        if (currentLine < bootSequence.length) {
          if (i <= bootSequence[currentLine].length) {
            setTerminalText(bootSequence.slice(0, currentLine).join('\n') + 
                           (currentLine > 0 ? '\n' : '') + 
                           bootSequence[currentLine].substring(0, i));
            i++;
          } else {
            currentLine++;
            i = 0;
            if (currentLine === bootSequence.length) {
              setTimeout(() => {
                setBootComplete(true);
                setCurrentSection('home');
              }, 1000);
            }
          }
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
  }, [currentSection]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Optimized cursor tracking with requestAnimationFrame
  useEffect(() => {
    let animationFrame;
    
    const handleMouseMove = (e) => {
      // Cancel previous animation frame to prevent stacking
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      // Use requestAnimationFrame for smooth cursor updates
      animationFrame = requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter, { passive: true });
      el.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    });

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Matrix rain effect
  useEffect(() => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const newMatrixChars = [];
    for (let i = 0; i < 50; i++) {
      newMatrixChars.push({
        char: chars[Math.floor(Math.random() * chars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: Math.random() * 2 + 1
      });
    }
    setMatrixChars(newMatrixChars);

    const matrixInterval = setInterval(() => {
      setMatrixChars(prev => prev.map(char => ({
        ...char,
        char: chars[Math.floor(Math.random() * chars.length)],
        y: char.y > 100 ? -5 : char.y + char.speed
      })));
    }, 200);

    return () => clearInterval(matrixInterval);
  }, []);

  // Clock update
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  const skills = [
    { name: 'C/C++', level: 95, icon: Code },
    { name: 'JavaScript', level: 90, icon: Monitor },
    { name: 'React.js', level: 88, icon: Cpu },
    { name: 'Node.js', level: 90, icon: Terminal },
    { name: 'PostgreSQL', level: 85, icon: Database },
    { name: 'Python', level: 80, icon: Zap }
  ];

  const projects = [
    {
      id: 1,
      name: 'FeetInfra Construction Portal',
      tech: 'Node.js • React • PostgreSQL • JWT',
      description: 'Full-stack infrastructure management system with role-based access for Admin, Supervisor, and Engineer roles',
      status: 'COMPLETED',
      year: '2025'
    },
    {
      id: 2,
      name: 'Task-Master',
      tech: 'Node.js • Express • PostgreSQL • EJS',
      description: 'Full-stack task management app handling 100+ concurrent users with secure authentication',
      status: 'DEPLOYED',
      year: '2024'
    },
    {
      id: 3,
      name: 'Redis Clone',
      tech: 'C++ • TCP Sockets • Multithreading',
      description: 'In-memory key-value store with O(1) operations and custom binary protocol implementation',
      status: 'COMPLETED',
      year: '2025'
    },
    {
      id: 4,
      name: 'Competitive Programming',
      tech: 'C++ • Algorithms • Data Structures',
      description: 'Solved 1200+ problems across platforms with top global ranks in contests',
      status: 'ONGOING',
      year: '2022-2026'
    }
  ];

  const SkillBar = ({ skill }) => {
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

  const ProjectCard = ({ project, index }) => (
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
        <ChevronRight className="w-5 h-5 text-green-400 hover:text-cyan-400 transition-colors group-hover:animate-pulse" />
      </div>
    </div>
  );

  const Navigation = () => (
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
            {['home', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
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

  // Optimized Custom Cursor Component
  const CustomCursor = () => (
    <div 
      className="fixed pointer-events-none z-[9999] transition-none"
      style={{
        left: `${cursorPos.x - 16}px`,
        top: `${cursorPos.y - 16}px`,
        transform: 'translate3d(0, 0, 0)', // Force hardware acceleration
        willChange: 'transform'
      }}
    >
      {/* Simplified cursor design for better performance */}
      <div className={`w-8 h-8 border-2 rounded-full relative transition-all duration-150 ${
        isHovering ? 'scale-150 border-cyan-400' : 'scale-100 border-green-400'
      }`}>
        {/* Inner dot */}
        <div className={`absolute top-1/2 left-1/2 w-1 h-1 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-150 ${
          isHovering ? 'bg-cyan-400' : 'bg-green-400'
        }`}></div>
        
        {/* Simplified corner markers */}
        <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-current"></div>
        <div className="absolute -top-1 -right-1 w-2 h-2 border-r border-t border-current"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l border-b border-current"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-current"></div>
      </div>
    </div>
  );

  if (currentSection === 'boot') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden cursor-none">
        <CustomCursor />

        {/* Matrix background */}
        <div className="absolute inset-0">
          {matrixChars.map((char, index) => (
            <div
              key={index}
              className="absolute text-green-400/30 font-mono text-xs animate-pulse"
              style={{
                left: `${char.x}%`,
                top: `${char.y}%`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {char.char}
            </div>
          ))}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent animate-pulse"></div>
        
        <div className="w-full max-w-2xl relative z-10">
          <div className="bg-gray-900/95 backdrop-blur-sm border-2 border-green-400 p-8 relative overflow-hidden glow-green">
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-green-400/5 to-green-400/20 opacity-30"></div>
            
            <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap relative z-10">
              {terminalText}
              {showCursor && <span className="bg-green-400 text-black animate-pulse">█</span>}
            </pre>
            
            <div className="absolute top-2 right-2 flex space-x-1">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden cursor-none">
      <CustomCursor />

      {/* Matrix background for all pages */}
      <div className="fixed inset-0 pointer-events-none">
        {matrixChars.slice(0, 20).map((char, index) => (
          <div
            key={index}
            className="absolute text-green-400/10 font-mono text-xs"
            style={{
              left: `${char.x}%`,
              top: `${char.y}%`,
              animationDelay: `${index * 0.2}s`
            }}
          >
            {char.char}
          </div>
        ))}
      </div>

      {/* Scanlines overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-green-400/5 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-repeat-y opacity-20" style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 255, 0, 0.03) 50%)',
          backgroundSize: '100% 2px'
        }}></div>
      </div>
      <Navigation />
      
      <div className="pt-20 px-4 relative z-10">
        {currentSection === 'home' && (
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
                    Indian Institute of Information Technology Allahabad | CGPA: 7.91
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
                  <button className="bg-green-400 text-black px-6 py-3 font-mono font-bold hover:bg-cyan-400 transition-colors transform hover:scale-105">
                    VIEW_PROJECTS
                  </button>
                  <button className="border-2 border-green-400 text-green-400 px-6 py-3 font-mono font-bold hover:bg-green-400 hover:text-black transition-all transform hover:scale-105">
                    DOWNLOAD_CV
                  </button>
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
        )}

        {currentSection === 'skills' && (
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
        )}

        {currentSection === 'projects' && (
          <section className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-mono font-bold text-green-400 mb-4">PROJECTS.EXE</h2>
              <p className="text-gray-300 font-mono">COMPILED_APPLICATIONS</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </section>
        )}

        {currentSection === 'achievements' && (
          <section className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-mono font-bold text-green-400 mb-4">ACHIEVEMENTS.DAT</h2>
              <p className="text-gray-300 font-mono">PERFORMANCE_METRICS</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-900 border-2 border-green-400 p-6 hover:border-cyan-400 transition-colors">
                <h3 className="text-green-400 font-mono font-bold mb-3">🏆 COMPETITIVE EXAMS</h3>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-300">• Top 1% in JEE Mains 2022</div>
                  <div className="text-gray-300">• Top 4% in JEE Advanced 2022</div>
                  <div className="text-gray-300">• Medals in NSO, KAT, INTSO</div>
                </div>
              </div>

              <div className="bg-gray-900 border-2 border-cyan-400 p-6 hover:border-green-400 transition-colors">
                <h3 className="text-cyan-400 font-mono font-bold mb-3">🎯 CONTEST RANKS</h3>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-300">• LeetCode: Global Rank 261</div>
                  <div className="text-gray-300">• Codeforces: Global Rank 992</div>
                  <div className="text-gray-300">• CodeChef: Global Rank 508</div>
                </div>
              </div>

              <div className="bg-gray-900 border-2 border-yellow-400 p-6 hover:border-green-400 transition-colors">
                <h3 className="text-yellow-400 font-mono font-bold mb-3">🚀 HACKATHONS</h3>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-300">• Walmart SparkPlug Finalist</div>
                  <div className="text-gray-300">• GeekHaven Hackathon 3rd Place</div>
                  <div className="text-gray-300">• Tesla Senior Member</div>
                </div>
              </div>

              <div className="bg-gray-900 border-2 border-purple-400 p-6 hover:border-cyan-400 transition-colors md:col-span-2 lg:col-span-3">
                <h3 className="text-purple-400 font-mono font-bold mb-3">📊 CODING STATISTICS</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-mono font-bold text-green-400">1200+</div>
                    <div className="text-xs text-gray-300">Total Problems Solved</div>
                  </div>
                  <div>
                    <div className="text-2xl font-mono font-bold text-cyan-400">700+</div>
                    <div className="text-xs text-gray-300">LeetCode Problems</div>
                  </div>
                  <div>
                    <div className="text-2xl font-mono font-bold text-yellow-400">4⭐</div>
                    <div className="text-xs text-gray-300">CodeChef Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-mono font-bold text-purple-400">100+</div>
                    <div className="text-xs text-gray-300">Students Mentored</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

{currentSection === 'contact' && (
  <section className="max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-mono font-bold text-green-400 mb-4">CONTACT.SYS</h2>
      <p className="text-gray-300 font-mono">ESTABLISH_CONNECTION</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h3 className="text-2xl font-mono text-cyan-400">GET_IN_TOUCH</h3>
        <p className="text-gray-300">
          Ready to collaborate on exciting projects or discuss opportunities? 
          Let's connect and build something amazing together.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 border border-green-400 hover:bg-green-400/10 transition-colors cursor-pointer">
            <Mail className="w-5 h-5 text-green-400" />
            <span className="font-mono text-green-400">anirudhtemmanaboyina@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3 p-3 border border-green-400 hover:bg-green-400/10 transition-colors cursor-pointer">
            <Github className="w-5 h-5 text-green-400" />
            <span className="font-mono text-green-400">github.com/Ani-tem</span>
          </div>
          <div className="flex items-center space-x-3 p-3 border border-green-400 hover:bg-green-400/10 transition-colors cursor-pointer">
            <Linkedin className="w-5 h-5 text-green-400" />
            <span className="font-mono text-green-400">linkedin.com/in/anirudh-temmanaboyina</span>
          </div>
          <div className="flex items-center space-x-3 p-3 border border-cyan-400 hover:bg-cyan-400/10 transition-colors cursor-pointer">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span className="font-mono text-cyan-400">Phone: +91 9652939453</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border-2 border-green-400 p-6">
        <h3 className="text-green-400 font-mono font-bold mb-4">SEND_MESSAGE</h3>
        
        {/* Google Forms Integration */}
        <form 
          action="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse" 
          method="POST"
          target="_blank"
          className="space-y-4"
        >
          <input 
            type="text" 
            name="entry.YOUR_NAME_FIELD_ID"
            placeholder="Your Name"
            required
            className="w-full bg-black border border-green-400 p-3 text-green-400 font-mono focus:border-cyan-400 focus:outline-none"
          />
          <input 
            type="email" 
            name="entry.YOUR_EMAIL_FIELD_ID"
            placeholder="Your Email"
            required
            className="w-full bg-black border border-green-400 p-3 text-green-400 font-mono focus:border-cyan-400 focus:outline-none"
          />
          <textarea 
            name="entry.YOUR_MESSAGE_FIELD_ID"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full bg-black border border-green-400 p-3 text-green-400 font-mono focus:border-cyan-400 focus:outline-none resize-none"
          />
          <button 
            type="submit"
            className="w-full bg-green-400 text-black py-3 font-mono font-bold hover:bg-cyan-400 transition-colors transform hover:scale-105"
          >
            TRANSMIT_MESSAGE
          </button>
        </form>
      </div>
    </div>
  </section>
)}
      </div>
      
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

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-slide-right {
          animation: slide-right 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .glow-green {
          box-shadow: 0 0 20px rgba(0, 255, 0, 0.3), inset 0 0 20px rgba(0, 255, 0, 0.1);
        }
        .glow-cyan {
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }
        .glow-hover:hover {
          box-shadow: 0 0 30px rgba(0, 255, 0, 0.5), inset 0 0 30px rgba(0, 255, 0, 0.2);
        }
        .bg-gradient-conic {
          background: conic-gradient(from 0deg, var(--tw-gradient-stops));
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default RetroPortfolio;