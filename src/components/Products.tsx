import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Biochar",
      image: "/images/biochor.png",
      description: "Biochar improves soil fertility, retains moisture, boosts yield, and reduces carbon emissions"
    },
    {
      id: 2,
      name: "Vermi Compost",
      image: "/images/VermiCompost.png",
      description: "Vermi compost enriches soil, improves aeration, boosts growth, and enhances microbes"
    },
    {
      id: 3,
      name: "Vermi Wash",
      image: "/images/vermiWash.png",
      description: "Vermi Wash is a liquid bio-fertilizer that boosts soil fertility and immunity"
    },
    {
      id: 4,
      name: "Vermi Culture",
      image: "/images/vermiCulture.png",
      description: "Vermi Culture enhances soil health, decomposes organic waste"
    },
    {
      id: 5,
      name: "Coco Peat",
      image: "images/cocoPeat.png",
      description: "Coco Peat retains moisture, improves soil aeration, enhances root growth"
    },
    {
      id: 6,
      name: "NPK Organic Material",
      image: "images/npkOrganicMaterial.png",
      description: "NPK Organic Material enriches soil, enhances nutrient absorption"
    },
    {
      id: 7,
      name: "Cow Dung Pot",
      image: "images/cowDungPot.png",
      description: "Cow Dung Pot is eco-friendly, retains moisture, promotes plant growth"
    },
    {
      id: 8,
      name: "Cow Dung Log Wood",
      image: "images/cowDungLogWood.png",
      description: "Cow Dung Log Wood is eco-friendly, burns efficiently, reduces pollution"
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-16">
          Our Products
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;