// File: src/components/hooks/useBootSequence.js
import { useState, useEffect, useCallback } from 'react';

export const useBootSequence = (onBootComplete) => {
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [bootComplete, setBootComplete] = useState(false);

  const bootSequence = [
    'Loading student profile...',
    'Initializing neural networks...',
    'Connecting to database...',
    'Loading portfolio modules...',
    'Analyzing skill matrices...',
    'Calibrating creative algorithms...',
    'SYSTEM READY',
    'Welcome to Anirudh\'s Digital Domain'
  ];

  const memoizedOnBootComplete = useCallback(onBootComplete, [onBootComplete]);

  useEffect(() => {
    let i = 0;
    let currentLine = 0;
    let isMounted = true;

    const typeInterval = setInterval(() => {
      if (!isMounted) return;

      if (currentLine < bootSequence.length) {
        if (i <= bootSequence[currentLine].length) {
          const currentText = bootSequence.slice(0, currentLine).join('\n') + 
                             (currentLine > 0 ? '\n' : '') + 
                             bootSequence[currentLine].substring(0, i);
          setTerminalText(currentText);
          i++;
        } else {
          currentLine++;
          i = 0;
          if (currentLine === bootSequence.length) {
            setTimeout(() => {
              if (isMounted) {
                setBootComplete(true);
                if (memoizedOnBootComplete) {
                  memoizedOnBootComplete();
                }
              }
            }, 1500);
          }
        }
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    return () => {
      isMounted = false;
      clearInterval(typeInterval);
    };
  }, [memoizedOnBootComplete]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 600);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return { terminalText, showCursor, bootComplete };
};