// Animation helpers
export const getRandomDelay = (max = 1000) => {
    return Math.random() * max;
  };
  
  export const getRandomChar = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return chars[Math.floor(Math.random() * chars.length)];
  };
  
  // Color utilities
  export const getColorByStatus = (status) => {
    const colorMap = {
      'COMPLETED': 'bg-green-400 text-black border-green-400',
      'LIVE': 'bg-cyan-400 text-black border-cyan-400',
      'DEPLOYED': 'bg-blue-400 text-black border-blue-400',
      'ONGOING': 'bg-yellow-400 text-black border-yellow-400',
      'default': 'bg-gray-400 text-black border-gray-400'
    };
    return colorMap[status] || colorMap.default;
  };
  
  export const getBorderColorByType = (type) => {
    const colorMap = {
      'green': 'border-green-400 hover:border-cyan-400',
      'cyan': 'border-cyan-400 hover:border-green-400',
      'yellow': 'border-yellow-400 hover:border-green-400',
      'purple': 'border-purple-400 hover:border-cyan-400',
      'default': 'border-green-400 hover:border-cyan-400'
    };
    return colorMap[type] || colorMap.default;
  };
  
  export const getTextColorByType = (type) => {
    const colorMap = {
      'green': 'text-green-400',
      'cyan': 'text-cyan-400',
      'yellow': 'text-yellow-400',
      'purple': 'text-purple-400',
      'default': 'text-green-400'
    };
    return colorMap[type] || colorMap.default;
  };
  
  // Performance utilities
  export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  
  export const throttle = (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };
  
  // Matrix effect utilities
  export const generateMatrixChar = () => {
    return {
      char: getRandomChar(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.5
    };
  };
  
  export const updateMatrixChar = (char) => {
    return {
      ...char,
      char: getRandomChar(),
      y: char.y > 100 ? -5 : char.y + char.speed
    };
  };
  
  // Typing effect utilities
  export const typeText = (text, callback, speed = 50) => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        callback(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return timer;
  };
  
  // Time utilities
  export const formatUptime = (seconds) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (days > 0) return `${days}d ${hours}h ${minutes}m`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    if (minutes > 0) return `${minutes}m ${secs}s`;
    return `${secs}s`;
  };
  
  export const getCurrentTimeString = () => {
    return new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };
  
  // Validation utilities
  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validateRequired = (value) => {
    return value && value.trim().length > 0;
  };
  
  // Animation utilities
  export const createStaggeredAnimation = (elements, delay = 100) => {
    elements.forEach((element, index) => {
      element.style.animationDelay = `${index * delay}ms`;
    });
  };
  
  export const addHoverEffect = (element, className) => {
    element.addEventListener('mouseenter', () => {
      element.classList.add(className);
    });
    
    element.addEventListener('mouseleave', () => {
      element.classList.remove(className);
    });
  };
  
  // Local storage utilities (for future use when moving to own environment)
  export const saveToStorage = (key, value) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.warn('LocalStorage not available');
    }
  };
  
  export const getFromStorage = (key, defaultValue = null) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      }
    } catch (error) {
      console.warn('LocalStorage not available');
    }
    return defaultValue;
  };
  
  // URL utilities
  export const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  export const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      return false;
    }
  };