import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-darkgrey">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center">
                    {/* Insert any logo or brand name here */}
                    <span className="ml-3 text-xl font-custom">Trevor</span>
                </a>
                <p className="font-custom text-sm text-white sm:ml-6 sm:mt-0 mt-4">
                    © {new Date().getFullYear()} McEachern 
                </p>
                {/* Social Icons */}
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    {/* Replace with actual icons or links */}
                    <a className="ml-3 text-darkgrey">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="ml-3 text-darkgrey">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="ml-3 text-darkgrey">
                        <i className="fab fa-instagram"></i>
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
