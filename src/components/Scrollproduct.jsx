import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import soundbar from '../assets/soundbar.jpg'
import q8f from '../assets/q8f.jpg'
import s95f from '../assets/s95f.jpg'
import neo from '../assets/neo.jpg'
import tab from '../assets/tab.jpg'
import watch from '../assets/watch.jpg'

const RecommendedSlider = () => {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Placeholder Data based on your screenshot
  const products = [
    {
      id: 1,
      name: "Q-series Soundbar 756W 11.1.4 Ch. Q-Symp...",
      price: "₹ 92990.00",
      image: soundbar, // Placeholder
    },
    {
      id: 2,
      name: "1.38 m (55) QLED Q8F 4K Samsung Vision A...",
      price: "₹ 66290.00",
      image: q8f, // Placeholder
    },
    {
      id: 3,
      name: "1.63 m (65) S95F OLED 4K Smart TV",
      price: "₹ 204490.00",
      image: s95f, // Placeholder
    },
    {
      id: 4,
      name: "1.38 m (55) Neo QLED QN90F 4K Samsung Vi...",
      price: "₹ 120690.00",
      image: neo, // Placeholder
    },
    {
      id: 5,
      name: "Galaxy Tab A11 (8 GB)",
      price: "₹ 16999.00",
      image: tab, // Placeholder
    },
    {
      id: 6,
      name: "Galaxy Watch6 Classic",
      price: "₹ 36999.00",
      image: watch, // Placeholder
    }
  ];

  // Scroll Handler for Buttons
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Approx width of one card + gap
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount 
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Update Progress Bar on Scroll
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const totalScrollable = scrollWidth - clientWidth;
      const progress = (scrollLeft / totalScrollable) * 100;
      setScrollProgress(progress);
    }
  };

  return (
    <section className="w-full bg-white py-16 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        
        <h2 className="text-4xl font-bold mb-10 text-black">Recommended for you</h2>

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide default scrollbar
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="min-w-[280px] md:min-w-[320px] bg-gray-50 rounded-2xl p-6 flex flex-col justify-between snap-start cursor-pointer group hover:bg-gray-100 transition-colors"
            >
              {/* Product Image */}
              <div className="w-full aspect-square flex items-center justify-center mb-6 bg-white rounded-xl overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-[80%] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div>
                <h3 className="text-lg font-bold text-black mb-2 line-clamp-2 min-h-[3.5rem]">
                  {product.name}
                </h3>
                <p className="text-lg font-medium text-black">
                  {product.price}
                </p>
              </div>

              {/* Buy Button (appears on hover - optional enhancement) */}
              <button className="mt-4 w-full py-2 bg-black text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-sm">
                Buy Now
              </button>
            </div>
          ))}
        </div>

        {/* Controls Section */}
        <div className="flex items-center justify-between mt-6 border-t border-gray-200 pt-6">
          
          {/* Progress Bar */}
          <div className="relative w-1/3 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-black transition-all duration-300 ease-out"
              style={{ width: `${Math.max(10, scrollProgress)}%` }} // Min width 10%
            ></div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition disabled:opacity-30"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecommendedSlider;