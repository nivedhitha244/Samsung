import React from 'react';
import neo from '../assets/neo.jpg'
import frame from '../assets/frame.jpg'
import soundbar from '../assets/soundbar.jpg'
import monitor from '../assets/smart_monitor.jpg'

const ProductGrid2 = () => {
  // Placeholder data - Replace image URLs with your transparent PNGs for best results
  const products = [
    {
      id: 1,
      name: "Neo QLED 8K",
      image: neo, // Placeholder
    },
    {
      id: 2,
      name: "The Frame",
      image: frame, // Placeholder
    },
    {
      id: 3,
      name: "Q-Series Soundbar",
      image: soundbar, // Placeholder
    },
    {
      id: 4,
      name: "Smart Monitor M7",
      image: monitor, // Placeholder
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        
        {/* Grid Layout: 2 columns on mobile, 4 on large screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col items-center cursor-pointer"
            >
              {/* Product Title */}
              <h3 className="text-xl font-bold text-black mb-8 text-center group-hover:text-blue-600 transition-colors duration-300">
                {product.name}
              </h3>

              {/* Image Container with Hover Zoom Effect */}
              <div className="relative w-full aspect-square flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-[80%] h-auto object-contain transition-transform duration-500 ease-in-out group-hover:-translate-y-2 group-hover:scale-105"
                />
                
                {/* Visual Reflection Effect (Optional styling trick) */}
                <div className="absolute -bottom-4 w-[70%] h-4 bg-black/20 blur-xl rounded-[100%] opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProductGrid2;