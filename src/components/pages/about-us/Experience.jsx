'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ProgressBar = ({ label, percentage }) => {
    const [animatedPercentage, setAnimatedPercentage] = useState(0);
    const progressBarRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const startTime = performance.now();
                    const duration = 1200;

                    const animate = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 3);

                        setAnimatedPercentage(Math.floor(easeOut * percentage));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );

        if (progressBarRef.current) {
            observer.observe(progressBarRef.current);
        }

        return () => observer.disconnect();
    }, [percentage]);

    return (
        <div className="space-y-1.5" ref={progressBarRef}>
            <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-gray-600">{label}</span>
                <span className="text-xs font-semibold text-[#97f03d]">{animatedPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div
                    className="bg-[#97f03d] h-3 transition-all duration-150 ease-out rounded-full"
                    style={{ width: `${animatedPercentage}%` }}
                />
            </div>
        </div>
    );
};

export function Experience() {
    const experienceText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia sit amet ipsum et imperdiet. Vivamus mauris tellus, faucibus eu velit eu, volutpat varius erat. Aenean in turpis quam. Maecenas scelerisque convallis turpis, id laoreet augue varius ut.";
    const projectsText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia sit amet ipsum et imperdiet. Vivamus mauris tellus, faucibus eu velit eu, volutpat varius erat. Aenean in turpis quam.";

    const progressData = [
        { label: "Satisfied Customers", percentage: 97 },
        { label: "Work in progress", percentage: 75 },
        { label: "Delivered Order", percentage: 86 },
    ];

    return (
        <div className="bg-white mt-[100px]">
            <div className="px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

                    {/* Left Image */}
                    <div className="relative overflow-hidden rounded-3xl shadow-lg">
                        <Image
                            src="/images/why-choose-us.jpg"
                            alt="Experienced Team"
                            width={700}
                            height={450}
                            className="w-full h-auto max-h-[380px] object-cover"
                            priority
                        />
                    </div>

                    {/* Experience Text */}
                    <div className="flex flex-col justify-center">
                        <h2 className="common_title mb-4 leading-tight">
                            Our Experience so Far
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            {experienceText}
                        </p>
                    </div>

                    {/* Projects Text */}
                    <div className="flex flex-col justify-center">
                        <h2 className="common_title mb-4 leading-tight">
                            Our Projects
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                            {projectsText}
                        </p>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-7 flex flex-col justify-start pt-2">
                        {progressData.map((item) => (
                            <ProgressBar
                                key={item.label}
                                label={item.label}
                                percentage={item.percentage}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}
