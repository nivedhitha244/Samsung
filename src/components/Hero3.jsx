import React from 'react';
import { Sparkles } from 'lucide-react';
import hero3 from '../assets/hero3.jpg'

const VisionAIHero = () => {


  return (
    <section 
      className="relative w-full h-[600px] bg-cover bg-center font-sans overflow-hidden"
      style={{ backgroundImage: `url('${hero3}')` }}
    >
      {/* Dark Overlay to ensure text readability against the bokeh */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col md:flex-row items-center">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center h-full space-y-6 text-white pt-12 md:pt-0">
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Be together,<br />watch together
          </h1>
          
          {/* Sub-headline with Icons */}
          <div className="flex items-center gap-2 text-2xl md:text-3xl font-medium">
            <span>Samsung Vision AI</span>
            {/* Styling Lucide icons to look like the blue sparkle emojis */}
            <div className="flex">
                <Sparkles className="w-6 h-6 text-blue-400 fill-blue-400" />
                <Sparkles className="w-4 h-4 text-blue-400 fill-blue-400 -ml-1 mt-2" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-8 pt-4">
            {/* Text Link Button */}
            <button className="text-white font-bold text-sm underline underline-offset-8 hover:text-gray-200 transition">
              Learn more
            </button>
            
            {/* Outline Button (Pill shape) */}
            <button className="px-8 py-3 rounded-full border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-black transition-all duration-300">
              View all
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionAIHero;