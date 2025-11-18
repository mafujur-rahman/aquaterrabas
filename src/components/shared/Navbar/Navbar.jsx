"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import {
    FaMapMarkerAlt, FaPhone, FaEnvelope, FaChevronDown, FaSearch, FaBars, FaTimes,
    FaFacebookF, FaTwitter, FaInstagram, FaYoutube
} from "react-icons/fa";
import { CiLock } from "react-icons/ci";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const navItems = [
        { name: "Home", hasDropdown: false, path: "/" },
        { name: "About Us", hasDropdown: true, path: "/about-us" },
        { name: "Service", hasDropdown: false, path: "/service" },
        { name: "Pages", hasDropdown: true, path: "/pages" },
        { name: "Contact", hasDropdown: false, path: "/contact" }
    ];

    // Determine active nav based on current path
    const getActiveNav = () => {
        const currentItem = navItems.find(item => item.path === pathname);
        return currentItem ? currentItem.name : "Home";
    };

    const handleNavigation = (path) => {
        router.push(path);
        setOpen(false);
    };

    return (
        <header className="w-full bg-[#212121]">
            {/* Main Navigation */}
            <nav className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center py-4">

                {/* Logo */}
                <div className="flex items-center">
                    <div className="w-20 h-20 relative mr-3">
                        <Image
                            src="/images/aqua-logo.png"
                            alt="AQUASSA Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            <button
                                onClick={() => handleNavigation(item.path)}
                                className={`flex items-center gap-1 py-2 text-sm font-medium transition cursor-pointer ${getActiveNav() === item.name ? 'text-[#97f03d]' : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {item.name}
                                {item.hasDropdown && <FaChevronDown className="w-3 h-3" />}
                            </button>

                            {/* Active indicator */}
                            {getActiveNav() === item.name && (
                                <div className="absolute left-0 w-full h-1 bg-[#97f03d]"></div>
                            )}
                        </div>
                    ))}
                    {/* Lock/Search Button */}
                    <div className="hidden md:flex items-center">
                        <button className="w-12 h-12 bg-[#97f03d] flex items-center justify-center rounded-lg transition hover:bg-transparent">
                            <CiLock className="w-5 h-5 text-gray-900 hover:text-[#97f03d] transition" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Menu */}
                {open && (
                    <div className="absolute top-full left-0 w-full bg-gray-900 md:hidden py-4 px-6 shadow-lg">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleNavigation(item.path)}
                                className={`flex items-center justify-between w-full py-3 text-left border-b border-gray-700 ${getActiveNav() === item.name ? 'text-[#97f03d]' : 'text-gray-300'
                                    }`}
                            >
                                {item.name}
                                {item.hasDropdown && <FaChevronDown className="w-3 h-3" />}
                            </button>
                        ))}
                        <button className="w-full mt-4 py-3 bg-[#97f03d] text-gray-900 rounded-lg font-semibold flex items-center justify-center gap-2">
                            <FaSearch className="w-4 h-4" />
                            Search
                        </button>
                    </div>
                )}
            </nav>

            {/* Top Contact Bar */}
            <div className="bg-[#97f03d] py-2 text-sm text-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6 font-semibold">
                        <div className="flex items-center gap-1">
                            <FaMapMarkerAlt className="w-4 h-4" />
                            <p>4934 Blackwell Street, SA</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <FaPhone className="w-4 h-4" />
                            <p>901-323-6727</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <FaEnvelope className="w-4 h-4" />
                            <p>Admin@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                            <a
                                key={index}
                                href="#"
                                className="w-7 h-7 bg-[#49b94e] flex items-center justify-center text-white text-xs rounded hover:opacity-80 transition"
                            >
                                <Icon className="w-3 h-3" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;