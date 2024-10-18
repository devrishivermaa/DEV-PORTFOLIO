import React from 'react';
import pfp from '/assets/pfp.png'; 
import SocialLinks from './SocialLinks'; 

const Intro = () => {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <img
        src={pfp}
        alt="Profile"
        className='w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-green-900 shadow-lg mb-4' 
      />
      {/* Name */}
      <h1 className='text-4xl md:text-7xl mb-2 md:mb-4 font-bold text-lime-600 transition-transform transform hover:scale-105'>
        Dev Rishi Verma
      </h1>
      
      {/* Title */}
      <p className='text-base md:text-xl mb-2 font-medium text-gray-400'>
        Pre-Final Year Student Specializing in Machine Learning
      </p>
      
      {/* Description */}
      <p className='text-sm max-w-xl mb-6 font-semibold text-gray-400'>
        I'm a third-year Computer Science student at JK Lakshmipat University in Jaipur, studying deep learning and quantum computing. I'm drawn in by how modern innovations can completely redefine what's possible, and I enjoy getting my hands dirty on projects that need me to think outside the box. My journey is all about pushing myself and discovering new ideas, with the ultimate objective of pursuing a career that combines my curiosity and passion for technology in a meaningful way.
      </p>

      <SocialLinks /> {/* Add SocialLinks component */}
    </div>
  );
}

export default Intro;
