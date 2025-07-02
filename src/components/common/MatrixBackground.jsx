import React from 'react';
import useMatrixEffect from '../hooks/useMatrixEffect';

const MatrixBackground = ({ isBootScreen = false }) => {
  const matrixChars = useMatrixEffect();

  const charCount = isBootScreen ? 50 : 20;
  const opacity = isBootScreen ? 'text-green-400/30' : 'text-green-400/10';

  return (
    <div className={`${isBootScreen ? 'absolute' : 'fixed'} inset-0 pointer-events-none z-0`}>
      {matrixChars.slice(0, charCount).map((char, index) => (
        <div
          key={index}
          className={`absolute ${opacity} font-mono text-xs ${isBootScreen ? 'animate-pulse' : ''}`}
          style={{
            left: `${char.x}%`,
            top: `${char.y}%`,
            animationDelay: `${index * (isBootScreen ? 0.1 : 0.2)}s`
          }}
        >
          {char.char}
        </div>
      ))}
      {isBootScreen && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent animate-pulse"></div>
      )}
    </div>
  );
};

export default MatrixBackground;