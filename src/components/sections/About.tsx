import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12"> 
          <div className="md:w-2/3">
            <p className="text-lg text-gray-300 mb-6 text-justify">
              Passionate, logical, and solution-focused cybersecurity professional with over 5 years of proven expertise in a fast-paced, competitive environment, providing crucial technical support to project teams, clients, and government initiatives. 
            </p>
            <p className="text-lg text-gray-300 mb-6 text-justify">              
              Additionally, a graduate with Master of 
              Science in Security by Design, equipped with advanced knowledge and hands-on experience to fortify cybersecurity frameworks. Committed to elevating data protection standards and safeguarding against emerging threats while ensuring compliance with industry best practices. 
            </p>
            <p className="text-lg text-gray-300 mb-6 text-justify">
              My approach combines technical expertise with strategic thinking to create comprehensive security solutions. I stay up-to-date with the latest threats and technologies, ensuring that the systems I protect remain secure in an ever-evolving threat landscape.
            </p>
            <p className="text-lg text-gray-300 mb-6 text-justify">
              When I'm not fortifying digital fortresses, you can find me exploring new technologies,
              participating in CTF competitions, and contributing to the cybersecurity community.
            </p>
          </div> 
          
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-lg">
              <img 
                src="src/components/sections/JustImage.png" 
                alt="Gowtham"
                className="absolute bottom-0 w-full h-auto max-h-[80vh] object-cover transition-opacity duration-300 hover:opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
