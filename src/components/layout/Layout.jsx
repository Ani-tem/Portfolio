import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import MatrixBackground from '../common/MatrixBackground';
import { ScanlinesOverlay } from '../common/ScanlinesOverlay';
import CustomCursor from '../common/CustomCursor';

export const Layout = ({ children, currentSection, onSectionChange }) => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden cursor-none">
      <CustomCursor />
      <MatrixBackground density={20} />
      <ScanlinesOverlay />
      
      <Navigation 
        currentSection={currentSection} 
        setCurrentSection={onSectionChange} 
      />
      
      <div className="pt-20 px-4 relative z-10">
        {children}
      </div>
      
      <Footer />
    </div>
  );
};