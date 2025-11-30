"use client";
import React from "react";
import Image from "next/image";
import { FaFish, FaLeaf, FaMountain } from "react-icons/fa";

const Portfolio = () => {
  const portfolioItems = [
    {
      image: "/images/portfolio-1.jpg",
      title: "River Biome",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      icon: <FaFish size={20} />,
    },
    {
      image: "/images/portfolio-2.jpg",
      title: "Planted Tank",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      icon: <FaLeaf size={20} />,
    },
    {
      image: "/images/portfolio-3.jpg",
      title: "Expert Aquascape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      icon: <FaMountain size={20} />,
    },
  ];

  return (
    <section className="mt-[100px] bg-white">
      <div className="w-full px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Portfolio
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo sed una
            lacus, egestas a pellentesque vel, ornare at est. Vestibulum eros,
            mattis ac ultricies consequat, malesuada eget nisi.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden relative flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-56 sm:h-64 md:h-72">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-xl"
                />

                {/* Icon overlapping bottom of image */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="bg-[#49b94e] border-2 border-white rounded-lg w-12 h-12 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="p-4 sm:p-6 text-center mt-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">
                  {item.description}
                  <span className="block text-[#49b94e] font-medium mt-1">
                    Read More...
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
