import { useState, useEffect } from 'react';

export const useBootSequence = (onBootComplete) => {
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [bootComplete, setBootComplete] = useState(false);

  const bootSequence = [
    'Loading student profile...',
    'Initializing neural networks...',
    'Connecting to database...',
    'Loading portfolio modules...',
    'SYSTEM READY',
    'Welcome to Anirudh\'s Digital Domain'
  ];

  useEffect(() => {
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
              if (onBootComplete) onBootComplete();
            }, 1000);
          }
        }
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [onBootComplete]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return { terminalText, showCursor, bootComplete };
};