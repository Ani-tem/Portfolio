// File: src/components/hooks/useBootSequence.js
import { useState, useEffect, useCallback } from 'react';

export const useBootSequence = (onBootComplete) => {
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [bootComplete, setBootComplete] = useState(false);

  const bootSequence = [
    'Connecting to database...',
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
            }, 15);
          }
        }
      } else {
        clearInterval(typeInterval);
      }
    }, 20);

    return () => {
      isMounted = false;
      clearInterval(typeInterval);
    };
  }, [memoizedOnBootComplete]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 6);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return { terminalText, showCursor, bootComplete };
};