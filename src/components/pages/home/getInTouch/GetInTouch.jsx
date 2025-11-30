import React from 'react';

export function GetInTouch() {
    return (
        <section 
            className="relative bg-cover bg-fixed bg-center py-20 mt-[100px]" 
            style={{ backgroundImage: "url('/images/get-in-touch.jpg')" }}
        >
            {/* Base black overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
            {/* Green overlay on top */}
            <div className="absolute inset-0 bg-[#49b94e] opacity-15"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="text-white max-w-2xl mb-8 md:mb-0">
                    <h2 className="text-5xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus sem, maximus eget ullamcorper a, aliquam facilisis a,que. Praesent placerat niibh, un velit malesuada, at laoreet odio tincidunt. Praesent et pellentesque nibh, in maximus dolor. Curabitue faucibus tellus vel tempor finbus.
                    </p>
                </div>
                <a
                    href="#"
                    className="bg-[#97f03d] hover:bg-transparent hover:border-[#97f03d] hover:text-white border border-transparent text-black px-6 py-3 rounded-md font-semibold transition duration-300 shadow-lg"
                >
                    Contact Us
                </a>
            </div>
        </section>
    );
}