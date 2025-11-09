"use client";
import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/testimonial.jpg"
          alt="Testimonial background"
          fill
          className="object-cover"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <p className="text-[#97f03d] text-6xl font-extrabold mb-10">&ldquo;</p>
        <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed mb-12 italic">
          Aliquam lacinia enim et tellus tristique, sed bibendum nisl sagittis. Sed vel odio vel
          li. Nullam velit purus, convallis vel orci et, lacinia congue neque. Praesent dapibus
          massa eu metus viverra. Vitae ullamcorper lacus vehicula. Morbi interdum m porttitor est,
          sed venenatis leo luctus vitae. Pellentesque ornare nisi et ornare facilisis.
        </p>

        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#97f03d] mb-4 relative">
            <Image
              src="/images/person.jpg"
              alt="Dhina Fransisca"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-white font-semibold text-lg">Dhina Fransisca</p>
          <p className="text-[#97f03d] text-sm mb-4">Designer</p>
          <div className="flex justify-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
