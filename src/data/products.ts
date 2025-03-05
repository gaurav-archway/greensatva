export interface Feature {
  title: string;
  content: string;
}

export interface Product {
  id: number;
  name: string;
  images: string[];
  features: Feature[];
}

export const products: Product[] = [
    {
      id: 1,
      name: "Biochar",
      images: [
            "images/Carrousals Images/biochar1.png",
            "images/Carrousals Images/biochar2.png",
            // "images/Carrousals Images/biochar3.png"
        ],
      features: [
            {
          title: "Soil Enhancement",
          content: "Improves soil fertility by increasing nutrient retention and microbial activity.",
            },
            {
          title: "Water Retention",
          content: "Enhances the soil's ability to retain moisture.",
            },
            {
          title: "Carbon Sequestration",
          content: "Acts as a carbon sink, helping to mitigate climate change by storing carbon in the soil.",
            },
            { title: "pH Regulation", content: "Can help neutralize acidic soil.",
            },
            { title: "Reduction of Greenhouse Gases", content: "Decreases emissions of nitrous oxide and methane.",
            },
            { title: "Waste Management", content: "It convert agricultural waste into a valuable soil amendment.",
            },
            { title: "Improved Soil Structure", content: "It convert agricultural waste into a valualble soil amendment.",
            },
            { title: "Pest Reduction", content: "Reducing soil-borne diseases and pests.",
            },
            { title: "Economic Benefits", content: "Potential to reduce the need for chemical fertilizers & lowering inputs.",
            },
        ],
    },
    {
      id: 2,
      name: "Vermi Compost",
      images: [
            "images/Carrousals Images/vermiCompost1.png",
            "images/Carrousals Images/vermiCompost2.png",
            // "images/Carrousals Images/vermiCompost3.png"
        ],
      features: [
            { title: "Nutrient Content", content: "Contains essential nutrients like nitrogen (1.0%), phosphorus (0.8%), and potassium (0.8%)."
            },
            { title: "Soil Improvement", content: "Enhances soil structure, texture, aeration, and water-holding capacity."
            },
            { title: "Microbial Activity", content: "Rich in beneficial microorganisms."
            },
            { title: "Plant Growth", content: "Promotes healthier plant growth and increases crop yields."
            },
            { title: "Odourless", content: "Unlike traditional compost, vermi compost is odourless & in crystal form."
            },
            { title: "Organic Matter", content: "Provides humus, improving soil fertility and structure."
            },
            { title: "pH Neutral", content: "Typically has a neutral pH, making it suitable for a wide range of plants."
            },
            { title: "Pest Resistance", content: "Helps in reducing the incidence of pests and diseases in plants."
            },
            { title: "Environmental Benefits", content: "Utilizes organic waste, reducing landfill usage and greenhouse gases."
            },
        ],
    },
    {
      id: 3,
      name: "Vermi Wash",
      images: [
            "images/Carrousals Images/vermiWash1.png",
            "images/Carrousals Images/vermiWash2.png",
            // "images/Carrousals Images/vermiWash3.png"
        ],
      features: [
            { title: "Nutrient Content", content: "Contains nitrogen (0.01-0.0001%), phosphorus (1.70%), and potassium (26 ppm)."
            },
            { title: "Growth Hormones", content: "Rich in plant growth hormones like auxins and cytokinins."
            },
            { title: "Enzymes", content: "Contains enzymes that aid in plant metabolism."
            },
            { title: "Microbial Presence", content: "Hosts beneficial microbes that enhance soil health."
            },
            { title: "Application", content: "Used as a foliar spray or soil drench to promote plant growth."
            },
            { title: "Disease Resistance", content: "Enhances plants' resistance to diseases."
            },
            { title: "Eco-Friendly", content: "An organic alternative to chemical fertilizers and pesticides."
            },
            { title: "Easy Production", content: "Can be produced on-site in vermicomposting units."
            },
            { title: "Cost-Effective", content: "Reduces the need for chemical inputs, lowering costs."
            }
        ]
    },
    {
      id: 4,
      name: "Vermi Culture",
      images: [
            "images/Carrousals Images/vermiCulture1.png",
            "images/Carrousals Images/vermiCulture2.png",
            // "images/Carrousals Images/vermiCulture3.png"
        ],
      features: [
            { title: "Soil Enhancement", content: "Improves soil structure and fertility."
            },
            { title: "Decomposition", content: "Efficient organic waste decomposition."
            },
            { title: "Sustainability", content: "Promotes sustainable farming."
            },
            { title: "Species Used", content: "Commonly uses species like Eisenia fetida (red wigglers)."
            },
            { title: "Compost Production", content: "Produces vermicompost, a valuable soil amendment."
            },
            { title: "Waste Reduction", content: "Helps in managing organic waste efficiently."
            },
            { title: "Economic Stability", content: "Every user can earn through the sale of compost, vermi wash & worms."
            },
            { title: "Educational Value", content: "Serves as a tool for teaching about sustainable practices."
            },
            { title: "Environmental Impact", content: "Reduces reliance on chemical fertilizers."
            },
            { title: "Scalability", content: "Suitable for both small-scale and large-scale industries."
            },
            { title: "Biodiversity", content: "Promotes strong biodiversity in soil ecosystems."
            }
        ]
    },
    {
      id: 5,
      name: "Coco Peat",
      images: [
            "images/Carrousals Images/cocoPeat1.png",
            "images/Carrousals Images/cocoPeat2.png",
            // "images/Carrousals Images/cocoPeat3.png"
        ],
      features: [
            { title: "Moisture Retention", content: "Excellent water holding capacity."
            },
            { title: "Root Growth", content: "Promotes healthy root development."
            },
            { title: "Soil Structure", content: "Improves soil aeration."
            },
            { title: "Eco-Friendly", content: "Serves as a sustainable alternative to plastic pots, reducing plastic waste."
            },
            { title: "Nutrient Supply", content: "Gradually releases nutrients as they decompose, enriching the soil."
            },
            { title: "Transplanting Ease", content: "Allows for direct planting into the ground, minimizing root disturbance."
            },
            { title: "Water Retention", content: "Good moisture-holding capacity, reducing the frequency of watering."
            },
            { title: "Cost-Effective", content: "Often affordable and accessible, especially in rural areas."
            },
            { title: "Cultural Significance", content: "Aligns with traditional agricultural practices in many cultures."
            },
            { title: "Pest Resistance", content: "May deter certain pests due to natural properties."
            },
            { title: "Soil Health", content: "Contributes to improved soil structure upon decomposition."
            },
            { title: "Versatility", content: "Suitable for various plant types, including seedlings and ornamental plants."
            }
        ]
    },
    {
      id: 6,
      name: "NPK Organic Material",
      images: [
        "images/Carrousals Images/npk1.png",
        "images/Carrousals Images/npk2.png",
        // "images/Carrousals Images/npk3.png"
        ],
      features: [
            { title: "Nutrient Rich", content: "Holds water well, reducing the need for Balanced NPK composition."
            },
            { title: "Absorption", content: "Enhanced nutrient absorption."
            },
            { title: "Growth", content: "Promotes healthy plant growth."
            },
            { title: "Water Retention", content: "Reduces the need for frequent watering."
            },
            { title: "Aeration", content: "Improves soil aeration, promoting healthy root growth."
            },
            { title: "pH Level", content: "Generally has a neutral to slightly acidic pH, suitable for many plants."
            },
            { title: "Sustainability", content: "A renewable resource, making it an eco-friendly choice."
            },
            { title: "Weed-Free", content: "Free from weed seeds, reducing weed problems."
            },
            { title: "Disease Resistance", content: "Resistant to fungal growth, protecting plants."
            },
            { title: "Coco Peat Application", content: " Use in gardening, agriculture & Can also be used as animal bedding."
            }
        ]
    },
    {
      id: 7,
      name: "Cow Dung Pot",
      images: [
            "images/Carrousals Images/cowDungPot1.png",
            "images/Carrousals Images/cowDungPot2.png",
            // "images/Carrousals Images/cowDungPot3.png"
        ],
      features: [
            { title: "Eco-Friendly", content: "100% biodegradable material."
            },
            { title: "Moisture Control", content: "Natural moisture regulation."
            },
            { title: "Plant Growth", content: "Nutrients for healthy growth."
            },
            { title: "Nutrient Content", content: "Contains NPK ratio of approximately 3-2-1 (3% nitrogen, 2% phosphorus, 1% potassium)."
            },
            { title: "Soil Health", content: "Enhances soil structure and fertility by increasing organic matter content."
            },
            { title: "Microbial Activity", content: "Promotes the growth of beneficial soil microorganisms, aiding in nutrient cycling."
            },
            { title: "Slow Release", content: "Provides a gradual release of nutrients, reducing the risk of nutrient leaching."
            },
            { title: "Environmental Impact", content: "Lowers the risk of environmental pollution compared to synthetic fertilizers."
            },
            { title: "Plant Growth", content: "Supports robust plant growth and improves crop yields."
            },
            { title: "pH Balance", content: "Helps maintain soil pH levels suitable for various crops."
            },
            { title: "Water Retention", content: "Improves soil's ability to retain moisture, benefiting plant health."
            },
            { title: "Sustainability", content: "Utilizes renewable resources, contributing to sustainable agricultural practices."
            }
        ]
    },
    {
      id: 8,
      name: "Cow Dung Log Wood",
      images: [
            "images/Carrousals Images/cowDungWood1.png",
            "images/Carrousals Images/cowDungWood2.png",
            // "images/Carrousals Images/cowDungWood3.png"
        ],
      features: [
            { title: "Efficient Burning", content: "Long-lasting heat output."
            },
            { title: "Low Pollution", content: "Minimal smoke emission."
            },
            { title: "Sustainable", content: "Renewable energy source."
            },
            { title: "Alternative Fuel", content: "Eco-friendly substitute for traditional firewood, reducing deforestation."
            },
            { title: "Calorific Value", content: "Provides adequate heat energy for cooking and heating purposes."
            },
            { title: "Smoke Emission", content: "Produces less smoke compared to conventional wood, ensuring cleaner air."
            },
            { title: "Cost-Effective", content: "Utilizes readily available materials, making it an economical fuel option."
            },
            { title: "Waste Utilization", content: "Promotes the recycling of agricultural waste and cow dung."
            },
            { title: "Cultural Practices", content: "Used in traditional rituals and ceremonies in various cultures."
            },
            { title: "Ash Residue", content: "The ash produced can be used as a soil amendment, returning nutrients to the soil."
            },
            { title: "Renewable Resource", content: "Represents a sustainable energy source, as materials are replenished."
            },
            { title: "Employment", content: "Creates jobs in rural areas through production and distribution."
            }
        ]
    }
];

export default products;