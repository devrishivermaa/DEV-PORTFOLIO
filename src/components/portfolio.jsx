import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './portfolioitem';

const Portfolio = () => {
  return (
    <div className='flex flex-col items-center justify-center my-12'>
      {/* Title at the top */}
      <h2 className='text-center text-3xl md:text-4xs font-bold text-lime-600 mb-6'>
        What I Create
      </h2>

      {/* Portfolio Items */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {portfolio.map((project) => (
          <PortfolioItem
            key={project.title} 
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>

      {/* Link to more projects */}
      <div className='mt-8'>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='text-black-700 underline hover:text-green-700'
        >
          Click for more projects
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
