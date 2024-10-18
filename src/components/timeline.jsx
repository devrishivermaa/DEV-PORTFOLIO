import React from 'react';
import TimelineItem from './timelineitem'; 
import timelineData from '../data/timeline'; 

const Timeline = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        
        <h1 className="text-lime-700 text-2xl font-bold underline mt-[-20px] mb-4">Timeline</h1>
        {timelineData.length > 0 ? (
          timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              company={item.company}
              location={item.location}
              details={item.details}
            />
          ))
        ) : (
          <p>No timeline items available</p>
        )}
      </div>
    </div>
  );
};

export default Timeline;
