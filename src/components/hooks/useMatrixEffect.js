// File: src/components/hooks/useMatrixEffect.js
import { useState, useEffect } from 'react';

const useMatrixEffect = () => {
  const [matrixChars, setMatrixChars] = useState([]);

  useEffect(() => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const newMatrixChars = [];
    
    // Initialize characters
    for (let i = 0; i < 100; i++) {
      newMatrixChars.push({
        char: chars[Math.floor(Math.random() * chars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2
      });
    }
    setMatrixChars(newMatrixChars);

    // Animate characters
    const matrixInterval = setInterval(() => {
      setMatrixChars(prev => prev.map(char => ({
        ...char,
        char: Math.random() > 0.95 ? chars[Math.floor(Math.random() * chars.length)] : char.char,
        y: char.y > 105 ? -10 : char.y + char.speed,
        x: char.y > 105 ? Math.random() * 100 : char.x
      })));
    }, 100);

    return () => clearInterval(matrixInterval);
  }, []);

  return matrixChars;
};

export default useMatrixEffect;