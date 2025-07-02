import React from 'react';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export const ProjectsSection = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-mono font-bold text-green-400 mb-4">PROJECTS.EXE</h2>
        <p className="text-gray-300 font-mono">COMPILED_APPLICATIONS</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};