import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../data/products";

const Products = () => {
  const [currentProduct, setCurrentProduct] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 40000);
    return () => clearInterval(timer);
  }, []);

  const prevProduct = () => {
    setCurrentProduct((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextProduct = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length);
  };

  return (
    <section id="products" className="py-8 md:py-8 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-4">
          Our Products
        </h2>

        <div className="flex items-center justify-center mb-8">
          <span className="w-12 h-[2px] bg-green-800"></span>
          <i className="fa fa-leaf text-green-800 mx-2 text-sm"></i>
          <span className="w-12 h-[2px] bg-green-800"></span>
        </div>

        <div className="relative max-w-6xl mx-auto mb-8">
          <button
            onClick={prevProduct}
            className="absolute top-1/2 -left-6 md:-left-16 transform -translate-y-1/2 p-3 bg-white shadow-md rounded-full"
          >
            <ChevronLeft size={32} className="text-green-700" />
          </button>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
            <div className="flex flex-col md:flex-row items-start">
              <div className="w-full md:w-2/5 flex flex-col space-y-16 mt-8">
                {products[currentProduct]?.images
                  .slice(0, 2)
                  .map((img, index) => (
                    <div
                      key={index}
                      className="w-4/5 h-44 mx-auto flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden"
                    >
                      <img
                        src={img}
                        alt={`${products[currentProduct]?.name} - Image ${
                          index + 1
                        }`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
              </div>

              {/* Right Side - Content (65%) */}
              <div className="w-full md:w-3/5">
                <div className="grid grid-cols-2 gap-4 items-start">
                  {/* Product Name - Full Width in the First Row */}
                  <h3 className="text-lg font-bold text-green-800 text-start col-span-2 mt-5">
                    {products[currentProduct]?.name}
                  </h3>

                  {/* Features Grid - Placed Properly */}
                  {products[currentProduct]?.features.map((feature, index) => (
                    <div key={index}>
                      <h4 className="text-md font-semibold text-green-700">
                        {feature.title}:
                      </h4>
                      <p className="text-gray-600 text-sm">{feature.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={nextProduct}
            className="absolute top-1/2 -right-6 md:-right-16 transform -translate-y-1/2 p-3 bg-white shadow-md rounded-full"
          >
            <ChevronRight size={32} className="text-green-700" />
          </button>
        </div>

        <div className="flex justify-center space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProduct(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProduct
                  ? "bg-green-600 w-6"
                  : "bg-green-300 hover:bg-green-400"
              }`}
              aria-label={`View product ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
