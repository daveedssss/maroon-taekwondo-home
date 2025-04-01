
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero relative min-h-screen flex items-center bg-[#222222]">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8 py-20 relative z-20 text-white">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            MASTER THE ART OF <span className="text-[#800020]">TAEKWONDO</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Join Dave Hermino's elite Taekwondo training center and discover the perfect balance of discipline, respect, and physical excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/classes" className="bg-[#800020] hover:bg-[#5c0017] text-white font-bold py-3 px-8 rounded-md transition-colors text-lg">
              Explore Classes
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-md transition-colors text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
