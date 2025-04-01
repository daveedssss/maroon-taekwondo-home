
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#800020] text-white py-4 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          DAVE HERMINO TAEKWONDO
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-gray-200 transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-medium hover:text-gray-200 transition-colors">
            About
          </Link>
          <Link to="/classes" className="font-medium hover:text-gray-200 transition-colors">
            Classes
          </Link>
          <Link to="/contact" className="font-medium hover:text-gray-200 transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="md:hidden">
          <button className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
