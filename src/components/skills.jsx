import React from 'react';
import skills from '../data/skills'; 

const Skills = () => {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <h2 className='text-center text-3xl font-bold mb-6 text-lime-600'>My Skills</h2>
      <div className='flex justify-center'>
        <div className='flex flex-wrap justify-center items-center bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg p-4 max-w-md'>
          {skills.map((skill, index) => (
            <div key={index} className='relative m-2 group flex flex-col items-center'>
              <img 
                src={skill.logo} 
                alt={skill.name} 
                className='h-16 w-16 p-2 transition-transform transform group-hover:scale-125 rounded-full border border-white shadow-md group-hover:shadow-lg' 
              />
              <span className='text-center text-gray-800 font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
