import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { educationData } from '../../data/education';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-cyan-500" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <div className="flex items-center text-cyan-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg text-cyan-400 mb-2">{edu.institution}</h4>
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                  
                  {edu.achievements && (
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {edu.achievements.map((achievement, i) => {
                        // Split the achievement at the colon if it's the research intern line
                        if (achievement.includes('Research Intern at Illinois Singapore:')) {
                          const [prefix, ...rest] = achievement.split(':');
                          return (
                            <li key={i}>
                              <strong>{prefix}:</strong>{rest.join(':')}
                            </li>
                          );
                        }
                        return <li key={i}>{achievement}</li>;
                      })}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;