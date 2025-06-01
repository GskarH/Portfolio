import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experienceData } from '../../data/experience';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 transform md:translate-x-[-0.5px]"></div>
          
          <div className="space-y-12">
            {experienceData.map((job, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full transform translate-x-[-8px] md:translate-x-[-8px] mt-1.5"></div>
                
                {/* Date */}
                <div className={`pl-8 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="inline-flex items-center text-gray-400 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{job.period}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`pl-8 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="card text-left">  {/* Only added text-left here */}
                    <div className="flex items-center mb-2">
                      <Briefcase className="w-5 h-5 text-cyan-500 mr-2" />
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                    </div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">{job.company}</h4>
                    <p className="text-gray-300 mb-4 whitespace-pre-line">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 text-xs bg-gray-800 text-cyan-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;