import React from 'react';

const PortfolioItem = ({ title, imgUrl, stack, link }) => {
  return (
    <div className='rounded-lg overflow-hidden transition-transform transform hover:scale-105 shadow-lg bg-gray-200 bg-opacity-30 hover:bg-opacity-80'>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imgUrl}
          alt={title}
          className='w-full h-36 md:h-48 object-cover transition-opacity duration-300 hover:opacity-90' 
        />
      </a>
      <div className='w-full p-4'>
        <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold text-stone-900 transition-colors duration-300 hover:text-black-600'>
          {title}
        </h3>
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 font-semibold text-white bg-gray-800 rounded-full shadow-md transition duration-300 hover:shadow-xl hover:scale-105" // Changed to light black background
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PortfolioItem;
