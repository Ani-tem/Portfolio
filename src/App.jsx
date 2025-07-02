import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import BootScreen from './components/sections/BootScreen';
import HomeSection from './components/sections/HomeSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import AchievementsSection from './components/sections/AchievementsSection';
import ContactSection from './components/sections/ContactSection';
import CustomCursor from './components/common/CustomCursor';
import MatrixBackground from './components/common/MatrixBackground';
import ScanlinesOverlay from './components/common/ScanlinesOverlay';

const App = () => {
  const [currentSection, setCurrentSection] = useState('boot');
  const [bootComplete, setBootComplete] = useState(false);

  const renderSection = () => {
    switch (currentSection) {
      case 'boot':
        return <BootScreen onBootComplete={() => {
          setBootComplete(true);
          setCurrentSection('home');
        }} />;
      case 'home':
        return <HomeSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'achievements':
        return <AchievementsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  if (currentSection === 'boot') {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden cursor-none">
        <CustomCursor />
        <MatrixBackground />
        <BootScreen onBootComplete={() => {
          setBootComplete(true);
          setCurrentSection('home');
        }} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden cursor-none">
      <CustomCursor />
      <MatrixBackground />
      <ScanlinesOverlay />
      <Layout currentSection={currentSection} setCurrentSection={setCurrentSection}>
        {renderSection()}
      </Layout>
    </div>
  );
};

export default App;