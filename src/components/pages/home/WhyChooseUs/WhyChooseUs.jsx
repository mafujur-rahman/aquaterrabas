"use client";
import React, { useEffect, useRef } from "react";
import { FiSettings, FiShield, FiUsers, FiAward } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: <FiSettings />,
    title: "Custom Design",
    desc: "Each aquascape is tailored to match your space, lighting, and aesthetic preferences.",
    bgImage: "/images/why-choose-us.jpg",
  },
  {
    icon: <FiShield />,
    title: "Premium Quality",
    desc: "We use only top-grade plants, materials, and filtration for long-lasting beauty.",
    bgImage: "/images/why-choose-us.jpg",
  },
  {
    icon: <FiUsers />,
    title: "Expert Team",
    desc: "Our designers and aquascape specialists bring years of professional experience.",
    bgImage: "/images/why-choose-us.jpg",
  },
  {
    icon: <FiAward />,
    title: "Proven Results",
    desc: "Dozens of satisfied clients enjoy thriving, low maintenance aquascapes built by us.",
    bgImage: "/images/why-choose-us.jpg",
  },
];

const WhyChooseUs = () => {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reset",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el, index) => {
    cardsRef.current[index] = el;
  };

  return (
    <section ref={sectionRef} className="bg-white text-black mt-[100px]">
      <div className="w-full px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 mb-12 sm:mb-16 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          We combine creativity, experience, and passion for aquascaping to
          deliver designs that are as practical as they are stunning. We combine
          creativity, experience, and passion for aquascaping to deliver designs
          that are as practical as they are stunning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              ref={(el) => addToRefs(el, index)}
              className="relative group h-full rounded-2xl overflow-hidden cursor-pointer shadow-lg bg-gray-50 min-h-[300px] flex flex-col"
            >
              {/* Background overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100"
                style={{ backgroundImage: `url(${item.bgImage})` }}
              />
              <div className="absolute inset-0 bg-[#49b94e]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 sm:p-8 text-center">
                <div className="mb-4 sm:mb-6 text-[#49b94e] group-hover:text-white transition-colors duration-500">
                  {React.cloneElement(item.icon, {
                    className: "text-4xl sm:text-5xl",
                  })}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-black group-hover:text-white mb-4 sm:mb-6 transition-colors duration-500">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 group-hover:text-white/95 leading-relaxed transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
