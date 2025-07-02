import { useState, useEffect } from 'react';

const useCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationFrame;
    
    const handleMouseMove = (e) => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      animationFrame = requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    
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

  return { cursorPos, isHovering };
};

export default useCursor;