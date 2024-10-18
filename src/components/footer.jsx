import React from 'react';

const Footer = () => {
  return (
    <div className="py-5 text-center">
      {/* #social icons */}
      <p className='text-white mt-2 opacity-80'>
        &copy; {new Date().getFullYear()} Dev Rishi. All rights reserved.
      </p>
    </div>
  )
}

export default Footer;
