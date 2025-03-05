import React, { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  interval = 3000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full max-w-3xl mx-auto h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-lg">
      {images.map((image, index) => (
        <div 
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image} 
            alt={`Slide ${index + 1}`} 
            className="w-full h-full object-fill"
          />
        </div>
      ))}
      
      {/* Carousel Indicators */}
      {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-8 h-1 rounded-full transition-all ${
              index === currentSlide ? 'bg-green-600 w-12' : 'bg-white bg-opacity-60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ImageCarousel;