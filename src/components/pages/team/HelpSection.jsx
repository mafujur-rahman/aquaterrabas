"use client";
import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "Dont bother do it yourself",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi mauris, lacinia eu lacinia ac, rutrum ac dolor.",
    img: "/images/help-1.jpg",
  },
  {
    id: 2,
    title: "We are here ready to help",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi mauris, lacinia eu lacinia ac, rutrum ac dolor.",
    img: "/images/help-2.jpg",
  },
];

const HelpSection = () => {
  return (
    <section
      className="relative flex items-center min-h-[60vh] py-20 mt-[100px]  font-inter text-white"
      style={{
        backgroundImage: `url('/images/02.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#111111]/95"></div>

      {/* Content */}
      <div className="relative w-full px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20">

          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="w-full overflow-hidden rounded-2xl">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={700}
                  height={450}
                  className="rounded-2xl object-cover w-full h-auto"
                />
              </div>

              {/* Title */}
              <h2 className="text-white text-2xl md:text-[28px] lg:text-[30px] font-semibold mt-6">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-gray-300 mt-3 leading-relaxed max-w-sm mx-auto md:max-w-md">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HelpSection;
