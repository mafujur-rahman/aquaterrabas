"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            Our design is as natural as possible
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
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
            className="bg-[#49b94e] hover:bg-transparent hover:border-[#49b94e] border border-transparent hover:text-gray-600 text-white  px-6 py-3 rounded-md font-medium transition"
          >
            Learn More
          </Link>
        </div>

        {/* Image */}
        <div className="flex-1">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/about.jpg" 
              alt="Aquascape"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
