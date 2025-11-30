"use client";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-white pt-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:max-w-7xl xl:mx-auto pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <div className="w-32 sm:w-40">
              <Image
                src="/images/aqua-logo.png"
                alt="Aquassi Logo"
                width={520}
                height={520}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0">
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 text-base sm:text-lg">Home</a></li>
              <li><a href="#" className="hover:text-gray-300 text-base sm:text-lg">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300 text-base sm:text-lg">Service</a></li>
              <li><a href="#" className="hover:text-gray-300 text-base sm:text-lg">Price</a></li>
            </ul>
          </div>

          {/* Service Links */}
          <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0">
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 text-base sm:text-lg">Service</a></li>
              <li><a href="#" className="hover:text-gray-300 text-base sm:text-lg">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-300 text-base sm:text-lg">Gallery</a></li>
              <li><a href="#" className="hover:text-gray-300 text-base sm:text-lg">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center sm:items-start space-y-3">
            <div className="flex items-center space-x-2 text-sm sm:text-base">
              <svg className="w-4 h-4 text-[#97f03d]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              <span>4934 Blackwell Street, SA</span>
            </div>
            <div className="flex items-center space-x-2 text-sm sm:text-base">
              <svg className="w-4 h-4 text-[#97f03d]" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              <span>907-322-6727</span>
            </div>
            <div className="flex items-center space-x-2 text-sm sm:text-base">
              <svg className="w-4 h-4 text-[#97f03d]" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
              <span>Admin@hmail.com</span>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-4">
              {[...Array(5)].map((_, i) => (
                <a key={i} href="#" className="w-7 h-7 bg-[#97f03d] rounded-lg flex items-center justify-center text-black hover:bg-[#97f03d]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#97f03d] mt-8 py-4 text-center text-black text-sm sm:text-md">
        <p>Copyright © 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
