import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import './styles/animations.css';

// Performance monitoring (optional)
if (process.env.NODE_ENV === 'development') {
  console.log('🚀 RetroPortfolio loaded in development mode');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);