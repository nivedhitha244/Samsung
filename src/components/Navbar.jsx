import React from "react";
import { Search, ShoppingCart, User, ExternalLink } from "lucide-react";
import samsunglogo from "../assets/logo.png"; // Ensure this path is correct for your project

const Navbar = () => {
  const navLinks = [
    "Shop",
    "Mobile",
    "TV & AV",
    "Appliances",
    "Computers & Monitors",
    "Wearables",
    "Accessories",
  ];

  return (
    <nav className="font-sans bg-white w-full px-4 md:px-8 py-2 shadow-sm border-b border-gray-100 z-50 relative">
      {/* Container */}
      <div className="flex flex-col w-full">
        {/* Top Right: Utility Links */}
        <div className="flex justify-end items-center gap-6 text-xs font-bold mb-2">
          <a href="#" className="hover:text-gray-600 transition">
            Support
          </a>
          <a
            href="#"
            className="flex items-center gap-1 hover:text-gray-600 transition"
          >
            For Business <ExternalLink size={12} />
          </a>
        </div>

        {/* Main Row */}
        <div className="flex items-center justify-between">
          {/* Left Side: Logo & Main Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <img
              src={samsunglogo}
              alt="Samsung Logo"
              className="h-6 w-auto object-contain filter brightness-0"
            />

            {/* Nav Links */}
            <ul className="hidden xl:flex items-center gap-6 text-sm font-bold text-black">
              {navLinks.map((link) => (
                <li key={link} className="group relative cursor-pointer py-2">
                  {/* The Link Text */}
                  <span className="transition-colors duration-300 group-hover:text-blue-600">
                    {link}
                  </span>

                  {/* The Smooth Underline Animation */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Search & Icons */}
          <div className="flex items-center gap-6">
            {/* Search Input */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 text-gray-700 rounded-full pl-5 pr-10 py-1.5 text-sm outline-none focus:ring-1 focus:ring-blue-600 w-56 transition-all"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-800 w-4 h-4 cursor-pointer" />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5">
              <ShoppingCart className="w-6 h-6 stroke-[1.5] cursor-pointer hover:text-blue-600 transition-colors duration-300" />
              <User className="w-6 h-6 stroke-[1.5] cursor-pointer hover:text-blue-600 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
