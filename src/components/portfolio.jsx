import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './portfolioitem';

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center my-12 px-4 md:px-12">
      {/* Title at the top */}
      <h2 className="text-center text-4xl font-semibold text-lime-600 mb-4 md:mb-6 tracking-wide opacity-70 transition-all duration-300 ease-in-out transform hover:scale-105">
        What I Create
      </h2>

      {/* Portfolio Items (including the 5th item as part of the grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {portfolio.slice(0, 5).map((project, index) => (
          <PortfolioItem
            key={project.title}
            imgUrl={project.imgUrl}
            title={project.title}
            link={project.link}
            className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg w-full"
          />
        ))}
      </div>

      {/* Link to more projects */}
      <div className="mt-8 text-center">
        <a
          href="https://github.com/devrishivermaa?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-white-800 underline hover:text-lime-600 opacity-80 transition-all duration-200 ease-in-out transform hover:scale-105"
        >
          Click here for more
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
