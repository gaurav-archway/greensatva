import React, { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md py-2 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-green-800">GREEN SATVA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
            <a href="#products" className="text-gray-700 hover:text-green-600 transition-colors">Products</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">About Us</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-green-700 focus:outline-none p-2 rounded-full hover:bg-green-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-green-600 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
            <div className="py-2 px-4">
              <a 
                href="#about" 
                className="block py-3 text-white font-medium hover:bg-green-700 px-3 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#products" 
                className="block py-3 text-white font-medium hover:bg-green-700 px-3 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#contact" 
                className="block py-3 text-white font-medium hover:bg-green-700 px-3 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
