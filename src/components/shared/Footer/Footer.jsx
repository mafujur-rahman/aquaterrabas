import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-white pt-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start w-40 h-auto">
            <Image
              src="/images/aqua-logo.png" 
              alt="Aquassi Logo"
              width={520}
              height={520}
            />
          </div>

          {/* Navigation Links */}
          <div>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-300 text-lg">Home</a></li>
              <li><a href="#" className="hover:text-gray-300 text-lg">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300 text-lg">Service</a></li>
              <li><a href="#" className="hover:text-gray-300 text-lg">Price</a></li>
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-300 text-lg">Service</a></li>
              <li><a href="#" className="hover:text-gray-300 text-lg">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-300 text-lg">Gallery</a></li>
              <li><a href="#" className="hover:text-gray-300 text-lg">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-[#97f03d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
              <span className="text-md">4934 Blackwell Street, SA</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-[#97f03d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              <span className="text-md">907-322-6727</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-[#97f03d]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              <span className="text-md">Admin@hmail.com</span>
            </div>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-7 h-7 bg-[#97f03d] rounded-lg flex items-center justify-center text-black hover:bg-[#97f03d]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C17.34 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
              </a>
              <a href="#" className="w-7 h-7 bg-[#97f03d] rounded-lg flex items-center justify-center text-black hover:bg-[#97f03d]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.297 2H15.7C19.198 2 22 4.802 22 8.297V15.7C22 19.199 19.199 22 15.7 22H8.297C4.802 22 2 19.198 2 15.7V8.297C2 4.802 4.802 2 8.297 2zm.82 2.766a1.173 1.173 0 00-.773.297c-.2.17-.32.404-.32.656a1.172 1.172 0 00.32.657c.17.169.378.266.606.297a.895.895 0 00.773-.297c.2-.17.32-.404.32-.657a1.172 1.172 0 00-.32-.656c-.17-.17-.378-.266-.606-.297zm.581 2.375a.938.938 0 00-1.65.625.938.938 0 00.625 1.063c.5.062.906-.281.906-.281s-.062-.594-.062-.907c0-.281-.125-.5-.125-.5zm4.875 1.594c.312 0 .563.25.563.562v5.625c0 .313-.25.563-.563.563h-1.188V12.188c0-1.094-.125-2.094-1.875-2.094-.937 0-1.562.625-1.562 1.563v3.875H7.75c-.312 0-.562-.25-.562-.563v-5.625c0-.312.25-.562.562-.562h1.188V8.125h.062s.938-1.563 3.094-1.563c2.031 0 3.594 1.344 3.594 4.156zM18.438 6.563h-1.188V5.375c0-.313-.25-.563-.563-.563h-2.812c-.313 0-.563.25-.563.563V6.563h-1.188c-.313 0-.563.25-.563.562v.938c0 .313.25.563.563.563h1.188v2.375c0 .313.25.563.563.563h2.812c.313 0 .563-.25.563-.563v-2.375h1.188c.313 0 .563-.25.563-.563v-.938c0-.312-.25-.562-.563-.562zM15.7 4.25h-7.406c-2.203 0-4.008 1.805-4.008 4.008v7.406c0 2.203 1.805 4.008 4.008 4.008h7.406c2.203 0 4.008-1.805 4.008-4.008v-7.406c0-2.203-1.805-4.008-4.008-4.008z" clipRule="evenodd"></path></svg>
              </a>
              <a href="#" className="w-7 h-7 bg-[#97f03d] rounded-lg flex items-center justify-center text-black hover:bg-[#97f03d]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.417 2.865 8.19 6.839 9.504.5.092.682-.217.682-.483 0-.237-.007-.866-.012-1.693-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.468-1.11-1.468-.908-.619.069-.607.069-.607 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.829.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.93 0-1.089.387-1.979 1.029-2.673-.103-.253-.446-1.266.098-2.633 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0112 6.814c.85.006 1.7.102 2.5.304 1.909-1.29 2.747-1.022 2.747-1.022.546 1.367.202 2.38.098 2.633.642.695 1.029 1.584 1.029 2.673 0 3.823-2.339 4.67-4.562 4.922.357.307.676.917.676 1.854 0 1.33-.012 2.41-.012 2.737 0 .267.18.577.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
              </a>
              <a href="#" className="w-7 h-7 bg-[#97f03d] rounded-lg flex items-center justify-center text-black hover:bg-[#97f03d]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.164 16.297c-.201-.017-.406-.027-.611-.027-2.618 0-4.475 1.638-4.475 4.938v.001h8.188v-.001c0-3.3-1.857-4.938-4.475-4.938zM12 5.75c-1.82 0-3.313 1.493-3.313 3.313 0 1.82 1.493 3.312 3.313 3.312S15.313 10.883 15.313 9.063c0-1.82-1.493-3.313-3.313-3.313z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#97f03d] mt-8 py-4 text-center text-black text-md">
        <p>Copyright © 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;