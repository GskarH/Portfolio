import React, { useEffect, useState } from 'react';
import { ChevronDown, ShieldCheck, Fingerprint } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "   Cybersecurity Consultant";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 10 }).map((_, index) => (
            <div 
              key={index}
              className="absolute text-cyan-500 font-mono text-opacity-20 select-none"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 1 + 0.5}rem`,
                animation: `fadeIn ${Math.random() * 5 + 2}s infinite alternate ${Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? '0' : '1'}
            </div>
          ))}
        </div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex items-center justify-center">
            <Fingerprint className="h-16 w-16 text-cyan-500" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
            Hi, I'm <span className="text-cyan-400 glow-text">Gowtham</span>
          </h1>

          <div className="h-8 mb-8 font-mono">
            <span className="text-xl md:text-2xl text-gray-300">&gt; {displayText}</span>
            <span className="inline-block w-2 h-5 bg-cyan-400 ml-1 animate-terminal-cursor"></span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;