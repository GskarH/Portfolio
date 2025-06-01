import React, { useState } from 'react';
import { ExternalLink, Github, Lock } from 'lucide-react';
import { projectsData } from '../../data/projects';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', ...new Set(projectsData.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-cyan-500 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="card group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-md mb-4 bg-gray-800 aspect-video">
                {/* Project image or placeholder */}
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Lock className="w-12 h-12 text-gray-600" />
                  </div>
                )}
                
                {/* Category badge */}
                <span className="absolute top-2 right-2 px-3 py-1 text-xs bg-gray-900/80 text-cyan-400 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4 mt-auto pt-2">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span>Live</span>
                  </a>
                )}
                
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Github size={16} className="mr-1" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;