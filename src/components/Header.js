import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/'); // Redirect to the homepage using React Router
    };

    return (
        <header className="bg-primary text-darkgrey">
            {/* "Trevor McEachern" as a large, centered title */}
            <div className="text-center">
                <button onClick={handleHomeClick} className="font-bold text-4xl md:text-6xl lg:text-6xl my-4 retro-3d-text">
                    TREVOR MCEACHERN
                </button>
            </div>

            <div className="container mx-auto p-5 flex justify-center items-center">
                <nav className="flex gap-x-8">
                    <Link to="/resume" className="hover:text-secondary text-xl font-bold">RESUME</Link>
                    <Link to="/portfolio" className="hover:text-secondary text-xl font-bold">PORTFOLIO</Link>
                    <Link to="/fun-facts" className="hover:text-secondary text-xl font-bold">FUN FACTS</Link>
                    <Link to="/contact" className="hover:text-secondary text-xl font-bold">CONTACT</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
