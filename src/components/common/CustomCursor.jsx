import React from 'react';
import useCursor from '../hooks/useCursor';

const CustomCursor = () => {
  const { cursorPos, isHovering } = useCursor();

  return (
    <div 
      className="fixed pointer-events-none z-[9999] transition-none"
      style={{
        left: `${cursorPos.x - 16}px`,
        top: `${cursorPos.y - 16}px`,
        transform: 'translate3d(0, 0, 0)',
        willChange: 'transform'
      }}
    >
      <div className={`w-8 h-8 border-2 rounded-full relative transition-all duration-150 ${
        isHovering ? 'scale-150 border-cyan-400' : 'scale-100 border-green-400'
      }`}>
        {/* Inner dot */}
        <div className={`absolute top-1/2 left-1/2 w-1 h-1 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-150 ${
          isHovering ? 'bg-cyan-400' : 'bg-green-400'
        }`}></div>
        
        {/* Corner markers */}
        <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-current"></div>
        <div className="absolute -top-1 -right-1 w-2 h-2 border-r border-t border-current"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l border-b border-current"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-current"></div>
      </div>
    </div>
  );
};

export default CustomCursor;