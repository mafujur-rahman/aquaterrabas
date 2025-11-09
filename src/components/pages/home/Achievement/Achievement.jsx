"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const stats = [
    {
        number: 67,
        label: "Completed Projects",
    },
    {
        number: 30,
        label: "Expert Team Members",
    },
    {
        number: 12,
        label: "Years of Excellence",
    },
    {
        number: 50,
        label: "Happy Clients",
    },
];

const Achievement = () => {
    const descriptionText = "With over a decade of experience in delivering exceptional results, our team has consistently pushed the boundaries of innovation and quality. Our track record speaks for itself through numerous successful projects and satisfied clients who trust us to bring their visions to life with precision and creativity.";

    const statsRef = useRef([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            statsRef.current.forEach((element, index) => {
                if (!element) return;

                const stat = stats[index];
                const targetNumber = stat.number;

                gsap.fromTo(element,
                    {
                        innerText: 0
                    },
                    {
                        innerText: targetNumber,
                        duration: 2,
                        ease: "power2.out",
                        snap: { innerText: 1 },
                        scrollTrigger: {
                            trigger: element,
                            start: "top 90%",
                            end: "bottom 20%",
                            toggleActions: "play none none reset"
                        }
                    }
                );
            });

            gsap.fromTo(".achievement-content",
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play none none reset"
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el, index) => {
        statsRef.current[index] = el;
    };

    return (
        <section ref={sectionRef} className="relative w-full text-white overflow-hidden rounded-lg shadow-2xl min-h-[300px]">
            {/* Background Image Container */}
            <div className="absolute inset-0">
                <Image
                    src="/images/achievement.jpg"
                    alt="Our team collaborating in a modern office environment"
                    fill
                    className="object-cover object-top"
                    priority
                />
                {/* Enhanced overlay for better readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/75 to-gray-900"></div>
                <div className="absolute inset-0 bg-[#97f03d]/65 mix-blend-overlay"></div>
            </div>

            {/* Content - Reduced padding for shorter height */}
            <div className="relative z-10 py-12 md:py-16 lg:py-20 px-4 sm:px-8">
                <div className="max-w-7xl mx-auto text-center achievement-content">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-white tracking-tight">
                        Our Achievement
                    </h2>

                    {/* Description Paragraph */}
                    <p className="text-lg text-gray-100 max-w-6xl mx-auto mb-12 font-normal leading-relaxed">
                        {descriptionText}
                    </p>

                    {/* Stats Grid - Reduced spacing */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-10">
                        {stats.map((item, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-center space-y-3 p-4"
                            >
                                {/* Number with GSAP animation */}
                                <h3 className="text-4xl md:text-5xl font-extrabold text-[#97f03d] drop-shadow-lg">
                                    <span ref={(el) => addToRefs(el, i)}>0</span>
                                    {item.number > 67 && "+"}
                                </h3>
                                {/* Label: Smaller, white/light text */}
                                <p className="text-base sm:text-lg font-semibold text-white tracking-wide leading-tight">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievement;