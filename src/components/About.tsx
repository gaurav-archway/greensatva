import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-yellow-100 rounded-xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-black text-lg md:text-xl leading-relaxed mb-8">
              Welcome to Green Satva, your trusted partner in organic farming. We provide high-quality, eco-friendly agricultural solutions that empower farmers and promote sustainable farming. Our scientifically tested vermicompost, vermiculture, and vermiwash enhance soil fertility, boost crop yields, and reduce reliance on chemical fertilizers
              </p>
              {/* <div className="flex justify-center">
                <button className="bg-white text-green-600 font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">
                  Our Story
                </button>
              </div> */}
            </div>
          </div>
        </div>
        
        {/* Pink background section */}
        <div className="bg-pink-100 mt-0 rounded-b-xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-center text-lg italic">
              Committed to sustainable agriculture and a greener future 🌿
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;