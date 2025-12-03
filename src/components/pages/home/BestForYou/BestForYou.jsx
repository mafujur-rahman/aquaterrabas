import React from "react";
import Image from "next/image";
import { Check, Feather, Tent, Sparkles, Leaf } from "lucide-react";

const features = ["Local Source", "Expert Works", "Licensed Livestocks"];

const logos = [
  { Icon: Feather, text: "logoipsum" },
  { Icon: Tent, text: "logoipsum" },
  { Icon: Sparkles, text: "logoipsum" },
  { Icon: Leaf, text: "logoipsum" },
];

const BestForYou = () => {
  return (
    <section
      className="relative flex items-center min-h-[60vh] mt-[100px] font-inter text-white"
      style={{
        backgroundImage: `url('/images/02.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#111111]/95"></div>

      <div className="relative z-10 w-full px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Image */}
          <div className="lg:w-1/2 flex w-full">
            <div className="w-full max-h-[700px] rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src="/images/best-for-you.jpg"
                alt="Aquarium with red fish and green plants"
                width={600}
                height={700}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-start w-full">
            <h2 className="common_title mb-4 leading-snug">
              We are the best for you
            </h2>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 max-w-full sm:max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              tellus sem, maximus eget ullamcorper a, aliquam facilisis augue.
              Praesent placerat nibh ut vel malesuada, at laoreet odio
              tincidunt. Praesent et pellentesque nibh, in maximus dolor.
            </p>

            <ul className="space-y-2 mb-5">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-200 text-sm sm:text-base"
                >
                  <Check className="w-5 h-5 mr-2 text-[#97f03d]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="border border-[#97f03d] hover:bg-[#97f03d] hover:text-black text-white px-6 py-3 w-fit rounded-md font-semibold transition duration-300 shadow-lg text-sm sm:text-base"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center pt-12 sm:pt-14">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-center p-2 gap-2"
            >
              <logo.Icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#97f03d]" />
              <span className="text-sm sm:text-xl font-bold text-[#97f03d] uppercase">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestForYou;
