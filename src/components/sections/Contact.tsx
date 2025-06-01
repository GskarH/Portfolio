import React from 'react';
import { Mail, Github, Linkedin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="section-title">Get In Touch</h2>
        
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Feel free to reach out if you have any questions about cybersecurity, 
          project proposals, or just want to connect. I'm always open to discussing 
          new opportunities and challenges in the field.
        </p>
        
        <div className="flex justify-center items-center space-x-8">
          <a 
            href="mailto:gbprofficial@gmail.com" 
            className="contact-link group"
            title="Email"
          >
            <div className="p-4 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
              <Mail className="w-6 h-6 text-cyan-500" />
            </div>
          </a>
          
          <a 
            href="https://github.com/GskarH" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link group"
            title="GitHub"
          >
            <div className="p-4 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
              <Github className="w-6 h-6 text-cyan-500" />
            </div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/gbofficial/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link group"
            title="LinkedIn"
          >
            <div className="p-4 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
              <Linkedin className="w-6 h-6 text-cyan-500" />
            </div>
          </a>
        </div>
        
        <p className="text-gray-400 mt-8">
          Based in Singapore, SG
        </p>
      </div>
    </section>
  );
};

export default Contact;