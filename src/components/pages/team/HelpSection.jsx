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
      className="relative flex items-center min-h-[60vh] py-20 px-4 font-inter text-white"
      style={{
        backgroundImage: `url('/images/02.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#111111]/98"></div>

      {/* Content */}
      <div className="relative max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {data.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center">
              
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
              <h2 className="text-white text-2xl md:text-[28px] font-semibold mt-6">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-gray-300 mt-3 leading-relaxed max-w-sm mx-auto">
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
