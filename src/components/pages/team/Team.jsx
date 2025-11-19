"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Mail } from "lucide-react";

const teamMembers = [
    {
        id: 1,
        name: "Josh Brohardt",
        title: "Aquarium Builder",
        image: "/images/tom.jpg",
        socials: [
            { icon: Facebook, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Mail, href: "#" },
        ],
    },
    {
        id: 2,
        name: "Mell Hebrt",
        title: "Aquarium Builder",
        image: "/images/allec.jpg",
        socials: [
            { icon: Facebook, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Mail, href: "#" },
        ],
    },
    {
        id: 3,
        name: "Jonna Habrd",
        title: "Aquarium Builder",
        image: "/images/jonnah.jpg",
        socials: [
            { icon: Facebook, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Mail, href: "#" },
        ],
    },
];

const SocialIcon = ({ Icon, href }) => (
    <a
        href={href}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#49b94e] text-white transition duration-300 shadow-md"
    >
        <Icon size={16} />
    </a>
);

const TeamCard = ({ member }) => (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition flex flex-col items-center text-center">
        {/* Photo */}
        <div className="relative mb-5">
            <div className="rounded-full p-1 border-4 border-[#49b94e]">
                <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full object-cover"
                />
            </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-2 mb-4">
            {member.socials.map((social, index) => (
                <SocialIcon key={index} Icon={social.icon} href={social.href} />
            ))}
        </div>

        {/* Text */}
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
        <p className="text-gray-500">{member.title}</p>
    </div>
);

const Team = () => {
    return (
        <div className="w-full flex justify-center bg-gray-50 py-16 px-4">
            <div className="w-full max-w-7xl">
                {/* Header */}
                <div className="text-center max-w-7xl mx-auto mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Experienced Crew
                    </h1>
                    <p className="text-lg text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <TeamCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
