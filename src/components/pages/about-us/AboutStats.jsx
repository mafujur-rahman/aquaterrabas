"use client";
import { useEffect, useRef, useState } from 'react';

export function AboutStats() {
    return (
        <div
            className="w-full bg-[#121212] text-white py-20 relative bg-cover bg-center bg-no-repeat mt-[100px] "
            style={{
                backgroundImage: 'url("/images/02.png")'
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                <StatBox number={67} label="Completed Project" suffix="+" />
                <StatBox number={30} label="Professional Team" />
                <StatBox number={12} label="Years Experience" />
                <StatBox number={87} label="Satisfied Client" />
            </div>
        </div>
    );
}

function StatBox({ number, label, suffix = "" }) {
    const [isVisible, setIsVisible] = useState(false);
    const [displayNumber, setDisplayNumber] = useState(0);
    const elementRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    setIsVisible(true);
                    hasAnimated.current = true;
                }
            },
            { threshold: 0.3 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const duration = 2000;
            const steps = 60;
            const increment = number / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    setDisplayNumber(number);
                    clearInterval(timer);
                } else {
                    setDisplayNumber(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isVisible, number]);

    return (
        <div ref={elementRef}>
            <h3 className="text-5xl text-[#97f03d] font-bold">
                {displayNumber}{suffix}
            </h3>
            <p className="text-xl mt-2">{label}</p>
        </div>
    );
}