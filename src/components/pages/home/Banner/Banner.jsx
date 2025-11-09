import React from "react";
import Image from "next/image";

const Banner = () => {
  const imageUrl = "/images/aqua-banner.jpg";

  return (
    <section className="relative w-full h-[50vh] lg:h-[550px] flex items-end justify-center overflow-hidden">
      {/* Background Image - positioned to show bottom part */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageUrl}
          alt="Hero Background"
          fill
          className="object-cover object-bottom"
          style={{ filter: 'brightness(0.9)' }}
          priority
        />
      </div>

      {/* Right Side Overlay Only */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/50 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-8 pb-8 sm:pb-12">
        <div className="flex justify-end">
          <div className="text-right max-w-3xl">
            {/* Small Tagline */}
            <p className="text-sm font-light text-white/90 tracking-widest mb-2 uppercase">
              Bring nature into your home
            </p>

            {/* Main Heading - Now stays on the right side */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8 drop-shadow-lg">
              Easy to setup, Easy to care & Easy to maintain
            </h1>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-4">
              <a
                href="#"
               className="bg-[#97f03d] hover:bg-transparent hover:border-[#97f03d] hover:text-white border border-transparent text-black px-6 py-3 rounded-md font-semibold transition duration-300 shadow-lg"
              >
                Get Started
              </a>
              <a
                href="#"
                className="border border-[#97f03d] hover:bg-[#97f03d] hover:text-black text-white  px-6 py-3 rounded-md font-semibold transition duration-300 shadow-lg"
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