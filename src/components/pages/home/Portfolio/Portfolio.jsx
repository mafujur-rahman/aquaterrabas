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
      icon: <FaFish size={24} />,
    },
    {
      image: "/images/portfolio-2.jpg",
      title: "Planted Tank",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      icon: <FaLeaf size={24} />,
    },
    {
      image: "/images/portfolio-3.jpg",
      title: "Expert Aquascape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      icon: <FaMountain size={24} />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Portfolio</h2>
          <p className="text-gray-600 max-w-6xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo sed una lacus, egestas a pellentesque vel,
            ornare at est. Vestibulum eros, mattis ac ultricies consequat, malesuada eget nisi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white  overflow-hidden relative">
              <div className="relative w-full h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                {/* Icon overlapping bottom of image */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="bg-[#49b94e] border-3 border-white rounded-lg w-12 h-12 flex items-center justify-center text-white ">
                    {item.icon}
                  </div>
                </div>
              </div>

              <div className="p-6 text-center mt-5">
                <h3 className="text-xl font-semibold text-gray-800 mt-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {item.description}
                  <span className="block text-[#49b94e] font-medium mt-1">Read More...</span>
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
