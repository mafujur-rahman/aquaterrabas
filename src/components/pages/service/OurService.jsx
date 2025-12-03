import React from "react";
import { FaTools, FaClipboardCheck, FaLeaf, FaFish } from "react-icons/fa";

const OurService = () => {
  const services = [
    {
      icon: <FaTools className="h-10 w-10 text-[#4CAF50]" />,
      title: "Setup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    },
    {
      icon: <FaClipboardCheck className="h-10 w-10 text-[#4CAF50]" />,
      title: "Maintenance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    },
    {
      icon: <FaLeaf className="h-10 w-10 text-[#4CAF50]" />,
      title: "Scaping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    },
    {
      icon: <FaFish className="h-10 w-10 text-[#4CAF50]" />,
      title: "LifeStore",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
    },
  ];

  return (
    <section
      className="relative flex items-center min-h-[60vh] py-12 sm:py-16 lg:py-20 mt-[100px] text-white"
      style={{
        backgroundImage: `url('/images/02.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#111111]/95"></div>

      {/* Padded content container */}
      <div className="relative z-10 w-full px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="common_title text-white mb-4">
            Our Service
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 py-14 flex flex-col items-center text-center"
            >
              <div className="mb-6">{service.icon}</div>

              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-5">
                {service.title}
              </h3>

              <p className="text-gray-600 text-base lg:text-lg mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>

              <button className="bg-[#49b94e] text-white font-semibold py-2 px-6 rounded-md border-2 border-[#49b94e] hover:bg-transparent hover:text-[#49b94e] transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
