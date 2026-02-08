import React from 'react';
import hero from '../assets/hero.jpg'

const HeroSection = () => {


  return (
    <div 
      className="relative w-full h-[600px] bg-cover bg-center flex items-center overflow-hidden my-6"
      style={{ backgroundImage: `url('${hero}')` }}
    >
      {/* Overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between h-full">
        {/* Left Content Section */}
        <div className="text-white w-full md:w-1/2 flex flex-col items-start justify-center space-y-6 py-12 md:py-0">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Unforgettable<br />Gifting
          </h1>
          <p className="text-xl md:text-2xl font-medium">
            Visit the gift guide.
          </p>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300">
            Buy
          </button>
        </div>

        {/* Right Image Section */}
      </div>
    </div>
  );
};

export default HeroSection;