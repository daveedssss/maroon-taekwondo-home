
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dave Hermino Taekwondo</h3>
            <p className="text-gray-300 mb-4">
              Building champions in Taekwondo and in life. Join us to discover your full potential.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-300 hover:text-white transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <span className="font-bold">Email:</span> davesebastienghermino@gmail.com
              </p>
              <p>
                <span className="font-bold">Phone:</span> 09942553507
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dave Hermino Taekwondo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
