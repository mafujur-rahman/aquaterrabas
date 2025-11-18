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
            <div className="w-full bg-gray-200 h-3.5 overflow-hidden">
                <div
                    className="bg-[#97f03d] h-3.5 transition-all duration-100 ease-out shadow-inner"
                    style={{ width: `${animatedPercentage}%` }}
                    role="progressbar"
                    aria-valuenow={animatedPercentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                />
            </div>
        </div>
    );
};

export function Experience() {
    const experienceText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia sit amet ipsum et imperdiet. Vivamus mauris tellus, faucibus eu velit eu, volutpat varius erat. Aenean in turpis quam. Maecenas scelerisque convallis turpis, id laoreet augue varius ut. Pellentesque nec metus at diam facilisis pretium. Donec non mattis metus. Nullam rutrum eleifend odio et consectetur. In ornare rutrum condimentum.";
    const projectsText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia sit amet ipsum et imperdiet. Vivamus mauris tellus, faucibus eu velit eu, volutpat varius erat. Aenean in turpis quam. volutpat varius erat. Aenean in turpis quam.";

    const progressData = [
        { label: "Satisfied Customers", percentage: 97 },
        { label: "Work in progress", percentage: 75 },
        { label: "Delivered Order", percentage: 86 },
    ];

    return (
        <div className="bg-white py-20">
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    <div className="relative overflow-hidden rounded-3xl shadow-lg">
                        <Image
                            src='/images/why-choose-us.jpg'
                            alt="Experienced Team"
                            width={600}
                            height={350}
                            className="w-full h-full max-h-[350px] object-cover"
                            priority
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl sm:text-5xl lg:text-5xl font-bold mb-4">
                            Our Experience so Far
                        </h2>
                        <p className="text-base text-gray-600 leading-relaxed">
                            {experienceText}
                        </p>
                    </div>

                    <div className="flex flex-col justify-start">
                        <h2 className="text-3xl sm:text-5xl lg:text-5xl font-bold mb-4">
                            Our Projects
                        </h2>
                        <p className="text-base text-gray-600 leading-relaxed">
                            {projectsText}
                        </p>
                    </div>

                    <div className="space-y-7 flex flex-col  justify-start pt-2">
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