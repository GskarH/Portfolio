import React from 'react';
import { skillsData } from '../../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-4">
                <category.icon className="w-6 h-6 text-cyan-500 mr-3" />
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;