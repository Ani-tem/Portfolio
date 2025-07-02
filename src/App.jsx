import React, { useState } from 'react';
import {Layout} from './components/layout/Layout';
import {BootScreen} from './components/sections/BootScreen';
import HomeSection from './components/sections/HomeSection';
import { SkillsSection } from './components/sections/SkillsSection';
import {ProjectsSection} from './components/sections/ProjectsSection';
import {AchievementsSection} from './components/sections/AchievementsSection';
import {ContactSection} from './components/sections/ContactSection';

const App = () => {
  const [currentSection, setCurrentSection] = useState('boot');
  const [bootComplete, setBootComplete] = useState(false);

  const handleBootComplete = () => {
    setBootComplete(true);
    setCurrentSection('home');
  };

  const renderSection = () => {
    switch (currentSection) {
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

  // Show boot screen with its own background and cursor
  if (currentSection === 'boot') {
    return <BootScreen onBootComplete={handleBootComplete} />;
  }

  // Show main app with layout and navigation
  return (
    <Layout 
      currentSection={currentSection} 
      onSectionChange={setCurrentSection}
    >
      {renderSection()}
    </Layout>
  );
};

export default App;