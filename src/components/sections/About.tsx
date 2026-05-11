import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="mx-auto px-4 w-full"> {/* Full width container */}
        <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
        
        <div className="w-full"> {/* Full width content */}
          <div className="text-lg text-gray-300 space-y-6">
            <p className="w-full">
              Passionate, logical, and solution-focused cybersecurity professional with over 6 years of proven expertise in a fast-paced, competitive environment, providing crucial technical support to project teams, clients, and government initiatives. 
            </p>
            <p className="w-full">              
              Additionally, a graduate with Master of Science in Security by Design, equipped with advanced knowledge and hands-on experience to fortify cybersecurity frameworks. Committed to elevating data protection standards and safeguarding against emerging threats while ensuring compliance with industry best practices. 
            </p>
            <p className="w-full">
              My approach combines technical expertise with strategic thinking to create comprehensive security solutions. I stay up-to-date with the latest threats and technologies, ensuring that the systems I protect remain secure in an ever-evolving threat landscape.
            </p>
            <p className="w-full">
              When I'm not fortifying digital fortresses, you can find me exploring new technologies,
              participating in CTF competitions, and contributing to the cybersecurity community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
