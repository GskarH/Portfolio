import React from 'react';
import { Github, Linkedin, Mail, Twitter, Shield, Fingerprint  } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/80 border-t border-gray-800 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Fingerprint className="w-6 h-6 text-cyan-500 mr-2" />
            <span className="text-xl font-bold terminal-text">Gowtham Baskar<span className="text-white"></span></span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Designed by Gowtham</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;