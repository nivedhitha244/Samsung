import React from 'react';
import { Instagram, Linkedin, Github, ChevronUp } from 'lucide-react';

// 1. Reusable Link Component for the Smooth Animation
const FooterLink = ({ href = "#", children }) => (
  <a href={href} className="group relative w-fit inline-block">
    {/* Text color transition */}
    <span className="transition-colors duration-300 group-hover:text-blue-600">
      {children}
    </span>
    {/* The Smooth Sliding Underline */}
    <span className="absolute left-0 bottom-0 h-[1px] w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
  </a>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white text-xs text-gray-600 font-sans border-t border-gray-200">
      
      {/* Disclaimer Section */}
      <div className="bg-gray-50 px-6 py-6 border-b border-gray-200">
        <div className="container mx-auto space-y-3 leading-relaxed">
          <p>
            *Images shown here are for representational purpose only, actual may vary. All features, specifications and prices are subject to change without prior notice. Model availability may vary from location to location.
          </p>
          <p>
            *Image simulated. Samsung account login may be required for certain AI features.
          </p>
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          
          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-black mb-2">Shop</h4>
            <FooterLink>Shop Home</FooterLink>
            <FooterLink>Buy Direct Get More</FooterLink>
            <FooterLink>SmartThings</FooterLink>
            <FooterLink>Live Shop</FooterLink>
            <FooterLink>Samsung Care+</FooterLink>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-black mb-2">Product</h4>
            <FooterLink>Galaxy Smartphone</FooterLink>
            <FooterLink>Galaxy Tab</FooterLink>
            <FooterLink>Galaxy Book (Laptops)</FooterLink>
            <FooterLink>Galaxy Watch</FooterLink>
            <FooterLink>TVs</FooterLink>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-black mb-2">Support</h4>
            <FooterLink>Support Home</FooterLink>
            <FooterLink>Manual & Software</FooterLink>
            <FooterLink>Service Center</FooterLink>
            <FooterLink>Track Repair</FooterLink>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-black mb-2">Account</h4>
            <FooterLink>Why Samsung Account</FooterLink>
            <FooterLink>Orders</FooterLink>
            <FooterLink>My Page</FooterLink>
            <FooterLink>Product Registration</FooterLink>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-black mb-2">Sustainability</h4>
            <FooterLink>Environment</FooterLink>
            <FooterLink>Security & Privacy</FooterLink>
            <FooterLink>Accessibility</FooterLink>
            <FooterLink>Diversity · Equity · Inclusion</FooterLink>
          </div>

          <div className="flex flex-col space-y-3">
            <h4 className="font-bold text-black mb-2">About Us</h4>
            <FooterLink>Company Info</FooterLink>
            <FooterLink>Business Area</FooterLink>
            <FooterLink>Brand Identity</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Investor Relations ↗</FooterLink>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6">
        <div className="container mx-auto px-6">
          
          <div className="mb-6 space-y-2">
            <p>Copyright ⓒ 1995-2025 SAMSUNG All Rights reserved.</p>
            <p>Please dispose of e-waste and plastic waste responsibly.</p>
            <p>Registered Office Address: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Bottom Links with Animation */}
            <div className="flex flex-wrap gap-4 md:gap-6 font-bold text-black items-center justify-center md:justify-start">
              <span>India/English</span>
              <span className="w-px h-3 bg-gray-300"></span>
              
              {/* Wrap these in a div or use FooterLink directly, but FooterLink is block-ish. 
                  For this horizontal row, we can just apply the class manually or style FooterLink to be flex-friendly.
                  Here I manually apply the style to keep them behaving as inline elements in this row. */}
              
              {["Privacy", "Legal", "CSR Policy", "Sitemap"].map((text) => (
                 <a key={text} href="#" className="group relative font-normal text-gray-600">
                    <span className="transition-colors duration-300 group-hover:text-blue-600">{text}</span>
                    <span className="absolute left-0 bottom-0 h-[1px] w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                 </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="font-bold text-black hidden md:block">Stay in the Loop?</span>
              
              <div className="flex gap-4">
                {/* Updated Links with https:// */}
                <a href="https://www.instagram.com/mikelokinz" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition hover:scale-110 duration-300">
                  <Instagram size={24} strokeWidth={1.5} />
                </a>
                
                <a href="https://www.linkedin.com/in/mikelokinz" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition hover:scale-110 duration-300">
                  <Linkedin size={24} strokeWidth={1.5} />
                </a>

                <a href="https://github.com/mikelokinz" target="_blank" rel="noopener noreferrer" className="hover:text-black transition hover:scale-110 duration-300">
                  <Github size={24} strokeWidth={1.5} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-gray-600/90 text-white rounded-full shadow-lg hover:bg-black transition-all z-50 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>

    </footer>
  );
};

export default Footer;