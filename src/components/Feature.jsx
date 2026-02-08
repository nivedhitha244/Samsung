import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Monitor, ShoppingBag, Sparkles } from 'lucide-react';

const StoriesSlider = () => {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Custom SmartThings Icon (SVG approximation)
  const SmartThingsLogo = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 text-white">
      <circle cx="12" cy="12" r="4" stroke="currentColor" />
      <circle cx="12" cy="4" r="2" fill="white" stroke="none"/>
      <circle cx="20" cy="11" r="2" fill="white" stroke="none"/>
      <circle cx="20" cy="19" r="2" fill="white" stroke="none"/>
      <circle cx="4" cy="19" r="2" fill="white" stroke="none"/>
      <circle cx="4" cy="11" r="2" fill="white" stroke="none"/>
      <path d="M12 8V6 M18 12h2 M18 17l1.5 1.5 M6 17l-1.5 1.5 M6 12H4" strokeLinecap="round"/>
    </svg>
  );

  const stories = [
    {
      id: 1,
      title: "Samsung Smart TV",
      type: "icon",
      icon: <Monitor className="w-16 h-16 text-white stroke-[1]" />,
      gradient: "bg-gradient-to-br from-[#5378bc] to-[#8CA6DB]", // Deep Blue
    },
    {
      id: 2,
      title: "Bespoke AI",
      type: "text",
      cardText: "Bespoke AI",
      gradient: "bg-gradient-to-br from-[#6daed9] to-[#a3d5f1]", // Light Blue
    },
    {
      id: 3,
      title: "SmartThings",
      type: "icon",
      icon: <SmartThingsLogo />,
      gradient: "bg-gradient-to-br from-[#0091E2] to-[#4BC0F0]", // Bright Cyan
    },
    {
      id: 4,
      title: "Galaxy AI",
      type: "text",
      cardText: "Galaxy AI",
      gradient: "bg-gradient-to-br from-[#68c1b8] to-[#97e0d9]", // Teal/Mint
    },
    {
      id: 5,
      title: "Buy Direct Get More",
      type: "icon",
      icon: <ShoppingBag className="w-16 h-16 text-white stroke-[1]" />,
      gradient: "bg-gradient-to-br from-[#555] to-[#999]", // Grey
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount 
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  return (
    <section className="w-full bg-white py-12 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-10 text-black">Explore the Stories</h2>

        {/* Scroll Container */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col gap-4 snap-start cursor-pointer group">
              
              {/* Card Surface */}
              <div className={`w-[260px] h-[260px] md:w-[280px] md:h-[280px] rounded-2xl flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 shadow-sm ${story.gradient}`}>
                
                {/* Content Logic */}
                {story.type === 'icon' ? (
                  // Icon Type (TV, SmartThings, Bag)
                  <div className="bg-white/10 p-6 rounded-[2rem] backdrop-blur-sm border border-white/20">
                    {story.icon}
                  </div>
                ) : (
                  // Text Type (Bespoke AI, Galaxy AI)
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-white drop-shadow-md">{story.cardText}</span>
                    <div className="flex">
                        <Sparkles className="w-5 h-5 text-blue-200 fill-blue-200 animate-pulse" />
                        <Sparkles className="w-3 h-3 text-blue-100 fill-blue-100 -ml-1 mt-2" />
                    </div>
                  </div>
                )}
                
                {/* Hover Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Title Below Card */}
              <span className="text-lg font-bold text-black group-hover:text-blue-600 transition-colors">
                {story.title}
              </span>
            </div>
          ))}
        </div>

        {/* Navigation & Progress */}
        <div className="flex items-center justify-between mt-8 border-t border-gray-200 pt-6">
          <div className="relative w-1/3 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-black transition-all duration-300"
              style={{ width: `${Math.max(20, scrollProgress)}%` }} 
            ></div>
          </div>

          <div className="flex gap-4">
            <button onClick={() => scroll('left')} className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StoriesSlider;