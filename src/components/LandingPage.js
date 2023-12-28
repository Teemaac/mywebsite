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

      <div style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center -55px',
            height: '100vh', // Adjust as needed
            width: '100%',
            display: 'flex',
            alignItems: 'center', // Center content vertically
            justifyContent: 'flex-end', // Align content to the right
            paddingLeft: '25%', // Shift content starting from the center
        }}>
           {/* Semi-translucent Rectangle */}
           <div className="text-box">
                <p className="font-bold">
                    SOLVE PROBLEMS AND MAXIMIZE IMPACT WITH:
                    <ul>
                        <li><span className="retro-3d-text">- TECHNOLOGY</span></li>
                        <li><span className="retro-3d-text">- STRATEGY</span></li>
                        <li><span className="retro-3d-text">- PEOPLE</span></li>
                    </ul>
                </p>
            </div>



            {/* Rest of your main page content */}
            {/* Content of your main page */}
        </div>

    </div>
    
  );
};

export default LandingPage;
