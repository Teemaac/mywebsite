import React from 'react';
import Greeting from './Greeting';
import Navbar from './Header'; // Assuming you have a Navbar component
import backgroundImage from '../assets/HeadshotBackground.png';

const LandingPage = () => {
  const greetings = ['HOLA', 'こんにちは', 'HELLO', 'مرحبًا', 'BONJOUR', 'नमस्ते', 'OLÁ', 'привет', 'হ্যালো', 'HOLA', 'こんにちは', 'HELLO', 'مرحبًا', 'BONJOUR', 'नमस्ते', 'OLÁ', 'привет', 'হ্যালো']; // Add more greetings as needed

  const handleHomeClick = () => {
    window.location.href = '/'; // Redirect to home page (root)
  };

  // Define scrollToSection inside the component
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  };

  return (
    <div className="relative text-center bg-primary text-darkgrey">


      {/* Scrolling Greeting at the Top */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="ticker">
          {greetings.map((lang, index) => (
            <Greeting key={index} language={lang} />
          ))}
          {greetings.map((lang, index) => (
            <Greeting key={`duplicate-${index}`} language={lang} />
          ))}
        </div>
      </div>

      {/* "My name is" text */}
      <div className="mt-5 text-l"></div>

      {/* Navbar component */}
      <Navbar />

          <div className="timeline-container">
                {/* Navigation Arrows */}
                <button onClick={() => scrollToSection('past')} className="arrow left-arrow">&#8592;</button>
                <button onClick={() => scrollToSection('future')} className="arrow right-arrow">&#8594;</button>

                {/* Sections */}
                <section id="past" className="timeline-section">
                    {/* Content for the "Past" section */}
                </section>

                <section id="present" className="timeline-section">
                    {/* Content for the "Present" section */}
                </section>

                <section id="future" className="timeline-section">
                    {/* Content for the "Future" section */}
                </section>
            </div>

    </div>
    
  );
};

export default LandingPage;
