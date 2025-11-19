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
        <div className="py-20">
            <div className="container mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800 mb-8">Choose Your Plan</h1>
                    <p className="text-gray-600 max-w-6xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                        luctus nec ullamcorper mattis, pulvinar dapibus leo in posuere libero at
                        metus volutpat dapibus. Nam vitae quam faucibus, volutpat libero vel,
                        convallis nunc.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">{plan.name}</h2>

                            <p className="text-5xl font-bold text-[#49b94e] mb-6">{plan.price}</p>

                            {/* Features */}
                            <ul className="mx-auto mb-8 space-y-3 text-left">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-600">
                                        <svg
                                            className="w-5 h-5 text-[#97f03d] mr-2"
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

                            {/* Button - fixed height (no card jump) */}
                            <button className="bg-[#49b94e] border-2 border-[#49b94e] hover:bg-transparent hover:text-[#49b94e] text-white font-bold py-3 px-8 rounded-lg transition duration-300">
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
