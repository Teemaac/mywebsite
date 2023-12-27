import React from 'react';

const Header = () => {
    const handleHomeClick = () => {
        window.location.href = '/'; // Redirect to the homepage
    };

    

    return (
        <header className="bg-primary text-darkgrey">
            {/* "Trevor McEachern" as a large, centered title */}
            <div className="text-center">
                <button onClick={handleHomeClick} className="font-bold text-4xl md:text-6xl lg:text-6xl my-4 retro-3d-text">
                    TREVOR MCEACHERN
                </button>
            </div>

            {/* Navigation Links */}
            <div className="container mx-auto p-5 flex justify-center items-center">
                <nav className="flex gap-x-8">
                    <a href="#resume" className="hover:text-secondary text-xl font-bold">RESUME</a>
                    <a href="#code" className="hover:text-secondary text-xl font-bold">CODE</a>
                    <a href="#housing" className="hover:text-secondary text-xl font-bold">REAL ESTATE</a>
                    <a href="#fun-facts" className="hover:text-secondary text-xl font-bold">FUN FACTS</a>
                    <a href="#contact" className="hover:text-secondary text-xl font-bold">CONTACT</a>
                    <a href="#gallery" className="hover:text-secondary text-xl font-bold">GALLERY</a>
                </nav>
            </div>
        </header>


        
    );
};

export default Header;
