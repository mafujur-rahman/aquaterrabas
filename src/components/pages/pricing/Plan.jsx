import React from "react";

const plans = [
  {
    name: "STANDARD",
    price: "$97",
    features: [
      "Maintenance Service",
      "5 Different Fish and Plants",
      "Aquarium Setup",
      "Insured Goods",
    ],
  },
  {
    name: "ADVANCED",
    price: "$175",
    features: [
      "Maintenance Service",
      "5 Different Fish and Plants",
      "Aquarium Setup",
      "Insured Goods",
    ],
  },
  {
    name: "LUXURY",
    price: "$285",
    features: [
      "Maintenance Service",
      "5 Different Fish and Plants",
      "Aquarium Setup",
      "Insured Goods",
    ],
  },
];

const PlanSection = () => {
  return (
    <div className="mt-[100px]">
      {/* Container with responsive px */}
      <div className="w-full px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="common_title text-gray-800 mb-8">
            Choose Your Plan
          </h1>
          <p className="text-gray-600 max-w-4xl md:max-w-6xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo in posuere libero at
            metus volutpat dapibus. Nam vitae quam faucibus, volutpat libero vel,
            convallis nunc.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 text-center">

          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 sm:p-8 flex flex-col items-center transition-all hover:shadow-xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                {plan.name}
              </h2>

              <p className="common_title text-[#49b94e] mb-4 md:mb-6">
                {plan.price}
              </p>

              {/* Features */}
              <ul className="mx-auto mb-6 md:mb-8 space-y-2 md:space-y-3 text-left w-full max-w-xs">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-[#97f03d] mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="bg-[#49b94e] border-2 border-[#49b94e] hover:bg-transparent hover:text-[#49b94e] text-white font-bold py-3 px-8 rounded-lg transition duration-300 mt-auto">
                Buy Now
              </button>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default PlanSection;
