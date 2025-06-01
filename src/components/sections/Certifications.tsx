import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certificationsData } from '../../data/certifications';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-950">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <div key={index} className="card hover:border-cyan-500/30">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <Award className="w-6 h-6 text-cyan-500" />
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                  <div className="flex items-center text-cyan-400 text-sm mb-3">
                    <Calendar size={14} className="mr-1" />
                    <span>{cert.issued}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{cert.organization}</p>
                  
                  {cert.url && (
                    <a 
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span className="mr-1">View Certificate</span>
                      <ExternalLink size={14} />
                    </a>
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

export default Certifications;