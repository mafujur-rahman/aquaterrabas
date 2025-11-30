"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaChevronDown,
    FaBars,
    FaTimes,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";
import { CiLock } from "react-icons/ci";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null);

    const router = useRouter();
    const pathname = usePathname();

    const navItems = [
        { name: "Home", path: "/", hasDropdown: false },
        {
            name: "About Us",
            path: "/about-us",
            hasDropdown: true,
            dropdown: [{ name: "Team", path: "/team" }],
        },
        { name: "Service", path: "/service", hasDropdown: false },
        {
            name: "Pages",
            path: "#",
            hasDropdown: true,
            dropdown: [
                { name: "Shop", path: "/shop" },
                { name: "Pricing", path: "/pricing" },
                { name: "Gallery", path: "/gallery" },
                { name: "FAQ", path: "/faq" },
            ],
        },
        { name: "Contact", path: "/contact", hasDropdown: false },
    ];

    const getActiveNav = () => {
        const found = navItems.find((item) => item.path === pathname);
        return found ? found.name : "Home";
    };

    const handleNavigation = (path) => {
        if (path !== "#") router.push(path);
        setOpen(false);
    };

    return (
        <header className="w-full bg-[#212121]">
            {/* Navbar */}
            <nav className="px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto flex justify-between items-center py-4 relative">
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
                                className={`flex items-center gap-1 py-2 text-sm font-medium transition cursor-pointer ${
                                    getActiveNav() === item.name
                                        ? "text-[#97f03d]"
                                        : "text-gray-100 hover:text-white"
                                }`}
                            >
                                {item.name}
                                {item.hasDropdown && <FaChevronDown className="w-3 h-3" />}
                            </button>

                            {/* Desktop Dropdown */}
                            {item.hasDropdown && (
                                <div className="absolute left-0 top-full bg-[#212121] border border-gray-700 shadow-md rounded hidden group-hover:block min-w-[130px] z-20">
                                    {item.dropdown.map((sub) => (
                                        <button
                                            key={sub.name}
                                            onClick={() => router.push(sub.path)}
                                            className="block w-full text-left px-4 py-2 text-gray-100 hover:text-[#49b94e]"
                                        >
                                            {sub.name}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {getActiveNav() === item.name && (
                                <div className="absolute left-0 w-full h-1 bg-[#97f03d]"></div>
                            )}
                        </div>
                    ))}

                    {/* Lock Button */}
                    <button className="w-12 h-12 bg-[#97f03d] flex items-center justify-center rounded-lg transition hover:bg-transparent">
                        <CiLock className="w-5 h-5 text-gray-900 hover:text-[#97f03d] transition" />
                    </button>
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
                    <div className="md:hidden w-full bg-gray-900 py-4 px-[20px] sm:px-[30px] shadow-lg absolute top-full left-0 z-30">
                        {navItems.map((item) => (
                            <div key={item.name} className="border-b border-gray-700">
                                <button
                                    onClick={() =>
                                        item.hasDropdown
                                            ? setMobileDropdown(
                                                  mobileDropdown === item.name ? null : item.name
                                              )
                                            : handleNavigation(item.path)
                                    }
                                    className={`flex items-center justify-between w-full py-3 text-left ${
                                        getActiveNav() === item.name
                                            ? "text-[#97f03d]"
                                            : "text-gray-100"
                                    }`}
                                >
                                    {item.name}
                                    {item.hasDropdown && <FaChevronDown className="w-3 h-3" />}
                                </button>

                                {/* Mobile Dropdown */}
                                {item.hasDropdown && mobileDropdown === item.name && (
                                    <div className="pl-4 pb-2">
                                        {item.dropdown.map((sub) => (
                                            <button
                                                key={sub.name}
                                                onClick={() => handleNavigation(sub.path)}
                                                className="block w-full text-left py-2 text-gray-400 hover:text-white"
                                            >
                                                {sub.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </nav>

            {/* Social / Contact Bar BELOW Navbar */}
            <div className="bg-[#97f03d] py-2 text-sm text-gray-900">
                <div className="px-[20px] md:px-[30px] lg:px-[30px] xl:max-w-7xl xl:mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
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
                    <div className="flex gap-2 mt-2 sm:mt-0">
                        {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                            <a
                                key={i}
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
