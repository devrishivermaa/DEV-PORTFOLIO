import React from 'react';

const TimelineItem = ({ year, title, company, location, details }) => {
  return (
    <ol className='flex flex-col md:flex-row relative'>
      <li className="mb-10 ml-4">
        {/* Timeline Indicator */}
        <div className='absolute w-4 h-4 bg-gradient-to-r from-[#556B2F] to-[#808000]500 rounded-full mt-1.5 -left-1.5 shadow-md'></div>
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          {/* Year Badge */}
          <span className="inline-block px-3 py-1 font-semibold text-black bg-gradient-to-r from-[#556B2F] to-[#808000] rounded-full shadow-md">{year}</span>
          {/* Title */}
          <span className="text-lg font-semibold text-gray-100">{title}</span>
          {/* Company and Location */}
          <span className="my-1 text-sm font-normal text-gray-300">{company} - {location}</span>
        </p>
        {/* Details */}
        <p className="my-2 text-base font-semi-bold text-gray-200">{details}</p>
      </li>
    </ol>
  );
}

export default TimelineItem;
