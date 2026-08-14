import React from "react";
import {
  ClipboardCheck,
  BadgeCheck,
  HandCoins,
  CircleCheck,
  Database,
  ThumbsUp,
} from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "Expert Guidance",
    description:
      "Receive professional insights to make informed real estate decisions confidently.",
  },
  {
    icon: BadgeCheck,
    title: "Tailored Solutions",
    description:
      "We customize property options based on your specific needs and preferences.",
  },
  {
    icon: HandCoins,
    title: "Market Expertise",
    description:
      "Leverage our deep understanding of market trends for smart investments.",
  },
  {
    icon: CircleCheck,
    title: "Seamless Process",
    description:
      "Enjoy a smooth, stress-free experience from property search to final transaction.",
  },
  {
    icon: Database,
    title: "Client Focused",
    description:
      "We prioritize your satisfaction with personalized service every step of the journey.",
  },
  {
    icon: ThumbsUp,
    title: "Trusted Partners",
    description:
      "Work with a reliable team committed to delivering exceptional results for you.",
  },
];

const Features = () => {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
      
      {/* Heading */}
      <div className="mx-auto max-w-4xl text-center">
        
        {/* Small title */}
        <div className="mb-7 flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-sm bg-blue-500"></span>

          <span className="text-sm font-semibold text-gray-700">
            Features
          </span>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl font-medium leading-[1.15] tracking-tight text-gray-800 sm:text-5xl lg:text-[52px]">
          Discover the advantages and
          <br />
          exclusive benefits
        </h2>
      </div>

      {/* Features Grid */}
      <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-24">
        
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div key={index} className="min-h-[170px]">
              
              {/* Icon */}
              <div className="mb-9">
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  className="text-blue-500"
                />
              </div>

              {/* Title */}
              <h3 className="mb-7 text-[22px] font-normal text-gray-800">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="max-w-[360px] text-[17px] leading-8 text-gray-400">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;