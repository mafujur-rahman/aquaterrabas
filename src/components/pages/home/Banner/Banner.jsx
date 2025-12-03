import React from "react";
import Image from "next/image";

const Banner = () => {
  const imageUrl = "/images/aqua-banner.jpg";

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[550px] flex items-end justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageUrl}
          alt="Hero Background"
          fill
          className="object-cover object-bottom"
          style={{ filter: "brightness(0.9)" }}
          priority
        />
      </div>

      {/* Right Side Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/50 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto pb-8 sm:pb-12">
        <div className="flex justify-end">
          <div className="text-right max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
            {/* Small Tagline */}
            <p className="text-xs sm:text-sm md:text-base font-light text-white/90 tracking-widest mb-2 uppercase">
              Bring nature into your home
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-snug sm:leading-tight md:leading-tight mb-6 sm:mb-8 drop-shadow-lg">
              Easy to setup, Easy to care & Easy to maintain
            </h1>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
              <a
                href="#"
                className="bg-[#97f03d] hover:bg-transparent hover:border-[#97f03d] hover:text-white border border-transparent text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold transition duration-300 shadow-lg text-center"
              >
                Get Started
              </a>
              <a
                href="#"
                className="border border-[#97f03d] hover:bg-[#97f03d] hover:text-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold transition duration-300 shadow-lg text-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
