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
        Pre-Final Year CS & AI
      </p>
      
      {/* Description */}
      <p className='text-sm max-w-xl mb-6 font-semibold text-gray-400'>
      I'm a third-year Computer Science student studying deep learning and quantum computing. I'm fascinated by the fact that DL&QC brings maths to life and allows us to compute things that don't seem to be computable. I create projects, which challenges me to move outside of my comfort zone since even if I fail, I will have learnt a lot from it. Beyond that, I love building cool stuff simply because it's exciting to bring ideas to life and see them work. Other than academics and projects, I play a lot of video games for fun and sometimes design them. I’m also a public speaker and storyteller, enjoying the chance to connect with people and share engaging stories.

I am actively looking for internships and opportunities where I can learn a lot and where the team is motivated not only by money but also by the desire to create something awesome for people to use. I bring a strong work ethic, creativity, and a drive to tackle challenging problems.
</p>

      <SocialLinks /> {/* Add SocialLinks component */}
    </div>
  );
}

export default Intro;
