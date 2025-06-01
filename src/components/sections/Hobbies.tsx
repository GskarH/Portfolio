import React from 'react';
import { hobbiesData } from '../../data/hobbies';

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container">
        <h2 className="section-title">Hobbies & Interests</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <p className="text-lg text-gray-300 mb-6">
              Beyond my professional life as a cybersecurity expert, I pursue various interests 
              that help me maintain a balanced lifestyle and continuously expand my horizons.
            </p>
            <p className="text-lg text-gray-300">
              These activities not only provide a refreshing break from the digital world
              but also enhance my creativity and problem-solving abilities in unexpected ways.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {hobbiesData.map((hobby, index) => (
                <div 
                  key={index} 
                  className="card hover:bg-gray-800/50 transition-colors duration-300"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <hobby.icon className="w-6 h-6 text-cyan-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{hobby.name}</h3>
                      <p className="text-gray-400">{hobby.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;