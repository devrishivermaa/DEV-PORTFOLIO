import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className='flex justify-center items-center'>
        <form 
          action='https://getform.io/f/bkkgojjb'
          method='POST'
          className='flex flex-col w-full md:w-7/12' 
        >
          <h1 className="text-lime-600 text-2xl font-bold">Contact me</h1>

          <label htmlFor="name" className=' text-yellow-700 mb-2'>Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className='p-2 border rounded'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.25)', 
              border: '1px solid rgba(0, 0, 0, 0.2)',
            }} 
          />
          
          <label htmlFor="email" className=' text-yellow-700 mb-2 mt-4'>Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className='p-2 border rounded'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.25)', 
              border: '1px solid rgba(0, 0, 0, 0.2)', 
            }} 
          />
          
          <label htmlFor="message" className=' text-yellow-700 mb-2 mt-4'>Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            required 
            className='p-2 border rounded'
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.25)', 
              border: '1px solid rgba(0, 0, 0, 0.2)', 
            }} 
          />
          
          <button 
            type="submit" 
            className='mt-4 bg-gradient-to-r from-[#556B2F] to-[#808000] text-white p-2 rounded hover:from-[#6B8E23] hover:to-[#9ACD32] opacity-75 transform scale-75 hover:opacity-90'
            style={{
              width: '25%', 
              transition: 'all 0.3s ease',
              marginLeft: '-20px', 
            }}
          >
            Send
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
