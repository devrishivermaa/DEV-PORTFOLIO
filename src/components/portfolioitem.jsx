import React from 'react';

const PortfolioItem = ({ imgUrl, link }) => {
  return (
    <div className='rounded-lg overflow-hidden transition-transform transform hover:scale-105 shadow-lg bg-gray-200 bg-opacity-30 hover:bg-opacity-80'>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imgUrl}
          alt="Portfolio Item"
          className='w-full h-48 md:h-64 object-cover transition-opacity duration-300 hover:opacity-90' 
        />
      </a>
    </div>
  );
};

export default PortfolioItem;
