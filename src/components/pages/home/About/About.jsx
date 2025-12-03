import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="bg-white text-black mt-[100px]">
      <div className="w-full px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="common_title mb-4 sm:mb-6">
            Our design is as natural as possible
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
            We create aquascape designs that bring the tranquility of nature
            right into your home or workspace. Each setup is crafted to be
            simple to maintain, visually stunning, and balanced with natural
            aquatic life.
            <br />
            <br />
            With years of experience, we combine art and science to design
            aquariums that thrive and inspire calmness every day.
          </p>
          <Link
            href="#"
            className="inline-block bg-[#49b94e] hover:bg-transparent hover:border-[#49b94e] border border-transparent hover:text-gray-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-medium transition"
          >
            Learn More
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1 w-full max-w-full">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/about.jpg"
              alt="Aquascape"
              width={600}
              height={400}
              className="object-cover w-full h-auto sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
