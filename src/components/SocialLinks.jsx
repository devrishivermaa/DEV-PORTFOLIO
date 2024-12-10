import React from 'react';
import cvImage from '/assets/cv.png'; 
import linkedinImage from '/assets/linkedin.png'; 
import githubImage from '/assets/github2.png'; 

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6 mt-8 relative">
      <div className="relative group">
        <a 
          href="/assets/Dev Rishi_Verma_CV.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Resume"
        >
          <img 
            src={cvImage} 
            alt="Resume" 
            className="w-8 h-8 md:w-10 md:h-10 transition-transform transform hover:scale-110" 
          />
        </a>
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max p-2 bg-black text-white text-sm rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Download Resume
        </span>
      </div>
      
      <div className="relative group">
        <a 
          href="https://www.linkedin.com/in/dev-rishi-verma-7b5684249/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
        >
          <img 
            src={linkedinImage} 
            alt="LinkedIn" 
            className="w-8 h-8 md:w-10 md:h-10 transition-transform transform hover:scale-110" 
          />
        </a>
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max p-2 bg-black text-white text-sm rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          LinkedIn Profile
        </span>
      </div>
      
      <div className="relative group">
        <a 
          href="https://github.com/devrishivermaa" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
        >
          <img 
            src={githubImage} 
            alt="GitHub" 
            className="w-8 h-8 md:w-10 md:h-10 transition-transform transform hover:scale-110" 
          />
        </a>
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max p-2 bg-black text-white text-sm rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          GitHub Profile
        </span>
      </div>
    </div>
  );
};

export default SocialLinks;
