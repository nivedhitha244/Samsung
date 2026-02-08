import React from 'react';
import { Sparkles, ArrowUp } from 'lucide-react';
import hero2 from '../assets/hero2.jpg'

const GalaxyHero = () => {



  return (
    <section 
      className="relative w-full h-[600px] bg-cover bg-center overflow-hidden font-sans"
      style={{ backgroundImage: `url('${hero2}')` }}
    >
      {/* Container */}
      <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-center">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center h-full pt-10 md:pt-0 z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-2">
            Stay connected
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-4">
            Effortlessly
          </h1>
          
          {/* Galaxy AI Badge */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-2xl md:text-3xl font-medium text-black">Galaxy AI</span>
            {/* Using fill to make the stars solid blue */}
            <Sparkles className="w-6 h-6 text-blue-400 fill-blue-400" />
            <Sparkles className="w-4 h-4 text-blue-400 fill-blue-400 -ml-1 mt-2" />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-6">
            <button className="text-black font-bold text-sm underline underline-offset-4 hover:text-gray-600 transition">
              Learn more
            </button>
            <button className="px-8 py-2 rounded-full border border-black text-black font-bold text-sm hover:bg-black hover:text-white transition-all duration-300">
              Buy
            </button>
          </div>
        </div>

        {/* Right Side: Product Image */}
      </div>

      {/* Floating UI Elements */}
      
      {/* 1. Support Chat Bubble (Right side) */}


      {/* 2. Scroll to Top (Bottom Right) */}
      <div className="absolute right-6 bottom-6 cursor-pointer">
        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-black transition">
            <ArrowUp className="w-5 h-5" />
        </div>
      </div>

    </section>
  );
};

export default GalaxyHero;