import React from 'react';
import ImageCarousel from './ImageCarousel';

const Hero = () => {
  const carouselImages = [
    "images/img1.png",
    "images/img2.png"
  ];
  
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80')"
      }}
    >
      <div className="container mx-auto px-4 text-center">
        
        <div className="flex justify-center mb-12">
          {/* <Leaf className="h-16 w-16 md:h-24 md:w-24 text-green-600" /> */}
          {/* <img src="/images/logo.svg" alt="Green Satva Logo" className="h-16 w-auto" /> */}
        </div>

        <div className="mb-12">
          <ImageCarousel images={carouselImages}/>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <a 
            href="#about"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-colors shadow-lg"
          >
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;