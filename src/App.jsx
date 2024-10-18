import React from 'react';
import Intro from './components/intro';
import Timeline from './components/timeline';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import Skills from './components/skills'; 

function App() {
  return (
    <div
      className='min-h-screen py-12 px-4 sm:px-6 lg:px-8'
      style={{
        backgroundImage: `url("/assets/bg5.jpg")`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Intro />
      <Skills /> {/* Add the Skills component here */}
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 
