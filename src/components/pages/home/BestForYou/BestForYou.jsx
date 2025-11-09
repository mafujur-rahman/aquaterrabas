import React from 'react';
import Image from 'next/image';
import { Check, Feather, Tent, Sparkles, Leaf } from 'lucide-react';

const features = [
    "Local Source",
    "Expert Works",
    "Licensed Livestocks",
];

const logos = [
    { Icon: Feather, text: "logoipsum" },
    { Icon: Tent, text: "logoipsum" },
    { Icon: Sparkles, text: "logoipsum" },
    { Icon: Leaf, text: "logoipsum" },
];

const BestForYou = () => {
    return (
        <section
            className="relative flex items-center min-h-[60vh] py-12 sm:py-16 font-inter text-white"
            style={{
                backgroundImage: `url('/images/02.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-[#111111]/98"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    <div className="lg:w-1/2 flex">
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

                    <div className="lg:w-1/2 flex flex-col justify-start">
                        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-snug">
                            We are the best for you
                        </h2>
                        <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus sem, maximus eget ullamcorper a, aliquam facilisis augue. Praesent placerat nibh ut vel malesuada, at laoreet odio tincidunt. Praesent et pellentesque nibh, in maximus dolor.
                        </p>

                        <ul className="space-y-2 mb-5">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-200">
                                    <Check className="w-5 h-5 mr-2 text-[#97f03d]" />
                                    <span className="text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#"
                            className="border border-[#97f03d] hover:bg-[#97f03d] hover:text-black text-white  px-6 py-3 w-fit rounded-md font-semibold transition duration-300 shadow-lg"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center pt-14">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center justify-center p-2 gap-2">
                            <logo.Icon className="w-12 h-12 text-[#97f03d]" />
                            <span className="text-xl font-bold text-[#97f03d] uppercase">{logo.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestForYou;
