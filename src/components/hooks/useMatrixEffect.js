import { useState, useEffect } from 'react';

const useMatrixEffect = () => {
  const [matrixChars, setMatrixChars] = useState([]);

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

  return matrixChars;
};

export default useMatrixEffect;