import React from 'react';
import { Leaf, CheckCircle, Award, DollarSign, Users, ShieldPlus } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      title: "100% Organic & Chemical-Free",
      description: "Safe for the environment, soil, and crops."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-green-600" />,
      title: "Scientifically Tested & Certified",
      description: "Ensuring high nutrient content for maximum productivity."
    },
    {
      icon: <Award className="h-12 w-12 text-green-600" />,
      title: "Eco-Friendly & Sustainable",
      description: "Supports biodiversity and soil health."
    },
    {
      icon: <DollarSign className="h-12 w-12 text-green-600" />,
      title: "Affordable & Cost-Effective",
      description: "A long-term solution for higher farm profitability."
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Trusted by Farmers",
      description: "Proven results across various farming communities."
    },
    {
      icon: <ShieldPlus className="h-12 w-12 text-green-600" />,
      title: "Enhances Soil Health",
      description: "Improves soil structure, fertility, and microbial activity naturally."
    }
  ];

  return (
    <section className="py-16 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-2">
          Why Choose Green Satva?
        </h2>

        {/* Leaf Icon Line Below Title */}
        <div className="flex items-center justify-center mb-12">
          <span className="w-12 h-[2px] bg-green-800"></span>
          <i className="fa fa-leaf text-green-800 mx-2 text-sm"></i>
          <span className="w-12 h-[2px] bg-green-800"></span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
